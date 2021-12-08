import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  getNotification = async () => {
    await admin.messaging().sendMulticast({
      tokens: [
        /* ... */
      ], // ['token_1', 'token_2', ...]
      notification: {
        title: 'Basic Notification',
        body: 'This is a basic notification sent from the server!',
        imageUrl: 'https://my-cdn.com/app-logo.png',
      },
    });
  }

  render() {
    return (
      <View>
        <Text> Notification </Text>
      </View>
    );
  }
}
