export interface ButtonProps {
  label: string;
  margin?: string;
  onClick?: () => void;
}

export const Button = ({ label, margin, onClick }: ButtonProps) => {
  return (
    <button
      className={`bg-orange text-white-200 rounded-full px-5 py-1.5${
        margin ? ` ${margin}` : ""
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
