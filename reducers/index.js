import {
	RECEIVE_DECKS,
	ADD_DECK
} from '../actions';


function decks (state={deckData: []}, action) {
	switch(action.type) {
		case RECEIVE_DECKS :
		return {
			...state,
			deckData: [...state.deckData, action.decks],
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

export default decks
