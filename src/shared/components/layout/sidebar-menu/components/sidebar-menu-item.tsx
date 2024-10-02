import React, {
  FunctionComponent,
  ReactElement,
  useMemo,
  useState,
} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
  ListItemIcon,
  ListItem,
  Paper,
  Typography,
  Box,
  Collapse,
  ListItemText,
  ListItemButton,
  List,
} from '@mui/material';

import styles from './styles/sidebar-menu-item.module.css';
import { RouteCustomProps } from '../../../../utils/routes/types/route-custom-props.type';
import { SidebarMenuPropsModel } from '../models/sidebar-menu.props';

export const SidebarMenuItem: FunctionComponent<SidebarMenuPropsModel> = ({
  menuItem,
  isMenuOpen,
}: SidebarMenuPropsModel) => {
  const navigate = useNavigate();

  // TODO: replace the below mocked value
  // TODO: styled components
  const defaultOpen = true;
  const [isListItemOpen, setIsListItemOpen] = useState<boolean>(defaultOpen);
  const mouseOpenState = useMemo<boolean>(() => isMenuOpen, [isMenuOpen]);

  const ExpandSideBarMenuIcon = (): ReactElement =>
    isListItemOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />;

  const menuItemChildren = useMemo<RouteCustomProps[] | undefined>(() => {
    return (menuItem.children as RouteCustomProps[])?.filter(
      item => !item.notVisibleInMenu,
    );
  }, [menuItem]);

  return (
    <ListItem sx={{ padding: '0' }}>
      <Paper
        component="div"
        sx={{
          width: '100%',
          boxShadow: 'none',
          mr: 'auto',
        }}
      >
        <NavLink
          to={menuItem.path as string}
          className={({ isActive }) => {
            let cls = styles.navLink;
            cls += isActive ? ' ' + styles.active : '';
            return cls;
          }}
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
            event.stopPropagation();
            event.preventDefault();
            navigate(`${menuItem.path}`);
            setIsListItemOpen(!isListItemOpen);
          }}
        >
          {({ isActive }) => (
            <>
              {menuItem.menuIcon && (
                <ListItemIcon className={isActive ? styles.activeIcon : ''}>
                  {menuItem.menuIcon}
                </ListItemIcon>
              )}

              {mouseOpenState && (
                <>
                  <Typography
                    variant="h6"
                    sx={{ mr: 'auto' }}
                    className={isActive ? styles.active : ''}
                  >
                    {menuItem.title}
                  </Typography>
                  <Box sx={{ pr: 3 }}>
                    <ExpandSideBarMenuIcon />
                  </Box>
                </>
              )}
            </>
          )}
        </NavLink>
        {menuItemChildren?.map((child, index) => {
          return (
            <Collapse
              in={isListItemOpen}
              key={index}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText primary={child.title} />
                </ListItemButton>
              </List>
            </Collapse>
          );
        })}
      </Paper>
    </ListItem>
  );
};
