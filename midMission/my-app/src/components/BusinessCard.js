import React from 'react';

export default function BusinessCard(props) {
  console.log(props);
  const { company, team, name, phoneNumber, email } = props.info;
  return (
    <div>
      <div>Company: {company}</div>
      <div>Team: {team}</div>
      <div>Name: {name}</div>
      <div>Phonenumber: {phoneNumber}</div>
      <div>email: {email}</div>
    </div>
  );
}
