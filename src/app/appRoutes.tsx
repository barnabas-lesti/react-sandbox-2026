import { type RouteObject } from "react-router";

import { createLazyRoute } from "./createLazyRoute";

export const appRoutes: RouteObject[] = [
  createLazyRoute({
    path: "/",
    moduleLoader: () => import("#features/home/HomePage"),
  }),
];
