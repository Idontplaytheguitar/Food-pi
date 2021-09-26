import axios from 'axios'

const initialState = {
    Cards: []
  };

export default function rootReducer(state = initialState, action){
    switch(action.type) {

        case 'SET_CARDS':
            // console.log(action.payload)
            axios.get('http://localhost:3001/recipes')
            .then(r =>{
                console.log(r)
                return {
                    
                    Cards: [...r.data]
                }
            })
        default: 
            return state
    }
}