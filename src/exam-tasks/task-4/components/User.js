import React from 'react';

const User = ({ user }) => {
  return (
    <ul>
      <li>{user.name}</li>
      <li>{user.email}</li>
      <li>{user.phone}</li>
      <li>{user.company.name}</li>
      <li>
        {user.address.street}, {user.address.city},
      </li>
    </ul>
  );
};

export default User;
