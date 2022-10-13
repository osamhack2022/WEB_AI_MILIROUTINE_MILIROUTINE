import { Dropdown, DropdownItem } from "./Dropdown";

export interface SelectProps {
  label?: string;
  items?: Array<DropdownItem>;
  value?: DropdownItem;
}

export const Select = ({ label, items, value }: SelectProps) => {
  return (
    <div className="mb-8">
      <div className="my-2 flex flex-row items-center">
        {!!label ? <p className="text-black text-sm mr-6">{label}</p> : null}
      </div>

      <Dropdown items={items} value={value} />
    </div>
  );
};
