import style from '../assets/styles/header.module.scss';

interface HeaderProps {
  text: string;
}

export function Header({ text }: HeaderProps) {
  return <h1 className={style.headerStyle}>{text}</h1>;
}
