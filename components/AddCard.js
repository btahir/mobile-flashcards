import React from 'react'
import { StyleSheet, Text, View, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { AddNewCard } from '../actions'
import { updateDeck } from '../utils/api'
import { Button, FormLabel, FormInput } from 'react-native-elements'

class AddCard extends React.Component {

	state= {
		question: '',
		answer: '',
	}

	// componentWillMount() {
	// 	this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
	// }

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
	  	// add new deck to store
	  	this.props.dispatch(AddNewCard(newCard));
	  	// save to AsyncStorage
	  	updateDeck({title, newDeck});
	  	// reset form
	  	this.setState({ question: '', answer: '' });
	  	this.qInput.clearText();
	  	this.aInput.clearText();
	  	// go back to Deck
	  	Keyboard.dismiss();
	  	this.props.navigation.goBack();
	  }
  } 

	render() {
		const { question } = this.state;
		const { answer } = this.state;
		const { title } = this.props.navigation.state.params.deck;
		return (
			<View style={styles.container}>
				<View style={{marginTop: 40}}>
					<View style={styles.formView}>
						<FormLabel labelStyle={{fontSize:20}}>Question</FormLabel>
						<FormInput ref={input => this.qInput = input} onChangeText={this.handleQuestion}/>
					</View>
					<View style={styles.formView}>
						<FormLabel labelStyle={{fontSize:20}}>Answer</FormLabel>
						<FormInput ref={input => this.aInput = input} onChangeText={this.handleAnswer}/>
					</View>
				</View>
        <Button 
        	onPress={() => this.sbmtCard(title, question, answer)}
					title={"Add"}
					backgroundColor="#03A9F4"
					icon={{name: 'add'}} 
					style={{marginTop: 20}}
        >
        </Button>
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
	formView: {
		alignItems: 'center',
	},
})

function mapStateToProps(state) {
  return {
    deckData: state.decks.deckData
  }
}

export default connect(mapStateToProps)(AddCard)