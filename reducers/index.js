
function decks (state={deckData: []}, action) {
	switch(action.type) {
		case 'RECEIVE_DECKS' :
		return {
			...state,
			deckData: [...state.deckData, action.decks],
		}
		default :
			return state
	}
}

export default decks
