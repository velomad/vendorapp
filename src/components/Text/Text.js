import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BLACK, PRIMARY, SECONDARY, WHITE} from '../../styles/colors';
import {
  FONT_BOLD,
  FONT_REGULAR,
  FONT_SIZE_12,
  FONT_SIZE_14,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
  LETTER_SPACING,
} from '../../styles/typography';

const CustomText = ({children, size, color, isBold, isTitle}) => {
  const styles = StyleSheet.create({
    fontRegular: {
      ...FONT_REGULAR,
      color:
        color === 'primary'
          ? PRIMARY
          : color === 'secondary'
          ? SECONDARY
          : color === 'white'
          ? WHITE
          : BLACK,
      fontSize:
        size === 'xs'
          ? FONT_SIZE_12
          : size === 'sm'
          ? FONT_SIZE_14
          : size === 'md'
          ? FONT_SIZE_16
          : size === 'lg'
          ? FONT_SIZE_18
          : size === 'xl'
          ? FONT_SIZE_20
          : FONT_SIZE_16,
    },
  });

  return (
    <View>
      <Text
        style={[
          styles.fontRegular,
          isBold && FONT_BOLD,
          isTitle && LETTER_SPACING,
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default CustomText;
