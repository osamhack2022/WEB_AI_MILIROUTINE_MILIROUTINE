import { ReactNode } from "react";
import { Header, Footer } from "@/components/Element";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <div className="h-screen flex flex-1 overflow-hidden bg-gray-100">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};
