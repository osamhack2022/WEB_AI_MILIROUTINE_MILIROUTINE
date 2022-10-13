export interface NavItemProps {
  label: string;
  margin?: string;
  onClick?: () => void;
}

export const NavItem = ({ label, margin, onClick }: NavItemProps) => {
  return (
    <div
      className={`cursor-pointer${margin ? ` ${margin}` : ""}`}
      onClick={onClick}
    >
      <a className="text-black">{label}</a>
    </div>
  );
};
