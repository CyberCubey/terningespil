

type PlayerScoreProps ={
    score: number[]; 
}; 

function PlayerScore({ score }: PlayerScoreProps) {
    return (
        <div>
            <h3>Player Scores</h3>
            {score.map((playerScore, index) => (
            <p key={index}>
                  Player {index + 1}: {playerScore}
            </p>
            ))}
        </div>
    );
}

export default PlayerScore;