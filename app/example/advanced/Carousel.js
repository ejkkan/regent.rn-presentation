import React, {useRef} from 'react';
import {FlatList, Animated} from 'react-native';

import Item, {IMAGE_WIDTH_WITH_MARGIN} from './Item';
import {data} from '../../data';

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <FlatList
      bounces={false}
      data={data}
      renderItem={({item, index}) => (
        <Item item={item} index={index} scrollX={scrollX} />
      )}
      horizontal
      decelerationRate="fast"
      snapToInterval={IMAGE_WIDTH_WITH_MARGIN}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}])}
    />
  );
};

export default Carousel;
