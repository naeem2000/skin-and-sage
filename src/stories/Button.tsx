export interface ButtonProps {
	/** Is this the principal call to action on the page? */
	primary?: boolean;
	/** What background color to use */
	backgroundColor?: string;
	/** How large should the button be? */
	size?: 'small' | 'medium' | 'large';
	/** Button contents */
	label: string;

	className?: string;
	/** Optional click handler */
	onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
	primary = false,
	size = 'medium',
	className,
	backgroundColor,
	onClick,
	label,
}: ButtonProps) => {
	const baseStyles: string =
		'flex items-center justify-center cursor-pointer font-normal text-lg leading-[100%] tracking-[5%] h-[53] rounded-[4px] hover:bg-opacity-75';
	const mode: string = primary
		? 'bg-[var(--green)] text-white'
		: 'bg-[var(--off-white)] text-[var(--green)]';
	const buttonSize: string = size === 'large' ? 'w-[192]' : 'w-[180]';
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
