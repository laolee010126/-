import { Button, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import MoviesPresent from './MoviesPresent';
import { movieApi } from '../../API';

const MoviesContainer = () => {
  const [movieData, setMovieData] = useState({
    loading: true,
    nowPlay: [],
    popular: [],
    upcoming: [],
    nowPlayError: null,
    popularError: null,
    upcomingError: null,
  });

  const getData = async () => {
    const [nowPlay, nowPlayError] = await movieApi.nowPlay();
    const [popular, popularError] = await movieApi.popular();
    const [upcoming, upcomingError] = await movieApi.upcoming();
    setMovieData({
      loading: false,
      nowPlay,
      popular,
      upcoming,
      nowPlayError,
      upcomingError,
      popularError,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <MoviesPresent {...movieData} />;
};

export default MoviesContainer;
