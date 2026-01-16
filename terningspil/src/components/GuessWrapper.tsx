interface GuessWrapperProps {
  children: React.ReactNode;
}

export function GuessWrapper({ children }: GuessWrapperProps) {
  return <div className="wrapper">{children}</div>;
}
