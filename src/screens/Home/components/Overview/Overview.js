import React from 'react';
import {CustomText} from '../../../../components';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {margin, padding} from '../../../../styles/mixins';

const Overview = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          Total Orders
        </CustomText>
      </View>
      <View style={styles.card}>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          Total Earnings
        </CustomText>
      </View>
      <View style={styles.card}>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          Delivered
        </CustomText>
      </View>
      <View style={styles.card}>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          Cancelled
        </CustomText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    ...padding(10),
  },

  card: {
    width: wp(42),
    height: hp(12),
    ...padding(2),
    // flexWrap:"nowrap",
    borderRadius: 5,
    backgroundColor: 'lightblue',
    ...margin(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Overview;
