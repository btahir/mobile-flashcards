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
			<View>
				<Text>sajsal</Text>
			</View>

		)
	}
}

export default connect()(Quiz)