import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Home from '../components/tabComponents/Home';
import MyNetwork from '../components/tabComponents/MyNetwork';
import AddPost from '../components/tabComponents/AddPost';
import Notification from '../components/tabComponents/Notification';
import Jobs from '../components/tabComponents/Jobs';

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
          tabBarStyle: [
            {
              "display": "flex",
              // "backgroundColor": "#FFFFFF"
            },
            null
          ]
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home', headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="home" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="My Network" component={MyNetwork} options={{
          tabBarLabel: 'My Network', headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="user-friends" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Add Post" component={AddPost} options={{
          tabBarLabel: 'Add Post', headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="plus-square" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Notification" component={Notification} options={{
          tabBarLabel: 'Notification', headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="bell" color={color} size={size} />
          ),
        }} />
        <Tab.Screen name="Jobs" component={Jobs} options={{
          tabBarLabel: 'Jobs', headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AwesomeIcon name="shopping-bag" color={color} size={size} />
          ),
        }}
        />
      </Tab.Navigator>
    );
  }
}