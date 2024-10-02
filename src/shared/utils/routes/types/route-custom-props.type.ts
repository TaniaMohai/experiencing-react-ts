import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

export type RouteCustomProps = RouteObject & {
  title?: string;
  path?: string;
  menuIcon?: ReactNode;
  notVisibleInMenu?: boolean;
  children?: RouteCustomProps[];
};
