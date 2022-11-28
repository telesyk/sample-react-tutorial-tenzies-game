import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import logo from './logo.svg';
import Die from './components/Die';
import { newDiceArray, newDie } from './helpers';

function App() {
  const [dice, setDice] = useState(newDiceArray());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const isAllDiceHeld = dice.every(die => die.isHeld);
    const firstVal = dice[0].value;
    const isAllDiceSame = dice.every(die => die.value === firstVal);
    if (isAllDiceHeld && isAllDiceSame) setTenzies(true);
  }, [dice]);

  const onRollDice = () => {
    setDice(prevDice => prevDice.map(die => (die.isHeld ? die : newDie())));
  };

  const onHoldDice = id => {
    setDice(prevDice =>
      prevDice.map(die =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const onResetGame = () => {
    setDice(newDiceArray());
    setTenzies(false);
  };

  const diceElements = dice.map(item => (
    <Die
      key={item.id}
      value={item.value}
      isHeld={item.isHeld}
      handleClick={() => onHoldDice(item.id)}
    />
  ));

  return (
    <div className="h-screen bg-sky-900 text-lime-50">
      <header className="flex justify-center items-center gap-4 backdrop-blur-md bg-white/30">
        <img src={logo} className="w-24 h-24" alt="logo" />
        <p className="font-bold">
          Simple{' '}
          <code className="mx-1 py-1 px-2 rounded bg-slate-300 text-gray-700">
            react game
          </code>
        </p>
      </header>
      <main className="p-10 md:p-20">
        <div className="flex justify-center">
          <div className="flex flex-col gap-4 w-80 h-80 px-10 py-8 bg-amber-50 rounded-lg shadow-lg text-slate-800">
            <h1 className="text-xl text-center font-bold">Tenzies</h1>
            <p className="text-sm text-center font-light">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
            <div className="flex flex-wrap gap-5">
              {!dice ? <p>Dices not created</p> : diceElements}
            </div>
            {!tenzies ? (
              <button
                onClick={onRollDice}
                type="button"
                className="rounded-md w-32 mx-auto py-2 px-4 bg-pink-700 text-gray-100 shadow-md cursor-pointer hover:bg-pink-600"
              >
                Roll
              </button>
            ) : (
              <button
                onClick={onResetGame}
                type="button"
                className="rounded-md w-32 mx-auto py-2 px-4 bg-green-700 text-gray-100 shadow-md cursor-pointer hover:bg-green-600"
              >
                New Game
              </button>
            )}
          </div>
        </div>
        {tenzies && <Confetti />}
      </main>
    </div>
  );
}

export default App;
