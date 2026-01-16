import style from '../assets/styles/spillestate.module.scss';
type SpillestateProps = {
  gamePhase: string;
  player: number;
};

export function Spillestate({ gamePhase, player }: SpillestateProps) {
  return (
    <div className={style.stateStyle}>
      <p>Spilfase: {gamePhase.slice(0, 1).toUpperCase() + gamePhase.slice(1)}</p>
      {gamePhase != 'Game over' && (
        <p>
          Player {player + 1} {gamePhase === 'rul' && 'Ruller'}
          {gamePhase === 'Gæt' && 'Gætter'}
        </p>
      )}
    </div>
  );
}
