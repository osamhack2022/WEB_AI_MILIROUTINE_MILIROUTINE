import { NavItem } from "@/components/Element/NavItem";
import { Button } from "@/components/Element/Button";
import Logo from "@/assets/Logo.png";

export const Header = () => {
  return (
    <header className="w-screen flex items-center justify-center bg-white">
      <div className="container max-w-screen-xl flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center justify-center">
          <img src={Logo} />
          <NavItem label="Introduce" margin="ml-12" />
          <NavItem label="Popular" margin="mx-6" />
        </div>

        <div className="flex flex-row items-center justify-center">
          <Button label="Signup" margin="mx-4" />
          <NavItem label="Login" />
        </div>
      </div>
    </header>
  );
};
