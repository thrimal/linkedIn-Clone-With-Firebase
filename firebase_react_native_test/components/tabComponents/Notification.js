import React, { Component, Fragment } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, FlatList, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import NotificationController from './NotificationController';

let pushData = [
  {
    title: "ARM",
    message: "is the news ",
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlG5SKs1oDvFIepcn-TD-bVEJJZb6lb4sixA&usqp=CAU'
  },
  {
    title: "Samsung",
    message: "is the news:The search giant is giving all workers an extra cash bonus.",
    url: 'data:image/png;base64,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'
  },
  {
    title: "Google",
    message: "is the news:The search giant is giving all workers an extra cash bonus.",
    url: 'data:image/png;base64,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'
  },
  {
    title: "XDA",
    message: "is the news:The search giant is giving all workers an extra cash bonus.",
    url: 'data:image/jpeg;base64,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'
  }
]

const profilePath = 'https://api.samsungcloud.com/data/v2/com.samsung.account.profile_image/snv?s=gc3ixQItXVGh81WZWJYZN2BijFl396SlCuuZQMLrhnk58j6HFJ3RtmzdoqPFhlBDVh9XX8qOXUh0ZUyYOf8uXXygTeuGMIEUi2vsRyCRiCpJBoXqqKFgcnTdif1KuHyJv8-a3TWvj3OUVjORCbAvbtL5jXrBqUPF1427SfpNYMB_9g3DF9zBrVVGX_95XkcNjHV9UbvbWe0ieM18EV4hAEXKlvLg_csvfN2JROi9bJv8Orooeo6OWrjM4Dx221gWAJtT26hfwNPnnzIOWx7YGw&v=1356990136'
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

  renderItem = ({ item }) => {
    const img = { uri: item.url }
    return (
      <View style={styles.body}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.message}>{item.message}</Text>
        <Image style={styles.userImage} source={img} />
      </View>
    )
  }

  render() {
    const pp = { uri: profilePath }
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ width: '100%', backgroundColor: 'white', height: 50 }}>
          <Image
            style={styles.hUsrImg}
            source={pp}
          />

          <Searchbar
            style={styles.searchbar}
            placeholder="Search"
            onChangeText={this.onChangeSearch}
            value={this.state.searchQuery}
          />
          <AwesomeIcon style={{ position: 'absolute', left: 350, top: 10 }} name="comment-dots" color={'#666666'} size={25} />
        </View>
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View style={styles.headerContainer}>
              <Text style={{ color: 'black', fontSize: 18, top: 15, left: 10 }}> Notifications </Text>
              <Text style={{ position: 'absolute', color: 'blue', left: 330, top: 15, fontSize: 15 }}>See All(0)</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <FlatList
                data={pushData}
                renderItem={(item) => this.renderItem(item)}
                style={{ marginBottom: 50 }}
              />
            </View>
          </SafeAreaView>
          <NotificationController />
        </Fragment>

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    marginTop: 10,
    width: "100%",
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 3,
    borderRadius: 1
  },
  searchbar: {
    position: 'absolute',
    width: 200,
    left: 90,
    height: 40,
    top: 5
  },
  hUsrImg: {
    marginTop: 10,
    marginLeft: 15,
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginTop: 10,
    position: 'absolute',
    left: 10,
  },
  connectBtn: {
    marginTop: 20,
    borderRadius: 30,
    width: 100,
    top: 30,
    left: 80,
    backgroundColor: '#0A66C2',
  },
  listHeader: { backgroundColor: '#eee', color: "#222", height: 44, padding: 12 },
  title: { fontSize: 18, fontWeight: 'bold', paddingTop: 10, color: 'black', left: 60 },
  message: { fontSize: 14, paddingBottom: 15, borderBottomColor: "#ccc", borderBottomWidth: 1, color: 'gray', left: 60, width: 300 },
  engine: { position: 'absolute', right: 0, },
  body: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 30, shadowColor: 'grey', shadowOffset: { height: 10, width: 0 }, shadowOpacity: 0.5, shadowRadius: 30, elevation: 3, marginBottom: 10 },
  sectionContainer: { marginTop: 32, paddingHorizontal: 24, },
  sectionTitle: { fontSize: 24, fontWeight: '600', },
  sectionDescription: { marginTop: 8, fontSize: 18, fontWeight: '400', },
  highlight: { fontWeight: '700' },
  footer: { fontSize: 12, fontWeight: '600', padding: 4, paddingRight: 12, textAlign: 'right', },
})
