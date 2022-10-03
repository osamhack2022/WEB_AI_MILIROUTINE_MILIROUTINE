import { useRoutes } from "react-router-dom";

import { useAuth } from "@/lib/auth";
import { Landing } from "@/features/misc";
import { Footer } from "@/components/Element";
import { protectedRoutes } from "./protected";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const auth = useAuth();

  const commonRoutes = [{ path: "/", element: <Landing /> }];

  const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return (
    <>
      {element}
      <Footer />
    </>
  );
};
