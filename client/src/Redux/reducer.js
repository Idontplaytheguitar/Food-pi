const initialState = {
    cards: []
  };

export default function rootReducer(state = initialState, action){
    switch(action.type) {

        case 'SET_CARDS':

            console.log(action.payload.data)

            return{ ...state,
                    cards:[action.payload.data][0]
            }

        default: 
            return state
    }
}