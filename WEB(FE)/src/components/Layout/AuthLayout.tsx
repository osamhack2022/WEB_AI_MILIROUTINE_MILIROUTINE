import { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "@/components/Element";
import Logo from "@/assets/Logo.png";

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  const navigate = useNavigate();

  const goToHome = useCallback(() => {
    navigate("/");
  }, []);

  return (
    <>
      <header className="w-screen flex items-center justify-center bg-white py-8">
        <img src={Logo} onClick={goToHome} className="cursor-pointer" />
      </header>
      {children}
      <Footer />
    </>
  );
};
