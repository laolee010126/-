import React from 'react';
import { apiImage } from '../API';
import styled from 'styled-components/native';
const Image = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 4px;
`;

const Poster = ({ url }) => {
  return <Image source={{ uri: apiImage(url) }} />;
};

export default Poster;
