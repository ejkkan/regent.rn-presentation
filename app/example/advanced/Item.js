import React from 'react';
import {View, Text, ImageBackground, Dimensions, Animated} from 'react-native';

const {width} = Dimensions.get('window');

const MARGIN_LEFT = 20;
const IMAGE_WIDHT = width * 0.8;
export const IMAGE_WIDTH_WIDTH_MARGIN = IMAGE_WIDHT + MARGIN_LEFT;

const styles = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    marginLeft: 20,
  },
  background: {
    width: IMAGE_WIDHT,
    height: IMAGE_WIDHT,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  infoBox: {backgroundColor: 'white', padding: 20},
  title: {fontSize: 20, fontWeight: '600', color: 'black'},
  subtitle: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
  },
};

const Item = ({item, scrollX, index}) => {
  return (
    <Animated.View
      style={{
        ...styles.shadow,
        opacity: scrollX.interpolate({
          inputRange: [
            IMAGE_WIDTH_WIDTH_MARGIN * (index - 1),
            IMAGE_WIDTH_WIDTH_MARGIN * index,
          ],
          outputRange: [0.5, 1],
        }),
      }}>
      <ImageBackground style={styles.background} source={{uri: item.image}}>
        <View style={styles.infoBox}>
          <Animated.Text
            style={{
              ...styles.title,
              transform: [
                {
                  translateX: scrollX.interpolate({
                    inputRange: [
                      IMAGE_WIDTH_WIDTH_MARGIN * (index - 1),
                      IMAGE_WIDTH_WIDTH_MARGIN * index,
                    ],
                    outputRange: [60, 0],
                  }),
                },
              ],
            }}>
            {item.title}
          </Animated.Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

export default Item;
