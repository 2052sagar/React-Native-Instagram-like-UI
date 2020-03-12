import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Heading from './components/Heading'
import PhotoList from './components/PhotoList'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Heading/>
        <PhotoList/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#fff'
  }
})
