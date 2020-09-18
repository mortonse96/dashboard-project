import React from 'react';

function UserRow({ user }) {
  return (
    <tr>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.gender}</td>
      <td>{user.race}</td>
    </tr>
  );
}

export default UserRow;
