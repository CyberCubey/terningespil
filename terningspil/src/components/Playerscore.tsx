import style from '../assets/styles/playerscore.module.scss';

type PlayerScoreProps = {
  score: number[];
};

export function PlayerScore({ score }: PlayerScoreProps) {
  return (
    <div className={style.playerScoreStyle}>
      <h3>Player Scores</h3>
      <div>
        {score.map((playerScore, index) => (
          <p key={index}>
            Player {index + 1}: {playerScore}
          </p>
        ))}
      </div>
    </div>
  );
}
