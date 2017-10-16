import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { AddNewDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'
import { Button, FormLabel, FormInput } from 'react-native-elements'

class AddDeck extends React.Component {
  state = {
  	input: ''
  }

  static navigationOptions = () => {
  	return {
  		title: 'Add Deck'
  	}
  }

  handleTextChange = (input) => {
  	this.setState({
  		input,
  	})
  }

  sbmtDeck = (input) => {
  	if(input === '') {
  		alert("Please Enter Deck Name");
  	} else {
	  	const newDeck = {
	  		title: input,
	  		questions: []
	  	}
	  	// add new deck to store
	  	this.props.dispatch(AddNewDeck(newDeck));
	  	// save to AsyncStorage
	  	saveDeckTitle({input, newDeck});
	  	// go back to Home
	  	this.props.navigation.goBack();
	  }
  } 

	render() {
		const { input } = this.state;
		return(
			<View style={styles.container}>
				<FormLabel labelStyle={{fontSize:20}}>What is the title of your new deck?</FormLabel>
				<FormInput onChangeText={this.handleTextChange}/>
        <Button 
        	onPress={() => this.sbmtDeck(input)}
	        title={"Add"}
	        style={{marginTop: 20}}
	        backgroundColor="#03A9F4"
	        icon={{name: 'add'}}
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
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
	},
	text: {
		fontSize: 36,
		flexWrap: 'wrap',
		textAlign: 'center',
		marginTop: 30,
	},
	textInput: {
		width: 200,
		height: 40,
		padding: 8,
		borderWidth: 1,
		margin: 50,
		borderColor: 'gray',
	},
})

export default connect()(AddDeck)