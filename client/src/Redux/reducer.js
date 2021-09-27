

const initialState = {
    Cards: [],
    Loading: false,
    CardsPerPage: 9,
    CurrentPage: 1
  };
 
export default function Reducer(state = initialState, action){
    switch(action.type) {

        case 'SET_CARDS':
             console.log(action.payload)
           return {
               ...state,
               Cards: action.payload
           }
        case 'SET_LOADING':
            return{
                ...state,
                Loading: action.payload
            }
        default: 
            return state
    }
}