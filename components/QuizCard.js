import React from 'react'
import { 
	Text,
	StyleSheet, 
	View, 
	Animated, 
	PanResponder,
	Dimensions,
	LayoutAnimation,
	UIManager,
} from 'react-native'
import { connect } from 'react-redux'
import { Card, Button } from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class QuizCard extends React.Component {

	static defaultProps = {
		onSwipeRight: () => {},
		onSwipeLeft: () => {},
	}

	constructor(props) {
		super(props);

		const position = new Animated.ValueXY();

		const panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: (event, gesture) => {
				position.setValue({x: gesture.dx, y: gesture.dy});
			},
			onPanResponderRelease: (event, gesture) => {
				if(gesture.dx > SWIPE_THRESHOLD) {
					this.forceSwipe('right');
				} else if (gesture.dx < -SWIPE_THRESHOLD) {
					this.forceSwipe('left');
				} else {
					this.resetPosition();
				}
			},
		})

		this.state = { panResponder, position, counter: 0, flip: false };
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.data !== this.props.data) {
			this.setState({ counter: 0 });
		}
	}


  flipCard() {
  	return this.setState((prevState) => ({flip: !prevState.flip}));
  }

	componentWillUpdate() {
		UIManager.setLayoutAnimationEnabledExperimental &&
		UIManager.setLayoutAnimationEnabledExperimental(true);

		LayoutAnimation.spring();
	}

	forceSwipe(direction) {
		const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
		Animated.timing(this.state.position, {
			toValue: { x, y: 0 },
			duration: SWIPE_OUT_DURATION,
		}).start(() => this.onSwipeComplete(direction));
	}

	onSwipeComplete(direction) {
		const { onSwipeRight, onSwipeLeft, data } = this.props;
		const item = data[this.state.index]

		direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
		this.state.position.setValue({ x: 0, y: 0});
		this.setState((prevState) => ({counter: prevState.counter + 1}));
		this.setState({flip: false});
	}

	resetPosition() {
		Animated.spring(this.state.position, {
			toValue: { x: 0, y: 0 }
		}).start();
	}

	getCardStyle() {
		const { position } = this.state;
		const rotate = position.x.interpolate({
			inputRange: [-SCREEN_WIDTH * 2.0, 0, SCREEN_WIDTH * 2.0],
			outputRange: ['-120deg', '0deg', '120deg']
		})

		return {
			...position.getLayout(),
			transform: [{ rotate }],
		};
	}

  renderCardContent(item, index, totalLength) {
  	return (
  		<Card
  			key={index}
  			title={`${String(index)}/${String(totalLength)}`}
  		>
  			<View>
  				{this.state.flip === false 
  					? <Text style={styles.cardText}>{item.question}</Text>
  				  : <Text style={styles.cardText}>{item.answer}</Text>
  				}
  			</View>
  			<Button
  				onPress={() => this.flipCard() }
  				title={this.state.flip === false ? 'See Answer' : 'See Question'}
  				backgroundColor="#03A9F4"
  			/>
  		</Card>
  	)
  }

	renderCards() {
		if(this.state.counter >= this.props.data.length) {
			return this.props.renderNoMoreCards();
		}

		return this.props.data.map((item,index) => {
			if(index < this.state.counter) {
				return null;
			} else if(index === this.state.counter) {
				return (
					<Animated.View
					key={index}
					style={[this.getCardStyle(),styles.getCardStyle]}
					{...this.state.panResponder.panHandlers}
					>{this.renderCardContent(item,this.state.counter+1, this.props.data.length)}
					</Animated.View>
				);
			}
			return (
				<Animated.View 
					key={index} 
					style={[styles.cardStyle, { top: 10 * (index - this.state.counter) }]}
				>
					{this.renderCardContent(item,this.state.counter+1, this.props.data.length)}
				</Animated.View>
			)
		}).reverse();
	}

	render() {
		// console.log(this.props)
		return (
			<View style={styles.container}>
				{this.renderCards()}
			</View>
		)
	}
}

const styles = StyleSheet.create({
	cardStyle: {
		position: 'absolute',
		width: SCREEN_WIDTH,
	},
  cardText: {
    marginBottom:10,
    textAlign: 'center',
  },
  cardView: {
    marginTop: 20,
  },
})

export default connect()(QuizCard)