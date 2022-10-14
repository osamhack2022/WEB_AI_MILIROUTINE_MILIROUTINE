export interface ButtonProps {
    text?: string;
    label: string;
    margin?: string;
    onClick?: () => void;
}

export const Button = ({ text='text-base', label, margin, onClick }: ButtonProps) => {
    let px: string = '';
    let py: string = '';
    if (text === 'text-xs' || text === 'text-base') {
        px = 'px-5';
        py = 'py-1.5';
    } else if (text === 'text-xl') {
        px = 'px-10';
        py = 'py-3';
    }
    return (
        <button
            className={`bg-orange text-white-100 ${text} font-bold rounded-full ${px} ${py} ${margin ? `${margin}` : ''
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};