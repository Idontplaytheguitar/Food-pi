

const initialState = {
    Cards: [],
    creados:[],
    details:{}
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
            console.log(state.creados,'||||state|||')
            console.log(action.payload, '|||||actionpayload||||')
            return{
                ...state,
                creados: [action.payload]
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
            let filtrado = action.payload.filter(e => {
                if(e.vegetarian === true) return e
            })
            return {
                ...state,
                Cards: filtrado
            }
            
        case 'LACTO_VEGETARIAN':
            //console.log(action.payload)
            let filtrado2 = action.payload.filter(e => {
                if(e.diets?.includes('lacto ovo vegetarian')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado2
            }

        case 'KETOGENIC':
            //console.log(action.payload)
            let filtrado3 = action.payload.filter(e => {
                if(e.diets?.includes('keto')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado3
            }

        case 'OVO_VEGETARIAN':
            //console.log(action.payload)
            let filtrado4 = action.payload.filter(e => {
                if(e.diets?.includes('lacto ovo vegetarian')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado4
            }

        case 'VEGAN':
            //console.log(action.payload)
            let filtrado5 = action.payload.filter(e => {
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
            let filtrado6 = action.payload.filter(e => {
                if(e.diets?.includes('pescatarian')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado6
            }
        
        case 'PALEO':
            //console.log(action.payload)
                let filtrado7 = action.payload.filter(e => {
                    if(e.diets?.includes('paleolithic')){
                        return e
                    }
                })
                return {
                    ...state,
                    Cards: filtrado7
                }

        case 'PRIMAL':
    //console.log(action.payload)
            let filtrado8 = action.payload.filter(e => {
                if(e.diets?.includes('primal')){
                    return e
                }
            })
            return {
                ...state,
                Cards: filtrado8
            }

        case 'WHOLE_30':
            //console.log(action.payload)
                    let filtrado9 = action.payload.filter(e => {
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
            //console.log(action.payload)
            let ordenados = state.Cards.sort((a,b) => (a.title > b.title)? 1: -1)
            console.log(ordenados, '|ordenados|')
            return {
                ...state,
                Cards: [...ordenados]
            }
        
        case 'ZA':
            let ordenados2 = state.Cards.sort((a,b) => (a.title > b.title)? -1: 1)
            return {
                ...state,
                Cards: [...ordenados2]
            }

        case 'PUNTAJE_ASC':
            let ordenados3 = state.Cards.sort((a,b) => (a.rating > b.rating)? 1: -1)
            return {
                ...state,
                Cards: [...ordenados3]
            }
        
        case 'PUNTAJE_DESC':
            let ordenados4 = state.Cards.sort((a,b) => (a.rating > b.rating)? -1: 1)
            return {
                ...state,
                Cards: [...ordenados4]
            }

            
                    // details //        
                           
        case 'DETAILS':
            return{
                ...state,
                details: action.payload
            }
        default: 
            return state
    }
}