export interface FormProps {
  label?: string;
  help?: string;
  placeholder?: string;
  type: string;
}

export const Form = ({ label, help, type, placeholder }: FormProps) => {
  return (
    <div className="mb-10">
      <div className="my-2 flex flex-row items-center">
        {!!label ? <p className="text-black text-sm mr-6">{label}</p> : null}
        {!!help ? <p className="text-gray-400 text-sm">{help}</p> : null}
      </div>

      <div>
        <input
          className="w-full border border-black h-14 py-2 px-4"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
