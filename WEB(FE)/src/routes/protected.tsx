import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { MainLayout } from "@/components/Layout";

const App = () => {
  return (
    <MainLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: "/app",
    element: <App />,
    children: [{ path: "*", element: <Navigate to="." /> }],
  },
];
