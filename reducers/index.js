import { combineReducers } from 'redux';
import {
	RECEIVE_DECKS,
	// RECEIVE_ONE_DECK,
	ADD_DECK,
	ADD_CARD,
} from '../actions';


function decks (state={deckData: []}, action) {
	switch(action.type) {
		case RECEIVE_DECKS :
		return {
			...state,
			deckData: [...state.deckData, ...action.decks],
		}
		// case RECEIVE_ONE_DECK :
		// return {
		// 	...state,
		// 	deckData: state.deckData.filter(deck => deck.title === action.title),
		// }
		case ADD_DECK :
		return {
			...state,
			deckData: [...state.deckData, action.deck],
		}
		case ADD_CARD :
		return {
			...state,
			deckData: state.deckData.map(deck => {
				return deck.title === action.title 
				? {title: deck.title, questions: deck.questions.concat({question:action.question, answer: action.answer})} 
				: {...deck}
			})
		}
		default :
			return state
	}
}

export default combineReducers({
	decks,
});
