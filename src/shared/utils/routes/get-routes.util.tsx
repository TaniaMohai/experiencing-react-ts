import ChecklistIcon from '@mui/icons-material/Checklist';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';

import { RouteCustomProps } from './types/route-custom-props.type';
import { Layout } from '../../components/layout/layout';

export const getRoutes = (): RouteCustomProps[] => [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'users',
        title: 'Users',
        element: <div>users</div>,
        menuIcon: <PersonIcon />,
        children: [
          {
            path: 'overview',
            title: 'Overview', //here will be the table & card list
            element: <div>Users List</div>,
          },
          {
            path: 'add',
            title: 'Add New User',
            element: <div>Users Create Layout</div>,
            notVisibleInMenu: true,
            children: [
              {
                path: 'basic-information',
                title: 'Basic Information',
                element: <div>User Basic Info</div>,
              },
              {
                path: 'page2', //todo: think about something
                title: 'page2',
                element: <div>Think about the content of this page!</div>,
              },
            ],
          },
          {
            path: 'menu-item2',
            title: 'Menu Item 2',
            element: <div>Menu Item 2</div>,
          },
          {
            path: 'edit/:id',
            title: 'Edit User Info',
            element: <div>Users Create Layout</div>,
            notVisibleInMenu: true,
            children: [
              {
                path: 'basic-information',
                title: 'Basic Information',
                element: <div>User Basic Info</div>,
              },
              {
                path: 'page2', //todo: think about something
                title: 'page2',
                element: <div>Think about the content of this page!</div>,
              },
              // {
              //   path: 'reports',
              //   title: 'Reports',
              //   element: <VehicleReports />,
              // },
            ],
          },
        ],
      },
      {
        path: 'products',
        title: 'Products',
        element: <div>Products</div>,
        menuIcon: <LocalMallIcon />,
      },
      {
        path: 'todos',
        title: 'Todos',
        element: <div>Todos</div>,
        menuIcon: <ChecklistIcon />,
      },
      {
        path: 'quotes',
        title: 'Quotes',
        element: <div>Quotes</div>,
        menuIcon: <FormatQuoteIcon />,
      },
    ],
  },
];
