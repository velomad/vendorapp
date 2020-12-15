import React ,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getProfileAction} from '../../store/actions'

import {View, Text} from 'react-native';

const Profile = (props) => {
  useEffect (() => {
    props.getProfileAction()
  },[])

  console.log(props.profileData)

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

const mapStateToProps = ({profileState}) => ({
profileData:profileState.shopProfile
})


export default connect(mapStateToProps,{getProfileAction})(Profile);
