import React from "react";
interface ButtonProps {
    navn: string;
    onclick: () => void; }
const Button: React.FC<ButtonProps> = ({ navn, onclick }) => {
    return (
<button onClick={onclick}>
{navn}
</button>
);};

export default Button;

