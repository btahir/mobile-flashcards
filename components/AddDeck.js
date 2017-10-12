import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AddNewDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class AddDeck extends React.Component {
  state = {
  	input: ''
  }

  handleTextChange = (input) => {
  	this.setState({
  		input,
  	})
  }

  sbmtDeck = (input) => {
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

	render() {
		const { input } = this.state;
		return(
			<View style={styles.container}>
				<Text style={styles.text}>What is the title of your new deck?</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={this.handleTextChange}
					value={input}
				/>
        <TouchableOpacity style={styles.sbmtButton}>
          <Text
            onPress={() => this.sbmtDeck(input)}
            style={styles.btnText}>Submit
          </Text>
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

export default connect()(AddDeck)