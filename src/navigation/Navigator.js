import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {AddProduct} from '../screens';
import createAppStack from './TabNavigator';
import {CustomText, Heading} from '../components';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {PRIMARY} from '../styles/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  switch (routeName) {
    case 'Home':
      return (
        <CustomText color="white" size="xl" isBold={false} isTitle={true}>
          Home
        </CustomText>
      );
    case 'Orders':
      return (
        <CustomText color="white" size="xl" isBold={false} isTitle={true}>
          Orders
        </CustomText>
      );
    case 'Products':
      return (
        <CustomText color="white" size="xl" isBold={false} isTitle={true}>
          Products
        </CustomText>
      );
    case 'Profile':
      return (
        <CustomText color="white" size="xl" isBold={false} isTitle={true}>
          Profile
        </CustomText>
      );
  }
}

const Navigator = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={PRIMARY} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={createAppStack}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            headerStyle: {
              backgroundColor: PRIMARY,
              elevation: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
              alignSelf: 'center',
            },
            headerShown: true,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          })}
        />

        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{
            headerTitle: <Heading>Add Product</Heading>,
            headerShown: true,
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
