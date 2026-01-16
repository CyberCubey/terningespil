

type SpillestateProps = {
    gamePhase: string; 
    player: number; 
}; 

export function Spillestate({ gamePhase, player }: SpillestateProps) {
    return (
        <div>
            <p>fase: {gamePhase}</p>
            <p>
                Player {player + 1}{" "}
                {gamePhase === "Rul" && "Ruller"}
                {gamePhase === "Gæt" && "Gætter"}
            </p>
        </div>
    );
}