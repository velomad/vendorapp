import React, {useEffect} from 'react';
import {CustomText} from '../../../../components';
import {View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {margin, padding} from '../../../../styles/mixins';
import {connect} from 'react-redux';
import {getCurrentOrdersAction} from '../../../../store/actions';

const Overview = (props) => {
  var totalOrdersDelivered = 0;
  var totalOrdersCancelled = 0;
  var totalEarning = 0;

  useEffect(() => {
    props.getCurrentOrdersAction();
    // console.log("allOrdersData")
    // console.log(props.allOrdersData)
  }, []);
  const {allOrdersData} = props;

  allOrdersData.map((element) => {
    totalEarning += element.purAmt;
    if (element.orderStatus === 1) {
      totalOrdersDelivered += 1;
    } else if (element.orderStatus === 2) {
      totalOrdersCancelled += 1;
    }
  });
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          Total Orders
        </CustomText>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          {allOrdersData.length}
        </CustomText>
      </View>
      <View style={styles.card}>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          Total Earnings
        </CustomText>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          {totalEarning}
        </CustomText>
      </View>
      <View style={styles.card}>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          Delivered
        </CustomText>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          {totalOrdersDelivered}
        </CustomText>
      </View>
      <View style={styles.card}>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          Cancelled
        </CustomText>
        <CustomText isBold={true} size="md" color="white" isTitle={false}>
          {totalOrdersCancelled}
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
  },

  card: {
    width: wp(46),
    height: hp(12),
    marginVertical: hp(1),
    borderRadius: 5,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({dashboardState}) => ({
  allOrdersData: dashboardState.currentOrders,
});

export default connect(mapStateToProps, {getCurrentOrdersAction})(Overview);
