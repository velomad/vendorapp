import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {margin, padding} from '../../styles/mixins';
import {CustomText} from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <CustomText isBold={false} color="primary" isTitle={false}>
            this is the test paragraoh
          </CustomText>
          <Button
            onPress={() => navigation.navigate('AddProduct')}
            title="open"
          />
        </View>

        <View style={styles.card}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    ...padding(5),
  },

  card: {
    // width: wp(48),
    height: hp(50),
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'lightblue',
    marginHorizontal: wp(0.2),
  },
});

export default Home;
