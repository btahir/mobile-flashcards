import React from 'react'
import AddCard from './AddCard'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
// import { receiveOneDeck } from '../actions'

class DeckDetail extends React.Component {

  static navigationOptions = ({ navigation }) => {
  	return {
  		title: navigation.state.params.deck.title,
  	}
  }

  getDeck() {
  	return this.props.deckData.filter(deck => deck.title === this.props.navigation.state.params.deck.title)[0]
  }


	render() {
		const deck = this.getDeck();
		return (
			<View style={styles.container}>
				<View style={styles.detailView}>
					<Text style={styles.title}>{deck.title}</Text>
					<Text style={styles.subtitle}>{deck.questions.length} Cards</Text>
					<View style={styles.btnView}>
						<TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.dispatch(NavigationActions.back())} >
							<Text style={styles.btnText}>Back To All Decks</Text>
						</TouchableOpacity>
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
  btn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 7,
    height: 45,
    alignContent: 'center',
    marginBottom: 10,
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

export default connect(mapStateToProps)(DeckDetail)