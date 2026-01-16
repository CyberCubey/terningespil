import React from 'react';
interface ButtonProps {
  navn: string;
  onclick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ navn, onclick }) => {
  return <button onClick={onclick}>{navn}</button>;
};

//Jonathan, 15/01/2026, note = unsure about my repo, might cause conflicts
export default Button;
