import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { AddNewCard } from '../actions'
import { saveNewCard } from '../utils/api'

class AddCard extends React.Component {

	state= {
		question: '',
		answer: '',
	}

  static navigationOptions = ({ navigation }) => {
  	return {
  		title: 'Add Card'
  	}
  }

  handleQuestion = (question) => {
  	this.setState({
  		question,
  	})
  }

  handleAnswer = (answer) => {
  	this.setState({
  		answer,
  	})
  }

  sbmtCard = (title, question, answer) => {
  	if(question === '' || answer === '') {
  		alert("Please Enter Question and Answer");
  	} else {
	  	const newCard = {
	  		title,
	  		question,
	  		answer,
	  	}

	  	let newDeck = ''
	  	let key = ''

	  	this.props.deckData.map((deck,index) => {
	  		if(deck.title === title) {
	  			newDeck = {title: deck.title, questions: deck.questions.concat({question,answer})};
		  		key = index;
	  		}
	  	});

	  	// console.log(newDeck, key);
	  	// add new deck to store
	  	this.props.dispatch(AddNewCard(newCard));
	  	// save to AsyncStorage
	  	saveNewCard({title, newDeck});
	  	// go back to Deck
	  	this.props.navigation.goBack();
	  }
  } 

	render() {
		const { question } = this.state;
		const { answer } = this.state;
		const { title } = this.props.navigation.state.params.deck;
		return (
			<View style={styles.container}>
				<View>
					<TextInput
						style={styles.textInput}
						onChangeText={this.handleQuestion}
						value={question}
					/>
					<TextInput
						style={styles.textInput}
						onChangeText={this.handleAnswer}
						value={answer}
					/>
				</View>
        <TouchableOpacity onPress={() => this.sbmtCard(title, question, answer)} style={styles.sbmtButton}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignContent: 'center',
    backgroundColor: 'white',
	},
	text: {
		fontSize: 36,
		flexWrap: 'wrap',
		textAlign: 'center',
	},
	textInput: {
		width: 200,
		height: 40,
		padding: 8,
		borderWidth: 1,
		margin: 50,
		borderColor: 'gray',
	},
  sbmtButton: {
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
  },
})

function mapStateToProps(state) {
  return {
    deckData: state.decks.deckData
  }
}

export default connect(mapStateToProps)(AddCard)