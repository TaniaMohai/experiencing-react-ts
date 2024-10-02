import { FunctionComponent, ReactElement } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { getRoutes } from './get-routes.util';

export const RoutesRenderer: FunctionComponent = (): ReactElement | null => {
  const routes: RouteObject[] = getRoutes();
  return useRoutes(routes);
};
