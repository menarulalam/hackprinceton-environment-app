import * as React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Title from './Title';
import Progress from 'react-bootstrap/ProgressBar'



import React from "react";

const Progress = (props) => {
  const { data } = props;
  // const cardData = props.cardData
  const { name, emoji, backgroundColor } = data;

  return (
    <div className="Card-container" style={{ backgroundColor }}>
      <h2>{title}</h2>
      <h1>{emoji}</h1>
    </div>
  );
};

export default Card;
