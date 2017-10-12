import React from 'react'
import { Text, View } from 'react-native'
import MainDecks from './components/MainDecks'
import AddDeck from './components/AddDeck'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { StackNavigator } from 'react-navigation'

const store = createStore(reducer, composeWithDevTools(
  // applyMiddleware(),
  // other store enhancers if any
));

const MainNavigator = StackNavigator({
  Home: {
    screen: MainDecks,
  },
  AddDeck: {
    screen: AddDeck,
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}


