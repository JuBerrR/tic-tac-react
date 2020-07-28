import React from 'react';
//import useStyle from './styles';

const styles = {
  background: 'lightgreen',
  border: '2px solid darkgreen',
  fontSize: '60px',
  fontWeight: '1000',
  cursor: 'pointer',
  outline: 'none'
}

const Square = ({value, onClick}) => (
  <button style={styles} onClick={onClick}>
    {value}
  </button>
)

export default Square;