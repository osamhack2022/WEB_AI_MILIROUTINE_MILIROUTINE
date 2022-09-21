import { Route, Routes } from "react-router-dom";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" />
      <Route path="signup" />
    </Routes>
  );
};
