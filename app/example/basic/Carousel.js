import React from 'react';
import {FlatList, Dimensions, View} from 'react-native';
const {width} = Dimensions.get('window');

import Item from './Item';
import {data} from '../../data';

const Carousel = () => {
  return (
    <FlatList
      data={data}
      horizontal
      renderItem={Item}
      keyExtractor={(_, index) => String(index)}
      snapToInterval={width - 100 + 20}
      decelerationRate="fast"
    />
  );
};

Carousel.propTypes = {};

export default Carousel;
