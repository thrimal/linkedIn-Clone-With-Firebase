import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import firestore from '@react-native-firebase/firestore';
import { Searchbar } from 'react-native-paper';

const profilePath='https://api.samsungcloud.com/data/v2/com.samsung.account.profile_image/snv?s=gc3ixQItXVGh81WZWJYZN2BijFl396SlCuuZQMLrhnk58j6HFJ3RtmzdoqPFhlBDVh9XX8qOXUh0ZUyYOf8uXXygTeuGMIEUi2vsRyCRiCpJBoXqqKFgcnTdif1KuHyJv8-a3TWvj3OUVjORCbAvbtL5jXrBqUPF1427SfpNYMB_9g3DF9zBrVVGX_95XkcNjHV9UbvbWe0ieM18EV4hAEXKlvLg_csvfN2JROi9bJv8Orooeo6OWrjM4Dx221gWAJtT26hfwNPnnzIOWx7YGw&v=1356990136'
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = async () => {
    firestore()
      .collection('urls')
      .onSnapshot(querySnapshot => {
        const urls = [];

        querySnapshot.forEach(documentSnapshot => {
          urls.push({
            url: documentSnapshot.data().url,
            caption: documentSnapshot.data().caption,
            date:documentSnapshot.data().date
          });
        });

        this.setState({
          data: urls
        })
      });
  }

  renderItem = ({ item, index }) => {
    const img = { uri: item.url };
    const pp={uri:profilePath}
    return (
      <SafeAreaView>
        <View style={styles.item}>
          <View style={styles.view}>
            <Image
              style={styles.userImg}
              source={pp}
            />
            <Text style={styles.userName}>Thrimal Avishka</Text>
            <Text style={styles.description}>Software Engineer at XDA (Pvt) Ltd</Text>
            <Text style={styles.date}>{item.date}</Text>
            <FeatherIcon style={styles.icon} name="more-vertical" color={'#666666'} size={21} />
            <Text style={styles.caption}>{item.caption}</Text>


            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1.3, backgroundColor: '#D3D3D3' }} />
            </View>
            <Image
              style={styles.img}
              // source={require('../assets/background.png')}
              source={img}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1.3, backgroundColor: '#D3D3D3' }} />
            </View>
            <AwesomeIcon
              style={{
                top: 447,
                position: 'absolute',
                marginBottom: 5,
                left: 15
              }} name="heart" color={'red'} size={15}
            />
            <AwesomeIcon
              style={{
                top: 447,
                position: 'absolute',
                marginBottom: 5,
                left: 35
              }} name="thumbs-up" color={'blue'} size={15}
            />
             <AwesomeIcon
              style={{
                top: 447,
                position: 'absolute',
                marginBottom: 5,
                left: 55
              }} name="sign-language" color={'green'} size={15}
            />
            <Text style={{
              color: "grey",
              left: 80,
              fontSize: 13,
              top: 447,
              position:'absolute'
            }}>20</Text>
            <Text style={styles.bottomDescription}>20 comments</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, height: 1.3, backgroundColor: '#D3D3D3' }} />
            </View>
            <View>
            <AwesomeIcon
              style={styles.like} name="thumbs-up" color={'#666666'} size={25}
            />
            <AwesomeIcon
              style={styles.comment}
              name="comment" color={'#666666'} size={25}
            />
            <AwesomeIcon
              style={styles.share}
              name="share" color={'#666666'} size={25}
            />
            <AwesomeIcon
              style={styles.send}
              name="paper-plane" color={'#666666'} size={25}
            />
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }

  render() {
    const img={uri:profilePath}
    return (
      <SafeAreaView>
        <View style={{width:'100%',backgroundColor:'white',height:50}}>
        <Image
        style={styles.hUsrImg}
        source={img} 
        />
       
        <Searchbar
        style={styles.searchbar}
        placeholder="Search"
        onChangeText={this.onChangeSearch}
        value={this.state.searchQuery} 
        />   
        <AwesomeIcon style={{position:'absolute',left:350,top:10}}  name="comment-dots"  color={'#666666'} size={25} />
        </View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={{marginBottom:50}}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'white'
    position:'relative'
  },
  view: {
    // marginTop: 1,
    height: 520,
    borderRadius: 30,
    shadowColor: '#0000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 3,
    

  },
  item: {
    marginVertical: 3,
    borderRadius: 30,
    position:'relative'
    // marginBottom:5
  },
  userImg: {
    marginTop: 15,
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  like: {
    marginTop: 10,
    marginLeft: 40,
  },
  comment: {
    marginTop: -25,
    marginLeft: 140,

  },
  share: {
    marginTop: -27,
    marginLeft: 240,

  },
  send: {
    marginTop: -27,
    marginLeft: 340,

  },
  icon: {
    marginLeft: 380,
    marginTop: -20,

  },
  userName: {
    marginLeft: 60,
    marginTop: -40,
    fontSize: 20,
    color: '#202124',
    fontWeight: 'bold',
  },
  img: {
    // flex: 1,
    width: '100%',
    height: '65%',
    resizeMode: 'contain',
  },
  caption: {
    marginLeft: 20,
    marginRight: 10,
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18,
    color: '#202124',
  },
  description: {
    color: "grey",
    position: 'absolute',
    marginTop: 35,
    left: 60,
    fontSize: 13
  },
  bottomDescription: {
    color: "grey",
    left: 320,
    fontSize: 13,
    marginBottom: 8,
    top: 3
  },
  date:{
      left:60,
      marginTop:50,
      fontSize:12,
      color:'#666666',
      position:'absolute'
  },
  searchbar:{
    position:'absolute',
    width:200,
    left:90,
    height:40,
    top:5
  },
  hUsrImg:{
    marginTop: 10,
    marginLeft: 15,
    width: 30,
    height: 30,
    borderRadius: 100,
  }
})
