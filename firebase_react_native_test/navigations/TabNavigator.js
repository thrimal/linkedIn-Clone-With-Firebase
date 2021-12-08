import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Home from '../components/Home';
import AllCustomers from '../components/AllCustomers';
import Notification from '../components/Notification';
import FileUpload from '../components/FileUpload';
import Firestore from '../components/Firestore';


const Tab = createBottomTabNavigator();

export default class TabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarInactiveTintColor:'gray',
          tabBarActiveTintColor:'black',
          tabBarStyle:{borderRadius:5},
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home', headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Add Users" component={Firestore} options={{
          tabBarLabel: 'My Network', headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="user-friends" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Add Post" component={FileUpload} options={{
          tabBarLabel: 'Add Post', headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="plus-square" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Notification" component={Notification} options={{
          tabBarLabel: 'Notification', headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="bell" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="All Users" component={AllCustomers} options={{
          tabBarLabel: 'List', headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="list" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    );
  }
}