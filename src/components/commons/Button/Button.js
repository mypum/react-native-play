import React, { PropTypes } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Button = styled.View`
  margin: 10px;
  padding: 5px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


Button.propTypes = {
  primary: PropTypes.bool
}

export default Button
