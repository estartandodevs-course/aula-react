import React from 'react';

import  './style.scss';

export default function Card(props) {

    const { avatar, first_name } = props

  return (
    <div className="card">
        <img src={avatar} alt=""/>
        <h3>{first_name}</h3>
    </div>
  );
}
