import React, { useState } from 'react';

export default function SimpleForm() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [userInputs, setUserInputs] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value })
    // if (e.target.name === 'username') return setUsername(e.target.value);
    // return setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = userInputs;
    alert(`username : ${username}, password : ${password}`);
  };

  // e.target.value ?

  return (
    <form onSubmit={handleSubmit}>
      <label>Username : </label>
      <input
        type="text"
        name="username"
        onChange={handleChange}
        value={userInputs.username}
      />
      <br />
      <label>Password : </label>
      <input
        type="text"
        name="password"
        onChange={handleChange}
        value={userInputs.password}
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
}
