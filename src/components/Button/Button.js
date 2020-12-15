import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = ({children, size, color, variant}) => {
  const styles = StyleSheet.create({
    btnStyle: {
      width:
        size === 'sm'
          ? '25%'
          : size === 'md'
          ? '50%'
          : size === 'lg'
          ? '100%'
          : '50%',
    },
  });

  return (
    <View style={styles.btnStyle}>
      <Button title={children} />
    </View>
  );
};

export default CustomButton;
