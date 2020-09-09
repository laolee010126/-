import React from 'react';
import styled from 'styled-components/native';

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-left: 25px;
`;

const Title = ({ title }) => {
  return <TitleText>{title}</TitleText>;
};

export default Title;
