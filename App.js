import React from 'react'
import { Text, View } from 'react-native'
import MainDecks from './components/MainDecks'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { StackNavigator } from 'react-navigation'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

const MainNavigator = StackNavigator({
  Home: {
    screen: MainDecks,
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    },
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black',
      }
    },
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


