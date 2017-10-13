import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends React.Component {

  static navigationOptions = ({ navigation }) => {
  	return {
  		title: navigation.state.params.deck.title
  	}
  }

	render() {
		const { deck } = this.props.navigation.state.params;
		return (
			<View style={styles.container}>
				<View style={styles.detailView}>
					<Text style={styles.title}>{deck.title}</Text>
					<Text style={styles.subtitle}>{deck.questions.length} Cards</Text>
				</View>
				<View style={styles.btnView}>
					<TouchableOpacity style={styles.addBtn}>
						<Text style={styles.addBtnText}>Add Card</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.addBtn}>
						<Text style={styles.addBtnText}>Start Quiz</Text>
					</TouchableOpacity>
				</View>
			</View>


		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
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
		flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 120,
    padding: 10,
	},
  addBtn: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 7,
    height: 45,
    alignContent: 'center',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
   addBtnText: {
    color: 'white',
    fontSize: 22,
  },
})

export default connect()(DeckDetail)