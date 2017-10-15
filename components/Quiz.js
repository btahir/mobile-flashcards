import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class Quiz extends React.Component {

  static navigationOptions = ({ navigation }) => {
  	return {
  		title: 'Start Quiz'
  	}
  }


	render() {
		return (
			<View style={styles.container}>
				<Text>sajsal</Text>
			</View>

		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},

})

export default connect()(Quiz)