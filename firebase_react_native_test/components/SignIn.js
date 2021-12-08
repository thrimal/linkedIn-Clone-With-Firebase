import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { SocialIcon } from 'react-native-elements';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk-next';
import { KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native';

GoogleSignin.configure({
    webClientId: '749647949105-uensqqlq3u3q9to8og5smhosiuovo0na.apps.googleusercontent.com',
});

export default class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };

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
        console.log(user);
    }

    onFacebookButtonPress = async () => {
        // Attempt login with permissions
        const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        // Once signed in, get the users AccesToken
        const data = await AccessToken.getCurrentAccessToken();

        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        // Create a Firebase credential with the AccessToken
        const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(facebookCredential);
    }

    userLogin = () => {
        const { navigate } = this.props.navigation;
        if (this.state.email != '' && this.state.password != '') {
            auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((user) => {
                    console.log(user);
                    console.log('User signed in!');
                    navigate('TabNavigator', { name: 'TabNavigator' })
                })
                .catch(error => {
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        } else {
            alert("Fields are Empty...")
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView style={styles.container}>
                <View>
                    <Image style={styles.img} source={require('../assets/linkedin.png')} />
                </View>

                <Text style={styles.label}> Sign In </Text>
                <TextInput
                    label="Email"
                    value={this.state.email}
                    onChangeText={text => this.setState(
                        { email: text }
                    )}
                    style={styles.input}
                />

                <TextInput
                    label="Password"
                    value={this.state.password}
                    onChangeText={text => this.setState(
                        { password: text }
                    )}
                    style={styles.input}
                />

                <Button mode="contained" onPress={this.userLogin} style={styles.btnSignIn}>
                    Sign In
                </Button>
                <Button icon="step-forward" mode="contained" onPress={() => navigate('SignUp', { name: 'SignUp' })} style={styles.btnSignUp}>
                    SignUp
                </Button>
                <GoogleSigninButton
                    style={{ width: 200, height: 50, borderRadius: 30, color: GoogleSigninButton.Color.Dark }}
                    // size={GoogleSigninButton.Size.Wide}
                    // color={GoogleSigninButton.Color.Dark}
                    onPress={this.onGoogleButtonPress}
                    disabled={this.state.isSigninInProgress}
                />

                <SocialIcon title='Sign In With Facebook' button type='facebook' style={{ width: 200, height: 50 }}
                    onPress={this.onFacebookButtonPress} />

                {/* <LoginButton
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                console.log("login has error: " + result.error);
                            } else if (result.isCancelled) {
                                console.log("login is cancelled.");
                            } else {
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        console.log(data.accessToken.toString())
                                    }
                                )
                            }
                        }
                    }
                    onLogoutFinished={() => console.log("logout.")} /> */}
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    btnSignIn: {
        marginTop: 20,
        marginBottom: 10,
        right: 60,
        position: 'relative',
        borderRadius: 30
    },
    btnSignUp: {
        marginTop: 374,
        marginBottom: 10,
        right: 102,
        position: 'absolute',
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
        fontSize: 50,
        color: 'black'
    },
    img: {
        height: 45,
        width: 45,
        marginTop: 50,
    }
})