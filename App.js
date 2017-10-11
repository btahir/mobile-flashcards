import React from 'react'
import { Text, View } from 'react-native'
import MainDecks from './components/MainDecks'

export default class App extends React.Component {
  render() {
    return (
      <MainDecks style={{flex: 1}} />
    );
  }
}


