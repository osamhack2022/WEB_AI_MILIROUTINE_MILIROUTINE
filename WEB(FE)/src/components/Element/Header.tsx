import React from "react";
import { NavItem } from "@/components/Element/NavItem";

export const Header = () => {
  return (
    <header className="w-screen">
      <div className="flex flex-row">
        <NavItem label="Introduce" />
        <NavItem label="Category" />
        <NavItem label="Popular" />
        <NavItem label="Recommend" />
      </div>
    </header>
  );
};
