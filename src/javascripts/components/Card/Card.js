import React  from 'react';

const Card = ({ imageUrl, url, title }) =>  {
  return (
      <a href={url}>
        <img src={imageUrl} alt={title} />
        <span>{title}</span>
      </a>
  );
};

export default Card;
