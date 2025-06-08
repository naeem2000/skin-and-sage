import React from 'react';

type Props = { label: string; className?: string };

export default function H3({ label, className }: Props) {
	return (
		<h3
			className={`${className} font-normal text-lg leading-[90%] tracking-[5%] font-["Century-Gothic"] lowercase`}
		>
			{label}
		</h3>
	);
}
