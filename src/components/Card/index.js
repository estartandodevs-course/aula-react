import React from 'react';

import  './style.scss';

export default function Card(props) {

    const { avatar, first_name, last_name, email} = props

  return (
    <div className="Cards">
        <img src={avatar} alt=""/>
        <h2>{first_name +" "+ last_name}</h2>
        <h3>{email}</h3>
    </div>
  );
}
