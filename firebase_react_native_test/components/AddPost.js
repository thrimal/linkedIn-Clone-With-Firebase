import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { KeyboardAvoidingView } from 'react-native';


const path='data:image/png;base64,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'
export default class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePath: path,
            imageName: '',
            caption: '',
            date: ''
        };
    }

    componentDidMount() {
        // this.getData()
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let today = new Date();
        let date = today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear();
        this.setState({
            date: date,

        })
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
                imagePath: path
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


    getUserName = async () => {
        try {
            const name = await AsyncStorage.getItem('name')
            console.log("Active User " + name);
            this.setState({ name: name })

        } catch (e) {
            console.log(e);
        }
    }

    UploadImage = async () => {
        
        if (this.state.imagePath != path && this.state.imageName != '' && this.state.caption != '') {
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
                    date:this.state.date,
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
                        style={{ width: '100%', height: 50, borderRadius: 30, position: 'absolute', top: 10 }}
                    />
                    <Image source={img} style={{ width: 400, height: 400, resizeMode: 'contain', borderColor: "red", top: 60,position:'absolute' }} />
                    <Button icon="image-search" style={{ width: 150, marginTop: 20, borderRadius: 30, top: 480 }} mode="contained" onPress={this.getimageFromGallery}>
                        Select Image
                    </Button>
                    <Button icon="send" style={{ width: 100, borderRadius: 30, top: 490,backgroundColor: '#0A66C2', }} mode="contained" onPress={this.UploadImage}>
                        Post
                     </Button>
                </View>
            </KeyboardAvoidingView>
        );
    }
}