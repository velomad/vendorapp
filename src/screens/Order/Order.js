import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CustomText, CustomButton} from '../../components';
import OrderView from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const Order = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          padding: '1%',
        }}>
        <Feather name="alert-circle" size={20} color="yellow" />
        <CustomText isBold={true} size="sm" color="secondary" isTitle={false}>
          Accepted
        </CustomText>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          justifyContent: 'space-between',
          paddingTop: 2,
          flexDirection: 'row',
        }}>
        <CustomText isBold={true} size="sm" color="secondary" isTitle={false}>
          OrderId #123
        </CustomText>
        <CustomText isBold={true} size="sm" color="secondary" isTitle={false}>
          10:50:22 16Dec 2020
        </CustomText>
      </View>
      <View
        style={{
          marginHorizontal: 15,
          justifyContent: 'space-between',
          paddingTop: 5,
          flexDirection: 'row',
        }}>
        <View style={{flexDirection: 'column'}}>
          <CustomText isBold={true} size="sm" color="secondary" isTitle={false}>
            Total Items 5
          </CustomText>
          <CustomText isBold={true} size="sm" color="secondary" isTitle={false}>
            &#8377; 2000
          </CustomText>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: 'grey',
            elevation: 1,
            borderRadius: 8,
            // justifyContent:"space-around",
            borderWidth: 1,
          }}>
          <CustomText isBold={true} size="sm" color="secondary" isTitle={false}>
            Details
          </CustomText>
          <OrderView name="keyboard-arrow-right" color="red" size={25} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: wp(43),
    height: hp(20),
    // borderRadius: 1,
    margin: 7,
    backgroundColor: 'white',
    // alignItems:"center",
    // paddingTop:5,

    borderRadius: 8,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    borderLeftWidth: 5,
    borderRightWidth: 1,
    shadowColor: '#000',
    // shadowOffset: { width: 20, height: 60 },
    // shadowOpacity: 0.8,
    // shadowRadius: 12,
    elevation: 1,
  },
});
export default Order;
