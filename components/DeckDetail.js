import React from 'react'
import AddCard from './AddCard'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Button } from 'react-native-elements'

class DeckDetail extends React.Component {

  static navigationOptions = ({ navigation }) => {
  	return {
  		title: navigation.state.params.deck.title,
  	}
  }

  getDeck() {
  	return this.props.deckData.filter(deck => deck.title === this.props.navigation.state.params.deck.title)[0]
  }

  getQuizResults(deck) {
  	let results = this.props.quiz.results.filter(res => res.title === deck.title)[0]
  	if(results) {
  		return `Last Quiz Score: ${results.Score}%`
  	} else if(deck.perc) {
  		return `Last Quiz Score: ${deck.perc}%`
  	}
  	return "You Have Not Taken A Quiz Yet"
  }

	render() {
		const deck = this.getDeck();
		return (
			<View style={styles.container}>
				<View style={styles.detailView}>
					<Text style={styles.title}>{deck.title}</Text>
					<Text style={styles.subtitle}>{deck.questions.length} Cards</Text>
					<View style={styles.btnView}>
						<Button 
							onPress={() => this.props.navigation.dispatch(NavigationActions.back())}
							title={"Back To All Decks"}
							backgroundColor="#03A9F4"
							icon={{name: 'arrow-back'}} 
						>
						</Button>
						<Text style={styles.quizText}>{this.getQuizResults(deck)}</Text>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	detailView: {
		flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
	},
	title: {
		fontSize: 48,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 24,
		color: 'gray',
	},
	btnView: {
    padding: 20,
	},
	quizText: {
		marginTop: 20,
		textAlign: 'center',
		fontSize: 20,
	},
})

function mapStateToProps(state) {
  return {
    deckData: state.decks.deckData,
    quiz: state.quiz
  }
}

export default connect(mapStateToProps)(DeckDetail)