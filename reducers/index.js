import { combineReducers } from 'redux';
import {
	RECEIVE_DECKS,
	ADD_DECK,
	ADD_CARD,
} from '../actions';


function decks (state={deckData: []}, action) {
	switch(action.type) {
		case RECEIVE_DECKS :
		return {
			...state,
			deckData: state.deckData.concat(action.decks),
		}
		case ADD_DECK :
		return {
			...state,
			deckData: [...state.deckData, action.deck],
		}
		default :
			return state
	}
}

function cards (state={}, action) {
	switch(action.type) {
		case ADD_CARD :
		return {
			...state,
			deckData: [...state.deckData, action.deck],
		}
		default :
			return state
	}
}

export default combineReducers({
	decks,

});
