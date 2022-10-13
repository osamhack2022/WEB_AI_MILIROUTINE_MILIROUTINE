export interface ButtonProps {
    label: string;
    margin?: string;
    onClick?: () => void;
}

export const Button = ({ label, margin, onClick }: ButtonProps) => {
    return (
        <button
            className={`bg-orange text-white-100 font-bold rounded-full px-5 py-1.5${
                margin ? ` ${margin}` : ''
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export const BigButton = ({ label, margin, onClick }: ButtonProps) => {
    return (
        <button
            className={`bg-orange text-white-100 font-bold text-xl rounded-full px-8 py-3${
                margin ? ` ${margin}` : ''
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
