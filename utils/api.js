import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './helpers'

export function submitDeck ({ input, newDeck }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [input]: newDeck
  }))
}

export function fetchDecks () {
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
}