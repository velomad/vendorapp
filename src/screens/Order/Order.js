import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CustomText, CustomButton} from '../../components';
import OrderView from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {BLACK, GRAY_DARK, PRIMARY} from '../../styles/colors';

const Order = () => {
  const n = 10;

  return (
    <View style={{padding: 20}}>
        <View style={[styles.EDakshBox, {backgroundColor: 'skyblue'}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.EDakshFonts}>Daksh Tamboli</Text>

            <Text style={styles.EDakshFonts}>16/12/20</Text>
          </View>
          <View>
            <Text style={[styles.EDakshFonts, {textAlign: 'center'}]}>
              203 Jainnam Tower, SV Road, Dahisar East
            </Text>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  EDakshBox: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: PRIMARY,
    padding: 10,
  },

  EDakshFonts: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'serif',
    color: BLACK,
  },
});

export default Order;
