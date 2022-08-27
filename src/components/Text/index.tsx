import React from "react";

interface TextProps {
	tag: "h1" | "h2" | "h3" | "h4" | "p";
	children: React.ReactNode;
}

export default function Text({ children, tag = "p", ...props }: TextProps) {
	const Tag = tag;
	return <Tag {...props}>{children}</Tag>;
}
