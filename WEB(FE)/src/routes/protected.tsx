import { Suspense } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { lazyImport } from "@/utils/lazyImport";
import { MainLayout } from "@/components/Layout";

const { MyRoutes } = lazyImport(() => import("@/features/my"), "MyRoutes");
const { RoutineRoutes } = lazyImport(
  () => import("@/features/routine"),
  "RoutineRoutes"
);

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
    path: "/",
    element: <App />,
    children: [
      { path: "/user/*", element: <MyRoutes /> },
      { path: "/routine/*", element: <RoutineRoutes /> },
      { path: "*", element: <Navigate to="." /> },
    ],
  },
];
