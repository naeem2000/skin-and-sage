export interface ButtonProps {
	primary?: boolean;
	size?: 'medium' | 'large';
	label: string;
	className?: string;
	onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
	primary,
	size,
	className,
	onClick,
	label,
}: ButtonProps) => {
	const baseStyles: string =
		'flex items-center justify-center cursor-pointer font-normal text-lg leading-[100%] tracking-[5%] h-[53px] rounded-[4px]';
	const mode: string = primary
		? '!bg-[var(--green)] !text-white'
		: '!bg-[var(--off-white)] !text-[var(--green)]';
	const buttonSize: string = size === 'large' ? '!w-[192px]' : '!w-[180px]';
	return (
		<button
			className={`${baseStyles} ${className} ${mode} ${buttonSize}`}
			onClick={onClick}
			type='button'
		>
			{label}
		</button>
	);
};
