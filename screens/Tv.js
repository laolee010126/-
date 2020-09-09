import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { tvApi } from '../API';

const Tv = () => {
  const [tvData, setTvData] = useState({
    thisWeekError: null,
    thisWeek: [],
    topRatedError: null,
    topRated: [],
    popularError: null,
    popular: [],
    todayError: null,
    today: [],
  });

  const getData = async () => {
    const [today, todayError] = await tvApi.today();
    const [thisWeek, thisWeekError] = await tvApi.thisWeek();
    const [topRated, topRatedError] = await tvApi.topRated();
    const [popular, popularError] = await tvApi.popular();

    setTvData({
      thisWeek,
      thisWeekError,
      topRated,
      topRatedError,
      popular,
      popularError,
      today,
      todayError,
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <Text style={{ color: 'white' }}>{tvData.today?.length}</Text>
    </View>
  );
};

export default Tv;
