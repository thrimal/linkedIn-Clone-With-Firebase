import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './navigations/Stacks'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    )
  }
}

