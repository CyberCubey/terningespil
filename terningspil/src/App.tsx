import './App.scss';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Spillestate } from './components/Spillestate';
import PlayerScore from './components/Playerscore';
import { Button } from './components/button';
import { GuessWrapper } from './components/GuessWrapper';

function App() {
  const [score, setScore] = useState([0, 0]);
  const [gamePhase, setGamePhase] = useState('rul');
  const [guess, setGuess] = useState('over');
  const [lastRoll, setLastRoll] = useState(1);
  const [player, setPlayer] = useState(0);
  const [startingPlayer, setStartingPlayer] = useState(0);
  const [systemMessage, setSystemMessage] = useState('');

  const handleRoll = () => {
    const roll = Math.floor(Math.random() * 6 + 1);
    setLastRoll(roll);
    console.log(roll);
    setScore((prevScore) => {
      const activePlayer = player;
      const copy = [...prevScore];
      copy[activePlayer] = roll;

      // if (copy.indexOf(0) === -1) {
      //   checkWin(activePlayer);
      // }

      return copy;
    });

    setPlayer((prevPlayer) => (prevPlayer === 0 ? 1 : 0));
    setGamePhase('Gæt');
  };

  function handleGuess(guess) {
    setGuess((prevGuess) => (prevGuess = guess));
    setGamePhase('rul');
  }

  function checkWin(player: number) {
    console.log('still checking wins');
    console.log('player =', player);
    const opponent = player === 0 ? 1 : 0;
    const playerRoll = score[player];
    const oppoRoll = score[opponent];
    if (playerRoll === oppoRoll) {
      setSystemMessage('Uafgjort!');
      setGamePhase('Game over');

      return;
    }

    const playerRolledHigher = playerRoll > oppoRoll;
    const guessedCorrect = guess === 'over' ? playerRolledHigher : !playerRolledHigher;
    const winner = guessedCorrect ? player : opponent;

    setSystemMessage(`Spiller ${winner + 1} vandt`);
    setGamePhase('Game over');
  }

  function resetgame() {
    const nextStarter = startingPlayer === 0 ? 1 : 0;
    setStartingPlayer(nextStarter);
    setPlayer(nextStarter);
    setScore([0, 0]);
    setGuess('over');
    setSystemMessage('');
    setGamePhase('rul');

    console.log('score:', score, 'player:', player);
  }

  useEffect(() => {
    if (score.indexOf(0) > -1) return;
    checkWin(player);

    console.log(score);
    console.log(player, 'player <---');
  }, [score, player]);

  //todo: COMPONENTS og gamechange

  return (
    <>
      <Header text={systemMessage != '' ? systemMessage : 'Spille Bonanza'}></Header>
      <PlayerScore score={score} />
      <img
        src={lastRoll ? `/dice-six-faces-${lastRoll}.svg` : '/dice-placeholder.svg'}
        style={{ height: '200px' }}
        alt=""
      />
      <Spillestate gamePhase={gamePhase} player={player} />
      {gamePhase === 'rul' && <Button onclick={handleRoll} navn={'Rul'} />}
      {gamePhase === 'Game over' && <Button onclick={resetgame} navn="Nyt spil"></Button>}
      {gamePhase === 'Gæt' && (
        <GuessWrapper>
          <Button navn="Over" onclick={() => handleGuess('over')} />
          <Button navn="Under" onclick={() => handleGuess('under')} />
        </GuessWrapper>
      )}
    </>
  );
}

export default App;
