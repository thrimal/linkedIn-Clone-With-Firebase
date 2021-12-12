import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Searchbar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

const profilePath='https://api.samsungcloud.com/data/v2/com.samsung.account.profile_image/snv?s=gc3ixQItXVGh81WZWJYZN2BijFl396SlCuuZQMLrhnk58j6HFJ3RtmzdoqPFhlBDVh9XX8qOXUh0ZUyYOf8uXXygTeuGMIEUi2vsRyCRiCpJBoXqqKFgcnTdif1KuHyJv8-a3TWvj3OUVjORCbAvbtL5jXrBqUPF1427SfpNYMB_9g3DF9zBrVVGX_95XkcNjHV9UbvbWe0ieM18EV4hAEXKlvLg_csvfN2JROi9bJv8Orooeo6OWrjM4Dx221gWAJtT26hfwNPnnzIOWx7YGw&v=1356990136'
export default class MyNetwork extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onConnectBtnPressed = () => {
        console.log("Connected...");
    }

    onRemoveBtnPressed = () => {
        console.log("Removed...")
    }

    render() {
        const pp={uri:profilePath}
        return (
            <SafeAreaView>
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
                <ScrollView style={{marginBottom:50}}>
                    <View style={styles.mainContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={{ color: 'black', fontSize: 18, top: 15, left: 10 }}> Invitations </Text>
                            <Text style={{ position: 'absolute', color: 'blue', left: 330, top: 15, fontSize: 15 }}>See All(0)</Text>
                        </View>
                        <Text style={styles.text}> People you may know </Text>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/man1.png')} />
                            <Text style={styles.userName}>Dan</Text>
                            <Text style={styles.description}>Software Engineer at Microsoft (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/girl.png')} />
                            <Text style={styles.userName}>Sara</Text>
                            <Text style={styles.description}>HR at XDA (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/man2.png')} />
                            <Text style={styles.userName}>Jhon</Text>
                            <Text style={styles.description}>Associate Software Engineer at XDA (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/girl2.png')} />
                            <Text style={styles.userName}>Kara</Text>
                            <Text style={styles.description}>Software Engineer at Microsoft (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/girl3.png')} />
                            <Text style={styles.userName}>Diana</Text>
                            <Text style={styles.description}>Software Engineer at XDA (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/man3.png')} />
                            <Text style={styles.userName}>Tony</Text>
                            <Text style={styles.description}>Software Engineer at XDA (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
    mainContainer: {
        marginBottom: 10
    },
    notificationContainer: {
        marginTop: 10,
        width: "100%",
        height: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 30,
        elevation: 3,
        borderRadius: 30
    },
    text: {
        color: 'grey',
        fontSize: 18,
        left: 10,
        top: 10,
        marginBottom: 30,
    },
    userName: {
        marginTop: 5,
        color: 'black',
        left: 80,
        fontSize: 17,
        position: 'absolute'
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginTop: 10,
        position: 'absolute',
        left: 10,
    },
    description: {
        color: "grey",
        position: 'absolute',
        marginTop: 25,
        left: 80
    },
    connectBtn: {
        marginTop: 20,
        borderRadius: 30,
        width: 100,
        top: 30,
        left: 80,
        backgroundColor: '#0A66C2',
    },
    removeBtn: {
        marginTop: -36,
        borderRadius: 30,
        width: 100,
        top: 30,
        left: 190,
        c: 'gray'
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