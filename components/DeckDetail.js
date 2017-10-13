import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

class DeckDetail extends React.Component {


	render() {
		return (
			<View>
				<Text>Hey</Text>
			</View>


		)
	}
}

export default connect()(DeckDetail)