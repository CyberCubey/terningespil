import './App.scss';
import { useEffect, useState } from 'react';
import { Spillestate } from './components/gamephase';

function App() {
  const [score, setScore] = useState([0, 0]);
  const [gamePhase, setGamePhase] = useState('roll');
  const [overUnder, setOverUnder] = useState('');
  const [player, setPlayer] = useState(0);

  useEffect(() => {
    console.log(score);
    console.log(player, 'player <---');
  }, [score, player]);

  const handleRoll = () => {
    const roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
    setScore((prevScore) => {
      const activePlayer = player;
      const copy = [...prevScore];
      copy[activePlayer] = roll;
      return copy;
    });

    if (score.indexOf(0) === -1) {
      //todo: kald checkwin function (skriv også checkwin function)
    }

    setPlayer((prevPlayer) => (prevPlayer === 0 ? 1 : 0));
  };

  function handleGuess(guess) {
    setOverUnder((prevOverUnder) => (prevOverUnder = guess));
  }

  function checkWin() {
    //check hvad overunder er på og alt efter hvad den er så sammenlign dem ved at checke hvem der er den aktive gætter(kan kigges ved at se på player variablen og så lægge 1 til) og vis en `Spiller ${player+1} vandt/tabte`
  }
  //todo: COMPONENTS og gamechange

  return (
    <>
      <h1>Her kommer en fed app</h1>
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
