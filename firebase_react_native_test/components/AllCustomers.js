import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default class AllCustomers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        const subscriber = firestore()
            .collection('customers')
            .onSnapshot(querySnapshot => {
                const customers = [];

                querySnapshot.forEach(documentSnapshot => {
                    customers.push({
                        name: documentSnapshot.data().name,
                        address: documentSnapshot.data().address,
                        salary: documentSnapshot.data().salary,
                        key: documentSnapshot.id,
                    });
                });

                this.setState({
                    data: customers
                })

            });
    }

    render() {
        return (
            <View>
                <Text> LoadAll Data </Text>

                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <View style={{ height: 150, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={styles.text}>Name: {item.name}</Text>
                            <Text style={styles.text}>Address: {item.address}</Text>
                            <Text style={styles.text}>Salary: {item.salary}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => {
                        item.key
                    }}
                />
            </View >
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
})