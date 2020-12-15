import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {margin, padding} from '../../styles/mixins';
import {CustomText} from '../../components';
import {getCurrentOrdersAction} from '../../store/actions';

const Home = (props) => {
  useEffect(() => {
    props.getCurrentOrdersAction();
    // console.log(props.currentOrders)
  }, []);
  console.log(props.currentOrders);

  return (
    <View style={styles.container}>
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
          <Button
            onPress={() => navigation.navigate('AddProduct')}
            title="open"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // display: 'flex',
    flexWrap: 'wrap',

    flexDirection: 'row',
    ...padding(5),
  },

  card: {
    // width: wp(48),Test

    ...padding(5),
    // flexWrap:"nowrap",
    borderRadius: 5,
    backgroundColor: 'lightblue',
    marginHorizontal: wp(0.2),
  },
});

const mapStateToProps = ({dashboardState}) => ({
  currentOrders: dashboardState.currentOrders,
});
export default connect(mapStateToProps, {getCurrentOrdersAction})(Home);
