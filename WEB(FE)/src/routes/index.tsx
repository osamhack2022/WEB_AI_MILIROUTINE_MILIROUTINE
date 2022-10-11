import { useRoutes } from "react-router-dom";

import { useAuth } from "@/lib/auth";
import { LandingPage, PopularPage } from "@/features/misc";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [
    { path: "/", element: <LandingPage /> },
    { path: "/popular", element: <PopularPage /> },
  ];

  // const routes = auth.user ? protectedRoutes : publicRoutes;

  // const element = useRoutes([...routes, ...commonRoutes]);

  const element = useRoutes([
    ...protectedRoutes,
    ...publicRoutes,
    ...commonRoutes,
  ]);

  return <>{element}</>;
};
