import { FunctionComponent } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
} from '@mui/material';

import { GlobalSearchBar } from './components/global-searchbar';
import { WHITE } from '../../../utils/constants/color-constants.util';

// todo: decide what to add here (ex: autocomplete, i18n, darkmode-switch, notifications)

export const Topbar: FunctionComponent = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <MenuIcon />

        <Grid container spacing={2} sx={{ placeItems: 'center' }}>
          <Grid item xs={10}>
            <GlobalSearchBar />
          </Grid>

          <Grid item xs={2}>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
              <Tooltip title="Notifications">
                <IconButton
                  sx={{
                    color: WHITE,
                    '&:focus': {
                      outline: 'none !important',
                    },
                  }}
                >
                  <NotificationsNoneIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="User">
                <Avatar sx={{ bgcolor: 'purple' }}>a</Avatar>
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
