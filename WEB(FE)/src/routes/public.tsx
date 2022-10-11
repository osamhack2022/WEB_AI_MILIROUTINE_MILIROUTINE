import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { lazyImport } from "@/utils/lazyImport";
import { AuthLayout } from "@/components/Layout";

const { AuthRoutes } = lazyImport(
  () => import("@/features/auth"),
  "AuthRoutes"
);

const App = () => {
  return (
    <AuthLayout>
      <Suspense>
        <Outlet />
      </Suspense>
    </AuthLayout>
  );
};

export const publicRoutes = [
  {
    path: "/auth/*",
    element: <App />,
    children: [{ path: "*", element: <AuthRoutes /> }],
  },
];
