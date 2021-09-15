import React, { useState } from 'react';
import { FaThumbsDown } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';

function Task2() {
  //states

  const [count, setCount] = useState(0);

  // custom functions

  function decrement() {
    setCount(count - 1);
  }
  function increment() {
    setCount(count + 1);
  }
  return (
    <>
      <div>
        <h3>Task 2</h3>
      </div>
      <button onClick={decrement}>
        <FaThumbsDown />
      </button>
      <span>{count}</span>
      <button onClick={increment}>
        <FaThumbsUp />
      </button>
    </>
  );
}

export default Task2;

/* Task 2
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, vartotojui leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
