import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { } from 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Splash from '../screens/Splash';
import SignUp from '../components/stackComponents/SignUp';
import SignIn from '../components/stackComponents/SignIn'

const Stack = createStackNavigator();

export default class Stacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>

    )
  }
}
