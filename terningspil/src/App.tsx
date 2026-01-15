import './App.scss';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Spillestate } from './components/gamephase';

function App() {
  const [score, setScore] = useState([0, 0]);
  const [gamePhase, setGamePhase] = useState('roll');
  const [guess, setGuess] = useState('');
  const [player, setPlayer] = useState(0);
  const [systemMessage, setSystemMessage] = useState('');

  const handleRoll = () => {
    const roll = Math.floor(Math.random() * 6 + 1);
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
  };

  function handleGuess(guess) {
    setGuess((prevGuess) => (prevGuess = guess));
    setGamePhase('rul');
  }

  function checkWin(player: number) {
    //check hvad overunder er på og alt efter hvad den er så sammenlign dem ved at checke hvem der er den aktive gætter(kan kigges ved at se på player variablen og så lægge 1 til) og vis en `Spiller ${player+1} vandt/tabte`
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

    console.log(`spiller ${winner + 1} vandt`);
    setSystemMessage(`spiller ${winner + 1} vandt`);
    setGamePhase('Game over');
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
      <Header text={'Spille Bonanza'}></Header>
      <Spillestate gamePhase={gamePhase} player={player} />
      <img src="./dice-six-faces-5.svg" style={{ height: '200px' }} alt="" />
      <p>{score[0]}</p>
      <p>{score[1]}</p>
      <p>Player {player + 1}</p>
      <button onClick={handleRoll}>roll</button>
      {gamePhase === 'guess' && (
        <div>
          <button onClick={() => handleGuess('over')}>Over</button>
          <button onClick={() => handleGuess('under')}>Under</button>
        </div>
      )}
    </>
  );
}

export default App;
