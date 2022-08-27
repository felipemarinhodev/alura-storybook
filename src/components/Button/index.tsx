// import * as S from "./styles";

import React from "react";

interface ButtonProps {
	disabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}

export default function Button({
	children,
	disabled = false,
	...props
}: ButtonProps) {
	return (
		<button {...props} disabled={disabled}>
			{children}
		</button>
	);
}
