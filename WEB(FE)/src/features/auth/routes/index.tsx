import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./Login";
import { SignupPage } from "./Signup";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  );
};
