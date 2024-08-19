import React from 'react';

const Card = ({ title, description }) => {
    console.log(title, description)
  return (
    <div className="card">
      <h3>{title}</h3>
      <hr />
      <p>{description}</p>
    </div>
  );
};

export default Card;
