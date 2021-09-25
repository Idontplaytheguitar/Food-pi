const initialState = {
    cards: null,
    loading: 'No',
    currentPage:1,
    cardsPerPage: 9,
  };

export default function rootReducer(state = initialState, action){
    switch(action.type) {

        case 'SET_CARDS':
            return{
                ...state,
                cards: action.payload
                // loading: false
            }

        case 'SET_LOADING':
            console.log(action.payload)
            return {...state,
             loading: action.payload
            }

        default: 
            return state
    }
}