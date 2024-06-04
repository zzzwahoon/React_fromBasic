import React, { useState } from 'react';

export default function SimpleForm() {
  const [username, setUsername] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(username);
  };

  // e.target.value ?

  return (
    <form onSubmit={handleSubmit}>
      <label>User name: </label>
      <input
        type="text"
        name="user name"
        onChange={handleChange}
        value={username}
      />
      <input type="submit" value="submit" />
    </form>
  );
}
