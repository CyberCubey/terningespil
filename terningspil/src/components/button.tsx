import style from '../assets/styles/button.module.scss';

interface ButtonProps {
  navn: string;
  onclick: () => void;
}
export const Button: React.FC<ButtonProps> = ({ navn, onclick }) => {
  return (
    <button className={style.button} onClick={onclick}>
      {navn}
    </button>
  );
};
