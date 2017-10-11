import React from 'react'
import { Text, View } from 'react-native'
import MainDecks from './components/MainDecks'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(reducer, composeWithDevTools(
  // applyMiddleware(),
  // other store enhancers if any
));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainDecks style={{flex: 1}} />
      </Provider>
    );
  }
}


