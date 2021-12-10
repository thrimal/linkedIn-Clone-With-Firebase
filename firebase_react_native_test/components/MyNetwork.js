import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { Button } from 'react-native-paper';


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
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.mainContainer}>

                        <View style={styles.headerContainer}>
                            <Text style={{ color: 'black', fontSize: 18, top: 15, left: 10 }}> Invitations </Text>
                            <Text style={{ position: 'absolute', color: 'blue', left: 330, top: 15, fontSize: 15 }}>See All(0)</Text>
                        </View>
                        <Text style={styles.text}> People you may know </Text>
                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/man.png')} />
                            <Text style={styles.userName}>Lahiru Kumara</Text>
                            <Text style={styles.description}>Software Engineer at XDA (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/man.png')} />
                            <Text style={styles.userName}>Thilini</Text>
                            <Text style={styles.description}>HR at XDA (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/man.png')} />
                            <Text style={styles.userName}>Dilshan</Text>
                            <Text style={styles.description}>Associate Software Engineer at XDA (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/man.png')} />
                            <Text style={styles.userName}>Harshana</Text>
                            <Text style={styles.description}>Software Engineer at XDA (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/man.png')} />
                            <Text style={styles.userName}>Dilan</Text>
                            <Text style={styles.description}>Software Engineer at XDA (Pvt) Ltd</Text>
                            <Button style={styles.connectBtn} mode='contained' onPress={this.onConnectBtnPressed}>Connect</Button>
                            <Button style={styles.removeBtn} mode='outlined' onPress={this.onRemoveBtnPressed}>Remove</Button>
                        </View>

                        <View style={styles.notificationContainer}>
                            <Image style={styles.userImage} source={require('../assets/man.png')} />
                            <Text style={styles.userName}>Tharindu</Text>
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
        backgroundColor: '#04a2f0'
    },
    removeBtn: {
        marginTop: -36,
        borderRadius: 30,
        width: 100,
        top: 30,
        left: 190,
        c: 'gray'
    }
})