import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import QuizCard from './QuizCard'
import { Card, Button } from 'react-native-elements'

class Quiz extends React.Component {

  static navigationOptions = ({ navigation }) => {
  	return {
  		title: 'Start Quiz'
  	}
  }

  state = {
  	counter: 1,
  }

  getDeck() {
  	return this.props.deckData.filter(deck => deck.title === this.props.navigation.state.params.deck.title)[0]
  }

  renderQuizCard(item) {
  	return (
  		<Card
  			key={item.question}
  			title={item.question}
  		>
  			<Text>more text here</Text>
  			<Button
  				title={item.question}
  				backgroundColor="#03A9F4"
  			/>
  		</Card>
  	)
  }


	render() {
		const deck = this.getDeck();
		// console.log(deck);
		return(
			<View style={styles.container}>
				{deck.questions.length === 0 ? 
					(	<View style={styles.altContainer}>
						<Text style={styles.warnText}>You need to add at least one card to start the quiz!</Text>
						</View>)
				: (
					<View>
						<Text style={styles.counterText}>{this.state.counter}/{deck.questions.length}</Text>
						<Text style={styles.warnText}>{deck.questions[this.state.counter - 1].question}</Text>
						<QuizCard
							data={deck.questions}
							renderCard={this.renderQuizCard}
						/>
						<TouchableOpacity onPress={() => this.setState((prevState) => ({counter: prevState.counter + 1}))} ><Text>TEST</Text></TouchableOpacity>
					</View>
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
	warnText: {
		textAlign: 'center',
		fontSize: 36,
	},
	counterText: {
		fontSize: 24,
		padding: 8,
	},
})

function mapStateToProps(state) {
  return {
    deckData: state.decks.deckData
  }
}

export default connect(mapStateToProps)(Quiz)