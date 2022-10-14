export interface LabelProps {
    text?: string;
    label: string;
    margin?: string;
}

export const Label = ({ text='text-base', label, margin }: LabelProps) => {
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
        <span className={`bg-orange text-white-100 ${text} font-bold rounded-full ${px} ${py} ${margin ? `${margin}` : ''}`}>
            {label}
        </span>
    );
};
