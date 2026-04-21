import type { RouteObject } from "react-router";

interface ModuleLoaderResult {
  default: React.ComponentType;
}

type CreateLazyRouteOptions = Pick<RouteObject, "path" | "HydrateFallback"> & {
  moduleLoader: () => Promise<ModuleLoaderResult>;
};

/**
 * Creates a lazy route that can be used to load a route component lazily.
 * @param options The options for creating a lazy route.
 * @returns The created route object.
 * @example
 * ```typescript
 * // app/appRoutes.tsx
 * import { createLazyRoute } from "./createLazyRoute";
 *
 * export const appRoutes: RouteObject[] = [
 *   createLazyRoute({
 *     path: "/",
 *     moduleLoader: () => import("../features/home/HomePage"),
 *   }),
 * ];
 *
 * // features/home/HomePage.tsx
 * export default function HomePage() {
 *   return <h1>Home Page</h1>;
 * }
 * ```
 */
export function createLazyRoute(options: CreateLazyRouteOptions): RouteObject {
  const { moduleLoader, ...routeObject } = options;
  return {
    // TODO: Add proper fallback element, like a loading spinner.
    hydrateFallbackElement: <></>,
    ...routeObject,
    lazy: async () => {
      const module = await moduleLoader();
      return {
        Component: module.default,
      };
    },
  };
}
