import React from 'react';
import Users from './components/Users';

function Task4() {
  return (
    <>
      <div>
        <h3>Task 4</h3>
      </div>

      <Users />
    </>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
