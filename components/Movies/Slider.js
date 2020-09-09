import { Button } from 'react-native';
import Poster from '../Poster';
import React from 'react';
import Vote from '../Vote';
import { apiImage } from '../../API';
import styled from 'styled-components/native';
const Slider = ({ id, vote, title, overview, backdrop_path, poster }) => {
  return (
    <Container>
      <BG source={{ uri: apiImage(backdrop_path) }} />
      <Content>
        <Poster url={poster} />
        <Data>
          <Title>{title}</Title>
          <VoteCotainer>
            <Vote vote={vote} />
          </VoteCotainer>
          <Overview>
            {overview.length > 110 ? `${overview.slice(0, 110)}...` : overview}
          </Overview>
          <Detail>
            <ButtonText>Detail</ButtonText>
          </Detail>
        </Data>
      </Content>
    </Container>
  );
};

const VoteCotainer = styled.View`
  margin-bottom: 10px;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
`;

const BG = styled.Image`
  width: 100%;
  height: 100%;
  opacity: 0.3;
  position: absolute;
`;

const Content = styled.View`
  padding: 15px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Data = styled.View`
  width: 60%;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.Text`
  margin-bottom: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

const Overview = styled.Text`
  color: white;
  opacity: 0.85;
`;

const Detail = styled.TouchableOpacity`
  margin-top: 5px;
  background-color: #355f7f;
  width: 60px;
  opacity: 0.7;
  border-radius: 3px;
  padding: 4px;
  padding-left: 10px; ;
`;
const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export default Slider;
