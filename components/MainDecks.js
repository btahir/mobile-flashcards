import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

class MainDecks extends React.Component {

	state = {
    fontLoaded: false,
		deckData: [
		  {
        React: {
  		    title: 'React',
  		    questions: [
  		      {
  		        question: 'What is React?',
  		        answer: 'A library for managing user interfaces'
  		      },
  		      {
  		        question: 'Where do you make Ajax requests in React?',
  		        answer: 'The componentDidMount lifecycle event'
  		      }
  		    ]
  		  }
      },
		  {
        JavaScript: {
  		    title: 'JavaScript',
  		    questions: [
  		      {
  		        question: 'What is a closure?',
  		        answer: 'The combination of a function and the lexical environment within which that function was declared.'
  		      }
  		    ]
		    }
      }
		]
	}

  async componentDidMount() {
      await Expo.Font.loadAsync('open-sans', require('../assets/OpenSans-Bold.ttf'));
      this.setState({ fontLoaded: true });
    }

  // componentWillMount() {
  //   await Expo.Font.loadAsync('open-sans', 'https://fonts.googleapis.com/css?family=Open+Sans');
  // }


  renderItem = (deck) => {
    let [ name ] = Object.keys(deck.item);
    return <Decks deck={name} key={name} />
  }

	render() {
    console.ignoredYellowBox = ['VirtualizedList: missing keys for items, make sure to specify a key property on each item or provide a custom keyExtractor.'];
    const deckData = this.state.deckData;

		return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={deckData}
          renderItem={this.renderItem}
        />
        <View style={styles.addButton}>
          <TouchableOpacity>
            {this.state.fontLoaded ? (
              <Text style={[styles.btnText,{ fontFamily: 'open-sans' }]}>Add Deck</Text>
              )
              : (<Text style={styles.btnText}>Add Deck</Text>
              )}
          </TouchableOpacity>
        </View>
      </View>
		)
	}

}

function Decks ({deck}) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={ () => alert("here")}>
        <Text style={styles.rowContent}>{deck}</Text>
      </TouchableOpacity>
      <Text style={styles.deckCount}>make it longer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    // justifyContent: 'center',
  },
  list: {
    // height: 90,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    padding: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  rowContent: {
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckCount: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    marginLeft: 'auto',
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 12,
    height: 45,
    alignContent: 'center',
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 22,
  }
});

export default connect()(MainDecks)














