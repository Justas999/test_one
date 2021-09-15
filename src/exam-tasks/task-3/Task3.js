import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import Button from './Components/Button';

function Task3() {
  return (
    <>
      <div>
        <h3>Task 3</h3>
      </div>
      <FaTwitter />
      <h1>Happerning now</h1>
      <h2> Join Twitter today.</h2>
      <Button text='Sign Up' />
      <br />
      <Button text='Log in' />
    </>
  );
}

export default Task3;

/* Task 3
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
