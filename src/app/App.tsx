import { createBrowserRouter, RouterProvider } from "react-router";

import { appRoutes } from "./appRoutes";

const router = createBrowserRouter(appRoutes);

export function App() {
  return <RouterProvider router={router} />;
}
