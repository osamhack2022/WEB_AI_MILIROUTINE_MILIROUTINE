import { Fragment, useState, useEffect, useCallback } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

export interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  items?: Array<DropdownItem>;
  value?: DropdownItem;
  onChange?: (item: DropdownItem) => void;
}

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

export const Dropdown = ({ items = [], value }: DropdownProps) => {
  const [selected, setSelected] = useState<DropdownItem | undefined>();

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  const onSelect = useCallback((v: DropdownItem) => {
    setSelected(v);
  }, []);

  return (
    <>
      <Listbox as="div" value={selected} onChange={onSelect}>
        {({ open }) => (
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default border border-black bg-white h-14 py-2 px-2 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
                {selected ? (
                  <span className="ml-3 block truncate">{selected.label}</span>
                ) : null}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-2 ml-3 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-10 w-10 text-black"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto bg-white border border-black py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {items.map((item, itemIdx) => (
                  <Listbox.Option
                    key={itemIdx}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-black",
                        "relative cursor-default select-none h-14 py-4 pl-3 pr-9"
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {item.label}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </>
  );
};
