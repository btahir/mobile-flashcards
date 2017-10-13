export const RECEIVE_DECKS='RECEIVE_DECKS';
// export const RECEIVE_ONE_DECK='RECEIVE_ONE_DECK';
export const ADD_DECK='ADD_DECK';
export const ADD_CARD='ADD_CARD';

export function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks,
	}
}

// export function receiveOneDeck(title) {
// 	return {
// 		type: RECEIVE_ONE_DECK,
// 		title,
// 	}
// }

export function AddNewDeck(deck) {
	return {
		type: ADD_DECK,
		deck,
	}
}

export function AddNewCard({title, question, answer}) {
	return {
		type: ADD_CARD,
		title,
		question,
		answer,
	}
}