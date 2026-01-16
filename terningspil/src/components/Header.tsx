interface HeaderProps {
  text: string;
}

export function Header({ text }: HeaderProps) {
  return <h1>{text}</h1>;
}
