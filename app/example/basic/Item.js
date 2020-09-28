import React from 'react';
import {Dimensions, ImageBackground, Text, View, Animated} from 'react-native';
const {width} = Dimensions.get('window');

const styles = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  background: {
    height: width - 100,
    width: width - 100,
    marginLeft: 20,
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: 20,
  },
  content: {backgroundColor: 'white', padding: 20},
  title: {fontSize: 25, fontWeight: '500', marginBottom: 10},
  subtitle: {fontSize: 15, fontWeight: '300', color: 'darkgray'},
};

const Item = ({item}) => {
  return (
    <View style={styles.shadow}>
      <ImageBackground
        style={styles.background}
        imageStyle={{borderRadius: 20}}
        source={{uri: item.illustration}}>
        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Item;
