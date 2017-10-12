import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, AsyncStorage } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { getDecks } from '../utils/helpers'
import { receiveDecks } from '../actions'
import { fetchDecks } from '../utils/api'

class MainDecks extends React.Component {
	state = {
    fontLoaded: false,
	}

  componentDidMount() {
    this._getFont().done();
    this._loadInitialState().done();
  }

  componentWillReceiveProps(nextProps) {

  }

  async _getFont() {
    // get font
    await Expo.Font.loadAsync('open-sans', require('../assets/OpenSans-Bold.ttf'));
    this.setState({ fontLoaded: true });
  }

  async _loadInitialState() {

    try {
      let value = await fetchDecks();
      if (value !== null){
        let val = JSON.parse(value)
        Object.keys(val).map((key) => {
          // console.debug(key, val[key])
          this.props.dispatch(receiveDecks(val[key]));
          // using local state instead of reducx store
          // this.setState(prevState => ({
          //   deckData: [...prevState.deckData, val[key]]
          // }))
        })
      } else {
      }
    } catch (error) {
      console.log("error here")
    }
  }


  renderItem = (deck) => {
    return <Decks deck={deck.item} key={deck.item} />
  }

	render() {
    console.ignoredYellowBox = ['VirtualizedList: missing keys for items, make sure to specify a key property on each item or provide a custom keyExtractor.'];
    const deckData = this.props.deckData;
    // console.log("render",this.props);

		return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={deckData}
          renderItem={this.renderItem}
        />
        <View style={styles.addButton}>
          <TouchableOpacity>
            {this.state.fontLoaded ? (
              <Text
                onPress={() => this.props.navigation.navigate('AddDeck')}
                style={[styles.btnText,{ fontFamily: 'open-sans' }]}>Add Deck</Text>
              )
              : (<Text
                onPress={() => this.props.navigation.navigate('AddDeck')}
                style={styles.btnText}>Add Deck</Text>
              )}
          </TouchableOpacity>
        </View>
      </View>
		)
	}

}

function Decks ({deck}) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={ () => alert("here")}>
        <Text style={styles.rowContent}>{deck.title}</Text>
      </TouchableOpacity>
      <Text style={styles.deckCount}>make it longer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  list: {
    // height: 90,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    padding: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderBottomWidth: 1,
  },
  rowContent: {
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  deckCount: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 22,
    marginLeft: 'auto',
  },
  addButton: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 12,
    height: 45,
    alignContent: 'center',
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 22,
  }
});


function mapStateToProps(state) {
  return {
    deckData: state.deckData
  }
}

export default connect(mapStateToProps)(MainDecks)














