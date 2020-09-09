import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Poster from './Poster';
import React from 'react';
import Vote from './Vote';
import styled from 'styled-components/native';

const Title = styled.Text`
  color: white;
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const VerticalContainer = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Container = styled.TouchableOpacity`
  margin-top: 10px;
`;

const Vertical = ({ id, vote, title, poster }) => (
  <Container>
    <VerticalContainer>
      <Poster url={poster} />
      <Title>{title.length > 10 ? `${title.slice(0, 10)}..` : title}</Title>
      <Vote vote={vote} />
    </VerticalContainer>
  </Container>
);

export default Vertical;
