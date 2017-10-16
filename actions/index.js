export const RECEIVE_DECKS='RECEIVE_DECKS';
export const ADD_QUIZ='ADD_QUIZ';
export const ADD_DECK='ADD_DECK';
export const ADD_CARD='ADD_CARD';

export function receiveDecks(decks) {
	return {
		type: RECEIVE_DECKS,
		decks,
	}
}

export function AddQuizResults(title, perc) {
	return {
		type: ADD_QUIZ,
		title,
		perc,
	}
}

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