

const initialState = {
    Cards: [],
    creados:[],
    //Loading: false,
  };
 
export default function Reducer(state = initialState, action){
    switch(action.type) {

        case 'SET_CARDS':
             //console.log(action.payload)
           return {
               ...state,
               Cards: action.payload
           }
        case 'SET_LOADING':
            return{
                ...state,
                Loading: action.payload
            }
        case 'GUARDAR_CREADO':
            return{
                ...state,
                creados: [...state.creados, action.payload]
            }


            // --------------- FILTRADOS ---------------- \\

        case 'SEARCH_BY_TITLE':
            console.log(action.payload, '|||||||Reducer|||||||')
            return{
                ...state,
                Cards: action.payload
            }

        case 'VEGETARIAN':
            //console.log(action.payload)
            let filtrado = state.Cards.filter(e => {
                if(e.diets?.includes('vegetarian')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado
            }
            
        case 'LACTO_VEGETARIAN':
            //console.log(action.payload)
            let filtrado2 = state.Cards.filter(e => {
                if(e.diets?.includes('lacto')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado2
            }

        case 'KETOGENIC':
            //console.log(action.payload)
            let filtrado3 = state.Cards.filter(e => {
                if(e.diets?.includes('ketogenic')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado3
            }

        case 'OVO_VEGETARIAN':
            //console.log(action.payload)
            let filtrado4 = state.Cards.filter(e => {
                if(e.diets?.includes('ovo')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado4
            }

        case 'VEGAN':
            //console.log(action.payload)
            let filtrado5 = state.Cards.filter(e => {
                if(e.diets?.includes('vegan')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado5
            }
        
        case 'PESCETARIAN':
        //console.log(action.payload)
            let filtrado6 = state.Cards.filter(e => {
                if(e.diets?.includes('pescetarian')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado6
            }
        
        case 'PALEO':
            //console.log(action.payload)
                let filtrado7 = state.Cards.filter(e => {
                    if(e.diets?.includes('paleo')){
                        return e
                    }
                })
                return {
                    ...state,
                    Cards: filtrado7
                }

        case 'PRIMAL':
    //console.log(action.payload)
            let filtrado8 = state.Cards.filter(e => {
                if(e.diets?.includes('paleo')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado8
            }

        case 'WHOLE_30':
            //console.log(action.payload)
                    let filtrado9 = state.Cards.filter(e => {
                        if(e.diets?.includes('whole30')){
                            return e
                        }
                    })
                    return {
                        ...state,
                        Cards: filtrado9
                    }
                // --------------- ORDENAMIENTOS ---------------- \\

        case 'AZ':
            let ordenados = state.Cards.sort((a,b) => (a.title > b.title)? 1: -1)
            return {
                ...state,
                Cards: ordenados
            }
        
        case 'ZA':
            let ordenados2 = state.Cards.sort((a,b) => (a.title > b.title)? -1: 1)
            return {
                ...state,
                Cards: ordenados2
            }

        case 'PUNTAJE_ASC':
            let ordenados3 = state.Cards.sort((a,b) => (a.rating > b.rating)? 1: -1)
            return {
                ...state,
                Cards: ordenados3
            }
        
        case 'PUNTAJE_DESC':
            let ordenados4 = state.Cards.sort((a,b) => (a.rating > b.rating)? -1: 1)
            return {
                ...state,
                Cards: ordenados4
            }

        default: 
            return state
    }
}