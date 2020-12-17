import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {BLACK, PRIMARY, SECONDARY, WHITE} from '../../styles/colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Card = ({children, elevation, color, height, style}) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    //   margin:5,
      borderRadius: 8,
    //   borderBottomColor:"#ddd",
    //   borderLeftColor:"white",
    //   borderRightColor:"white",
    //   width:wp(100),
      //borderColor: '#ddd',
      borderBottomWidth: 0,
    //   borderLeftWidth: 1,
    //   borderRightWidth: 1,
      elevation:4,
      elevation:
        elevation === 'sm' ? 1 : elevation === 'md' ? 2 : elevation === 'lg' ? 3 : 'none',
      height:
        height === 'sm'
          ? hp(20)
          : height === 'md'
          ? hp(30)
          : height === 'lg'
          ? hp(40)
          : 'auto',
      borderColor:
        color === 'primary'
          ? PRIMARY
          : color === 'secondary'
          ? SECONDARY
          : color === 'white'
          ? WHITE
          : '#ddd',
    },
  });
  return (
    <View style={[styles.container, style]}>
      {children}
      {/* {{children}} */}
    </View>
  );
};

export default Card;
