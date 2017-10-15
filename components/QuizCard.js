import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class QuizCard extends React.Component {

	renderCards() {
		return this.props.data.map(item => {
			return this.props.renderCard(item);
		});
	}


	render() {
		return (
			<View>
				{this.renderCards()}
			</View>
		)
	}
}

export default connect()(QuizCard)