import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './helpers'

export function submitDeck ({ input, newDeck }) {
	console.log(input)
	console.log(newDeck)
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [input]: newDeck
  }))
}