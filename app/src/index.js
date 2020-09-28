import React from 'react';
import {SafeAreaView} from 'react-native';

import Carousel from './Carousel';

const styles = {
  flex: 1,
};

const Root = () => {
  return (
    <SafeAreaView style={styles}>
      <Carousel />
    </SafeAreaView>
  );
};

export default Root;
