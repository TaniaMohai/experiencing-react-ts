import { FunctionComponent, ReactElement, useMemo, useState } from 'react';

import { Divider, Drawer, List, styled } from '@mui/material';

import MenuStateButton from './components/menu-state-button';
import { SidebarMenuItem } from './components/sidebar-menu-item';
import { BaseSidebarMenuProps } from './models/base-sidebar-menu.props';
import { getRoutes } from '../../../utils/routes/get-routes.util';
import { RouteCustomProps } from '../../../utils/routes/types/route-custom-props.type';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// TODO: DELETE PROPS IF NOT NEEDED
export const SidebarMenu: FunctionComponent<
  BaseSidebarMenuProps
> = (): ReactElement => {
  const routes = useMemo(
    () => getRoutes()[0].children as RouteCustomProps[],
    [],
  );
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleMenuState = (): void => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: isOpen ? 240 : 'unset',
        '& .MuiDrawer-paper': {
          width: isOpen ? 240 : 'unset',
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
        },
      }}
    >
      <DrawerHeader>{isOpen && <p>insert logo here</p>}</DrawerHeader>
      <Divider />
      <List>
        {routes?.map(
          route =>
            !route.notVisibleInMenu && (
              <SidebarMenuItem
                key={route.title}
                menuItem={route}
                isMenuOpen={isOpen}
                // isMenuHovered={isHovered}
              />
            ),
        )}
      </List>
      <MenuStateButton
        onClick={handleMenuState}
        isOpen={isOpen}
      ></MenuStateButton>
    </Drawer>
  );
};
