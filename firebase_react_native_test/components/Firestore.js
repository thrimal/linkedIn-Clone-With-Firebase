import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

export default class Firestore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            salary: '',
        };
    }

    saveCustomer = () => {
        if(this.state.name != '' && this.state.address != '' && this.state.salary != ''){
            firestore()
            .collection('customers')
            .add({
                name: this.state.name,
                address: this.state.address,
                salary: this.state.salary
            })
            .then(() => {
                console.log('User added!');
                this.setState({
                    name: '',
                    address: '',
                    salary: ''
                });
            });
        }else{
            alert("Fields are Empty...")
        }
        
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.label}> Firestore </Text>

                <TextInput
                    label="Name"
                    value={this.state.name}
                    onChangeText={text => this.setState(
                        { name: text }
                    )}
                    style={styles.input}
                />

                <TextInput
                    label="Address"
                    value={this.state.address}
                    onChangeText={text => this.setState(
                        { address: text }
                    )}
                    style={styles.input}
                />

                <TextInput
                    label="Salary"
                    value={this.state.salary}
                    onChangeText={text => this.setState(
                        { salary: text }
                    )}
                    style={styles.input}
                />

                <Button mode="contained" onPress={this.saveCustomer} style={styles.btn}>
                    Add Customer
                 </Button>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        marginTop: 20,
        borderRadius:30
    },
    input: {
        width: '100%',
        marginTop: 15,
        borderRadius:30
    },
    container: {
        alignItems: 'center',
        // backgroundColor:'lightyellow'
    },
    label: {
        marginBottom: 50,
        marginTop: 50,
        fontSize: 50,
        color: 'black'
    }
})