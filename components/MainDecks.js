import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, AsyncStorage } from 'react-native'
import { Constants } from 'expo'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'
import { receiveDecks } from '../actions'
import { getDecks } from '../utils/api'
import { Button } from 'react-native-elements'

class MainDecks extends React.Component {

  componentDidMount() {
    this._loadInitialState().done();
  }

  async _loadInitialState() {
    try {
      let value = await getDecks();
      let holdArray = [];
      if (value !== null){
        let val = JSON.parse(value)
        Object.keys(val).map((key) => {
          holdArray.push(val[key]);
        })
        this.props.dispatch(receiveDecks(holdArray));
      } else {
      }
    } catch (error) {
      console.log("error here")
    }
  }


  renderItem = (deck) => {
    return <Decks deck={deck.item} navProps={this.props.navigation}  key={deck.item} />
  }

	render() {
    console.ignoredYellowBox = ['VirtualizedList: missing keys for items, make sure to specify a key property on each item or provide a custom keyExtractor.'];
    const deckData = this.props.deckData;
		return (
      <View style={styles.container}>
        <Text style={styles.title}>Mobile Flash Cards</Text>
        {deckData.length === 0 || deckData === undefined
          ? (
            <View style={styles.container}><Text style={styles.title}>You Have No Decks</Text></View>
          )
          : (
            <FlatList
              style={styles.list}
              data={deckData}
              renderItem={this.renderItem}
            />
          )
        }
        <View style={styles.addButton}>
          <Button 
            onPress={() => this.props.navigation.navigate('AddDeck')}
            title={"New Deck"}
            backgroundColor="#03A9F4"
            icon={{name: 'add-to-list', type: 'entypo'}}
          >
          </Button>
        </View>
      </View>
		)
	}
}

function Decks ({deck, navProps}) {
  return (
    <View style={styles.row}>
      <TouchableOpacity onPress={() => 
        navProps.navigate('DeckDetail',
          {deck: deck})}>
        <Text style={styles.rowContent}>{deck.title}</Text>
      </TouchableOpacity>
      <Text style={styles.deckCount}>{deck.questions.length} Cards</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  list: {
    marginTop: Constants.statusBarHeight,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
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
    fontSize: 16,
    marginLeft: 'auto',
    color: 'gray',
  },
  addButton: {
    marginBottom: 80,
  },
});


function mapStateToProps(state) {
  return {
    deckData: state.decks.deckData
  }
}

export default connect(mapStateToProps)(MainDecks)














