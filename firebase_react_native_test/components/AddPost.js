import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { KeyboardAvoidingView } from 'react-native';

export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: '',
            imageName: '',
            caption: ''
        };
    }

    getimageFromGallery = () => {
        ImagePicker.openPicker({
            // width: 400,
            // height:400,
            cropping: true,
        }).then(image => {
            // console.log(image);
            this.setState({
                imagePath: image.path
            })

            this.setState({
                imageName: image.modificationDate
            })

            // this.UploadImage()
        });
    }

    clear = async () => {
        ImagePicker.clean().then(() => {
            this.setState({
                imagePath: ''
            })
            this.setState({
                imageName: ''
            })
            this.setState({
                caption: ''
            })
        }).catch(e => {
            alert(e);
        });
    }

    UploadImage = async () => {
        if (this.state.imagePath != '' && this.state.imageName != '' && this.state.caption != '') {
            const fileName = this.state.imageName + ".jpg";
            const reference = storage().ref(`images/${fileName}`);
            await reference.putFile(this.state.imagePath);
            const url = await storage().ref(`images/${fileName}`).getDownloadURL();
            const caption = this.state.caption;
            // console.log(url);

            firestore()
                .collection('urls')
                .add({
                    url: url,
                    caption: caption,
                })
                .then(() => {
                    console.log('Url Added! ' + url);
                    alert("Post Uploaded...");
                });
            this.clear();
        } else {
            alert("Fields are Empty...")
        }
    }

    render() {
        const img = { uri: this.state.imagePath };
        return (
            <KeyboardAvoidingView>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        label="Share your thoughts. Add photos or hashtags..."
                        value={this.state.caption}
                        onChangeText={text => this.setState(
                            { caption: text }
                        )}
                        style={{ width: '100%', height: 50,  borderRadius: 30,position:'absolute',top:10 }}
                    />
                    <Image source={img} style={{ width: 400, height: 400, resizeMode: 'contain', borderColor: "red",top:60 }} />
                    <Button icon="image-search" style={{ width: 150, marginTop: 20, borderRadius: 30,top:50  }} mode="contained" onPress={this.getimageFromGallery}>
                        Select Image
                    </Button>
                    <Button icon="send" style={{ width: 100, marginTop: 10, borderRadius: 30,top:50  }} mode="contained" onPress={this.UploadImage}>
                        Post
                     </Button>
                </View>
            </KeyboardAvoidingView>
        );
    }
}