import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  PRIMARY,
  SECONDARY,
  BLACK,
  WHITE,
  GRAY_DARK,
  SUCCESS,
  DANGER,
} from '../../styles/colors';

const CustomButton = ({
  children,
  size,
  radius,
  color,
  variant,
  borderColor,
}) => {
  const styles = StyleSheet.create({
    btnStyle: {
      padding: wp(2),
      borderColor:
        borderColor === 'danger'
          ? DANGER
          : borderColor === 'success'
          ? SUCCESS
          : GRAY_DARK,
      borderWidth: variant === 'outlined' ? 1 : 0,
      backgroundColor:
        color === 'primary'
          ? PRIMARY
          : color === 'secondary'
          ? SECONDARY
          : color === 'black'
          ? BLACK
          : color === 'white'
          ? WHITE
          : color === 'danger'
          ? DANGER
          : color === 'success'
          ? SUCCESS
          : 'transparent',
      borderRadius: wp(radius ? radius : 1.5),
      width:
        size === 'sm'
          ? '25%'
          : size === 'md'
          ? '48%'
          : size === 'lg'
          ? '100%'
          : '50%',
    },
    text: {
      color: color === undefined ? GRAY_DARK : WHITE,
      fontSize: wp(3.5),
      alignSelf: 'center',
      textTransform: 'uppercase',
    },
  });

  return (
    <TouchableOpacity activeOpacity={0.4} style={styles.btnStyle}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
