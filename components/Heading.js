import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Heading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}> Photos </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 15

    }
});
