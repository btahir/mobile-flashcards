import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import { Constants } from 'expo'

export default class MainDecks extends React.Component {

	state = {
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


  renderItem = (deck) => {
    let [ name ] = Object.keys(deck.item);
    console.debug(name);
    return <Decks deck={name} key={name} />
  }

	render() {
    const deckData = this.state.deckData;

		return (
      <View style={styles.container}>
        <FlatList
          data={deckData}
          renderItem={this.renderItem}
        />
        <View>
          <TouchableOpacity>
            <Text>Add Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
		)
	}

}

function Decks ({deck}) {
  return (
    <Text>{deck}</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
    // justifyContent: 'center',
  },
});














