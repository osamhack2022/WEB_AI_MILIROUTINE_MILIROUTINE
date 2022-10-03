export interface NavItemProps {
  label: string;
  margin?: string;
}

export const NavItem = ({ label, margin }: NavItemProps) => {
  return (
    <div className={`cursor-pointer${margin ? ` ${margin}` : ""}`}>
      <a className="text-black">{label}</a>
    </div>
  );
};
