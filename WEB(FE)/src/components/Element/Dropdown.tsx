export interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  items?: Array<DropdownItem>;
}

export const Dropdown = ({ items = [] }: DropdownProps) => {
  return (
    <div className="relative w-full lg:max-w-sm">
      <select className="w-full p-2.5 text-black bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-orange">
        {items.map((item) => {
          return <option>{item.label}</option>;
        })}
      </select>
    </div>
  );
};
