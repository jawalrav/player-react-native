import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { windowStyles, headerStyles } from './styles/components'
import Spin from './Spin'

export default class Favorites extends React.Component {
  static navigationOptions = {
    title: 'Favorites',
    ...headerStyles
  }

  render() {
    return (
      <View style={styles.container}>
        <Spin radius={100} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
})
