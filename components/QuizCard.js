import React from 'react'
import { Text, View, Animated, PanResponder } from 'react-native'
import { connect } from 'react-redux'

class QuizCard extends React.Component {
	constructor(props) {
		super(props);

		const position = new Animated.ValueXY();

		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({x: gesture.dx, y: gesture.dy});
			},
			onPanResponderRelease: () => {},
		})

		this.state = { panResponder, position };
	}

	getCardStyle() {
		return {
			...this.state.position.getLayout(),
			transform: [{ rotate: '45deg'}],
		};
	}

	renderCards() {
		return this.props.data.map((item,index) => {
			if(index === 0) {
				return (<Animated.View
									key={index}
									style={this.getCardStyle()}
									{...this.state.panResponder.panHandlers}
								>{this.props.renderCard(item)}
								</Animated.View>
				);
			}
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