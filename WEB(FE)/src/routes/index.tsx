import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const auth = useAuth();

  const commonROutes = [{ path: "/", element: <Home /> }];

  const routes = auth.user ? protectedRoutes : publicROutes;

  const element = useROutes([...AppRoutes, ...commonRoutes]);

  return <>{element}</>;
};
