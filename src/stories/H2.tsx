import React from 'react';

type Props = { label: string; className?: string };

export default function H2({ label, className }: Props) {
	return (
		<h2
			className={`${className} font-normal text-[40px] leading-[90%] tracking-[10%] capitalize text-[var(--primary)] font-['Brown-Sugar']`}
		>
			{label}
		</h2>
	);
}
