import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import { SidebarMenu } from './sidebar-menu/sidebar-menu';
import { Topbar } from './topbar/topbar';

export const Layout: FunctionComponent = () => {
  return (
    <>
      <Topbar />
      <SidebarMenu />
      <Outlet />
    </>
  );
};
