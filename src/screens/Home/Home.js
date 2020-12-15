import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {margin, padding} from '../../styles/mixins';
import {CustomText, CustomButton} from '../../components';
import {getCurrentOrdersAction} from '../../store/actions';
import {Overview} from './components';

const Home = (props, navigation) => {
  useEffect(() => {
    props.getCurrentOrdersAction();
    // console.log(props.currentOrders)
  }, []);
  console.log(props.currentOrders);

  return (
    <View style={{padding: 10}}>
      <CustomButton size="sm">epic</CustomButton>
      <Overview />
    </View>
  );
};

const mapStateToProps = ({dashboardState}) => ({
  currentOrders: dashboardState.currentOrders,
});
export default connect(mapStateToProps, {getCurrentOrdersAction})(Home);
