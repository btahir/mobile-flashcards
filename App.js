import React from 'react'
import { Text, View } from 'react-native'
import MainDecks from './components/MainDecks'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import DeckDetail from './components/DeckDetail'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import reducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons'

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

const Tabs = TabNavigator({
  TabHome: {
    screen: DeckDetail,
    navigationOptions: {
      tabBarLabel: 'Deck',
      tabBarIcon: <MaterialCommunityIcons name='cards-playing-outline' size={30} color={'gray'} />
    },
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      tabBarLabel: 'Add Card',
      tabBarIcon: <FontAwesome name='plus-square' size={30} color={'gray'} />
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      tabBarLabel: 'Start Quiz',
      tabBarIcon: <MaterialIcons name='question-answer' size={30} color={'gray'} />
    },
  },
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    // activeTintColor: 'purple',
    labelStyle: {
      fontSize: 12,
      color: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    style: {
      height: 56,
      marginBottom: 20,
      borderWidth: 2,
      borderColor: 'gray',
      backgroundColor: 'white',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    },
  },
})

const MainNavigator = StackNavigator({
  Home: {
    screen: MainDecks,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#778899',
      },
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#778899',
      }
    },
  },
  DeckDetail: {
    screen: Tabs,
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#778899',
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


