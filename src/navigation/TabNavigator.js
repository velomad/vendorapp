import * as React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile, Home, Order, AllProducts} from '../screens/';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeIcon from 'react-native-vector-icons/AntDesign';
import OrderIcon from 'react-native-vector-icons/Ionicons';
import ProductsIcons from 'react-native-vector-icons/SimpleLineIcons';
import ProfileIcon from 'react-native-vector-icons/Ionicons';

// import Heading from '../components/Heading.js'
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();

function Products() {
  return (
    <Top.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#D3D3D3',
        labelStyle: {fontSize: 14, textTransform: 'none'},
        indicatorStyle: {
          backgroundColor: 'white',
        },
        style: {backgroundColor: '#428bca', borderTopWidth: 0},
      }}>
      <Top.Screen name="All Products" component={AllProducts} />
      <Top.Screen name="Add" component={Home} />
      <Top.Screen name="Delete" component={Home} />
    </Top.Navigator>
  );
}

const createAppStack = () => {
  return (
    <Tab.Navigator
      
      tabBarOptions={{
        
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <HomeIcon name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Order}
        options={{
          tabBarIcon: ({color, size}) => (
            <OrderIcon name="ios-list" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({color, size}) => (
            <ProductsIcons name="handbag" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <ProfileIcon name="ios-person-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default createAppStack;