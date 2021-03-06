import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'
import { Card, Button } from 'react-native-elements'

class Quiz extends React.Component {

  static navigationOptions = ({ navigation }) => {
  	return {
  		title: 'Start Quiz'
  	}
  }
  getDeck() {
  	let tmp = this.props.deckData.filter(deck => deck.title === this.props.navigation.state.params.deck.title)[0]
  	if(tmp) {
  		return tmp
  	}
  	return {title: '', questions:[]}
  }

	render() {
		const deck = this.getDeck();
		return(
			<View style={styles.container}>
				{deck.questions.length === 0 ? 
					(	<View style={styles.altContainer}>
							<Text style={styles.mainText}>You need to add at least one card to start the quiz!</Text>
						</View>)
				: (
					<QuizCard
						data={deck}
						style={styles.cardView}
					/>
					)
				}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	altContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',	
	},
	mainText: {
		textAlign: 'center',
		fontSize: 36,
	},
	cardText: {
		marginBottom:10,
		textAlign: 'center',
	},
	cardView: {
		flex: 1,
		marginTop: 20,
	},
})

function mapStateToProps(state) {
  return {
    deckData: state.decks.deckData
  }
}

export default connect(mapStateToProps)(Quiz)