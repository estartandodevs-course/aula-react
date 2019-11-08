import React from 'react';

import  './style.scss';

export default function Card(props) {

  const { avatar, first_name , last_name="", email , className="card" , action, buttonValue } = props

  return (
    <div className={className}>
        <img src={avatar} alt=""/>
        <h3>{`${first_name} ${last_name}`}</h3>
        {email && <h2>{email}</h2>}
        <button onClick={action}>{buttonValue}</button>
    </div>
  );
}
