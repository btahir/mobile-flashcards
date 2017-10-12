import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class AddDeck extends React.Component {
	state = {
		title: '',
		questons: [],
	}

	render() {
		return(
			<View>
				<Text>HELLO</Text>
			</View>
		)
	}



}

export default connect()(AddDeck)