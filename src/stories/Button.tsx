import { isComingSoon } from '@/app/functions/constants';

export interface ButtonProps {
	label: string;
	primary?: boolean;
	disabled?: boolean;
	className?: string;
	onClick?: () => void;
	size?: 'medium' | 'large';
	type?: 'button' | 'reset' | 'submit';
}

/** Primary UI component for user interaction */
export const Button = ({
	size,
	label,
	onClick,
	primary,
	className,
	type,
}: ButtonProps) => {
	const isShopNow = label.trim().toLowerCase() === 'shop now';

	const isDisabled = isComingSoon && isShopNow;

	const baseStyles: string = `flex items-center justify-center font-normal text-lg leading-[100%] tracking-[5%] h-[53px] rounded-[4px] ${
		isDisabled ? 'opacity-[0.40]' : 'cursor-pointer hover:opacity-[0.80]'
	} transition-all duration-0.5s`;
	const mode: string = primary
		? '!bg-[var(--green)] !text-white'
		: '!bg-[var(--off-white)] !text-[var(--green)]';
	const buttonSize: string = size === 'large' ? '!w-[192px]' : '!w-[180px]';
	return (
		<button
			className={`${baseStyles} ${className} ${mode} ${buttonSize}`}
			onClick={onClick}
			type={type}
			disabled={isDisabled}
		>
			{label}
		</button>
	);
};
