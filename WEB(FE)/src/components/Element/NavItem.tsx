import React from "react";

export interface NavItemProps {
  label: string;
}

export const NavItem = ({ label }: NavItemProps) => {
  return (
    <div>
      <a>{label}</a>
    </div>
  );
};
