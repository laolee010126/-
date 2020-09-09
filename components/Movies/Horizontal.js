import Poster from '../Poster';
import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  margin-top: 15px;
  margin-left: 20px;
  margin-bottom: 25px;
`;
const Content = styled.View`
  flex-direction: row;
`;
const Data = styled.View`
  width: 65%;
  margin-left: 10px;
`;
const Title = styled.Text`
  font-weight: 600;
  color: white;
  margin-bottom: 10px;
`;
const Overview = styled.Text`
  color: white;
`;

const Horizontal = ({ id, title, poster, overview }) => (
  <Container>
    <Content>
      <Poster url={poster} />
      <Data>
        <Title>{title}</Title>
        <Overview>
          {overview.length > 110 ? `${overview.slice(0, 160)}...` : overview}
        </Overview>
      </Data>
    </Content>
  </Container>
);

export default Horizontal;
