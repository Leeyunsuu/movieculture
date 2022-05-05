import React from "react";

interface ButtonProps {
	text: string;
}

const Button: React.FC<ButtonProps> = ({text}) => {
	return <button style={{backgroundColor: "tomato"}}>{text}</button>;
};

export default Button;
