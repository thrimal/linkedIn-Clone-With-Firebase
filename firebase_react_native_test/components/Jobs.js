import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Searchbar, Button } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export default class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <AwesomeIcon style={styles.icon1} name="comment-dots" color={'#666666'} size={30} />
                <ScrollView>

                    <View style={styles.header}>
                        <TouchableOpacity>
                            <Text style={styles.txt1}>Jobs for you</Text>
                            <Text style={{ position: 'absolute', color: 'blue', left: 330, top: 15, fontSize: 15 }}>See All(0)</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view}>
                        <Text style={styles.txt3}>Land your dream role</Text>
                        <Image
                            style={styles.img2}
                            source={require('../assets/job.jpg')}
                        />
                        <Text style={styles.txt4}>Get notified when new jobs match your preferd title and location</Text>
                        <Button style={styles.btn1}>
                            <Text style={styles.txt5}>SIGN OUT</Text>
                        </Button>
                    </View>
                    <View style={styles.view}>
                        <View >
                            <Text style={styles.txt3}>Recomended for you</Text>
                            <View>

                                <Image
                                    style={styles.img3}
                                    source={require('../assets/xda.jpg')}
                                />
                                <Text style={styles.txt6}>Software Engineer</Text>
                                <Text style={styles.txt7}>XDA Developers.co</Text>
                                <Text style={styles.txt8}>Washington, United States</Text>
                                <Text style={styles.txt9}>3 weeks ago
                                <Text style={styles.txt10}>  5 aplicants  </Text>
                                    <Image
                                        style={styles.img4}
                                        source={require('../assets/linkedin.png')}
                                    />
                                    <Text>  Easy Apply</Text>
                                </Text>
                                <AwesomeIcon style={styles.icon2} name="bookmark" color={'#666666'} size={20} />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   backgroundColor:'#E9E5DF',
        color: '#FEFEFE',
    },
    img1: {
        marginTop: 10,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    searchbar: {
        width: 250,
        marginLeft: 60,
        marginTop: -40
    },
    icon1: {
        marginLeft: 323,
        marginTop: -40
    },
    txt1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginLeft: 15,
        marginTop: 13
    },
    header: {
        marginTop: 18,
        backgroundColor: '#FFFFFF',
        height: 55
    },
    txt2: {
        fontSize: 16,
        color: '#297ACA',
        marginLeft: 275,
        marginTop: -23,
    },
    view: {
        marginTop: 12,
        height: 270,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { height: 10, width: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 30,
        elevation: 3,
    },
    txt3: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 17,
        color: '#202124',
        fontWeight: 'bold'
    },
    img2: {
        marginTop: 10,
        width: 250,
        height: 100,
        alignSelf: 'center'
    },
    txt4: {
        marginLeft: 19,
        marginRight: 10,
        marginTop: 20,
        fontSize: 15,
        color: '#202124',
    },
    btn1: {
        marginTop: 10,
        backgroundColor: '#0A66C2',
        width: 310,
        height: 40,
        alignSelf: 'center',
        borderRadius: 30
    },
    txt5: {
        fontSize: 17,
        color: 'white'
    },
    img3: {
        width: 50,
        height: 50,
        marginTop: 25,
        marginLeft: 10,
        top:-8
    },
    txt6: {
        marginLeft: 70,
        marginTop: -60,
        fontSize: 17,
        color: '#202124',
        fontWeight: 'bold'
    },
    txt7: {
        marginLeft: 70,
        // marginTop:-60,
        fontSize: 17,
        color: 'gray',
    },
    txt8: {
        marginLeft: 70,
        fontSize: 13,
        color: 'grey',
    },
    img4: {
        width: 15,
        height: 15,
    },
    txt9: {
        marginLeft: 70,
        fontSize: 11,
        color: 'grey',
    },
    txt10: {
        fontWeight: 'bold',
        color: 'grey'
    },
    icon2: {
        marginLeft: 335,
        marginTop: -80
    }
})
