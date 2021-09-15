import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components

import AboutUs from './Pages/AboutUs';
import Contacts from './Pages/Contacts';

function Task1() {
  return (
    <>
      <div>
        <h3>Task 1</h3>
      </div>
      <Router>
        <ul>
          <li>
            <Link to='/'>About Us</Link>
          </li>
          <li>
            <Link to='/about'>Contacts</Link>
          </li>
        </ul>
        <button>
          <Link to='/contact-us'>back</Link>
        </button>
        <Switch>
          <Route exact path='/'>
            <AboutUs />
          </Route>
          <Route path='/about'>
            <Contacts />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Task1;

/* TASK 1
task-1 aplanke, sukurkite aplanką ir pavadinkite jį "Pages". 
"Pages" aplanke turi būti sukurti dviejų puslapių komponentai 
"About Us" ir "Contacts", kurie viduje turės tik po h1 žymą,
kurioje bus randmas komponento pavadinimas (pvz. <h1>About Us</h1>)
ir mygtuką "Grįžti atgal", kurį paspaudus bus grįžtama atgal.

Tada, komponente Task1 (kuriame esate dabar) sukurkite navigaciją, 
kuri leis patekti į nurodytus "Pages" puslapių komponentus. 
Naudodami React Router DOM sukurkite SPA principo navigaciją.
"Pages" komponentų turinys turi būti atvaizduojamas Task1 komponente.
*/
