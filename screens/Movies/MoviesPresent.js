import { ActivityIndicator, Dimensions, Text, View } from 'react-native';

import Horizontal from '../../components/Movies/Horizontal';
import React from 'react';
import { ScrollView } from 'react-native';
import Slider from '../../components/Movies/Slider';
import Swiper from 'react-native-web-swiper';
import Title from '../../components/Title';
import Vertical from '../../components/Vertical';
import styled from 'styled-components/native';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 20px;
`;
const ScrollContainer = styled.View`
  margin-bottom: 30px;
`;

const MoviesPresent = ({ loading, nowPlay, popular, upcoming }) => {
  return (
    <ScrollView
      style={{ backgroundColor: 'black' }}
      contentContainerStyle={{
        justifyContent: loading ? 'center' : 'flex-start',
      }}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <SliderContainer>
            <Swiper controlsEnabled={false} loop timeout={3} height>
              {nowPlay.map((movie) => {
                return (
                  <Slider
                    vote={movie.vote_average}
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    backdrop_path={movie.backdrop_path}
                    poster={movie.poster_path}
                  />
                );
              })}
            </Swiper>
          </SliderContainer>
          <Title title="Popular Movies" />
          <ScrollContainer>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: 10,
                paddingLeft: 20,
              }}
            >
              {popular.map((movie) => (
                <Vertical
                  id={movie.id}
                  key={movie.id}
                  vote={movie.vote_average}
                  poster={movie.poster_path}
                  title={movie.title}
                />
              ))}
            </ScrollView>
          </ScrollContainer>
          <Title title="Coming Soon" />
          {upcoming.map((movie) => (
            <Horizontal
              id={movie.id}
              key={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </>
      )}
    </ScrollView>
  );
};

export default MoviesPresent;
