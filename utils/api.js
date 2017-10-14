import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY } from './helpers'

export function saveDeckTitle ({ input, newDeck }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [input]: newDeck
  }))
}

export function saveNewCard ({ title, newDeck }) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[title] = newDeck
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}

export function getDecks () {
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
}