import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { SocialIcon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage'

GoogleSignin.configure({
    webClientId: '749647949105-uensqqlq3u3q9to8og5smhosiuovo0na.apps.googleusercontent.com',
});

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userName: '',
        };
    }

    saveUserName = async (name) => {
        AsyncStorage.setItem('name', name);
        console.log(name);
    }

    registerUser = () => {
        const { navigate } = this.props.navigation;
        if (this.state.userName != '' && this.state.password != '' && this.state.email != '') {
            auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(async (createdUser) => {
                    await createdUser.user.updateProfile({
                        displayName: this.state.userName
                    })
                    auth().onAuthStateChanged((user)=>{
                        console.log(user);
                        console.log('User account created & signed up! ' + user.displayName);
                        navigate('TabNavigator', { name: 'TabNavigator' });
                        this.saveUserName(user.displayName);
                    })
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        } else {
            alert("Fields are Empty...")
        }
    }

    onGoogleButtonPress = async () => {
        const { navigate } = this.props.navigation;
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        const user = auth().signInWithCredential(googleCredential);
        navigate('TabNavigator', { name: 'TabNavigator' })
        console.log('User account created & signed in!');
        console.log((await user).user);
        let usrName = (await user).user.displayName;
        this.saveUserName(usrName);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View>
                    <Image style={styles.img} source={require('../../assets/linkedin.png')} />
                </View>
                <Text style={styles.label}> Join LinkedIn Now </Text>
                <TextInput
                    label="Email"
                    value={this.state.email}
                    onChangeText={text => this.setState(
                        { email: text }
                    )}
                    style={styles.input}
                />

                <TextInput
                    label="User Name"
                    value={this.state.userName}
                    onChangeText={text => this.setState(
                        { userName: text }
                    )}
                    style={styles.input}
                />

                <TextInput
                    label="Password"
                    value={this.state.password}
                    onChangeText={text => this.setState(
                        { password: text }
                    )}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button mode="contained" onPress={this.registerUser} style={styles.btnSignUp}>
                    <Text style={{ fontSize: 18 }}>Continue</Text>
                </Button>
                <SocialIcon title='Sign In With Google' button type='google' style={{ width: 300, height: 50, position: 'absolute', top: 500, }}
                    onPress={this.onGoogleButtonPress} />

                <TouchableOpacity
                    onPressOut={() => navigate('SignIn', { name: 'SignIn' })}
                >
                    <Text style={{ color: 'black', fontSize: 15, top: 170, right: 30 }}> Already have an account ?</Text>
                    <Text style={{ color: 'blue', fontSize: 16, top: 150, left: 140 }}> Sign in</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }


}
const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        borderRadius: 30
    },
    input: {
        width: 400,
        marginTop: 15,
        borderRadius: 30
    },
    container: {
        alignItems: 'center',
        // backgroundColor:'lightyellow'
    },
    label: {
        marginBottom: 30,
        marginTop: 10,
        fontSize: 30,
        color: 'black'
    },
    img: {
        height: 45,
        width: 45,
        marginTop: 50,
    },
    btnSignIn: {
        borderRadius: 30,
        width: 300,
        height: 50,
        position: 'absolute',
        top: 500,
        backgroundColor: '#0A66C2',
    },
    btnSignUp: {
        position: 'absolute',
        borderRadius: 30,
        height: 50,
        width: 300,
        top: 440,
        backgroundColor: '#0A66C2',
    },
})