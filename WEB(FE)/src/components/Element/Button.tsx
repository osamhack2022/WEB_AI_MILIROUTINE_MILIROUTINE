export interface ButtonProps {
  label: string;
  margin?: string;
}

export const Button = ({ label, margin }: ButtonProps) => {
  return (
    <button
      className={`bg-orange text-white-200 rounded-full px-5 py-1.5${
        margin ? ` ${margin}` : ""
      }`}
    >
      {label}
    </button>
  );
};
