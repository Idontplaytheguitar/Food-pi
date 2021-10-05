import axios from 'axios'

export function SetCards(payload){
    return{
        type: 'SET_CARDS',
        payload
    }
};

export function SetLoading(payload){
  return{
    type: 'SET_LOADING',
    payload
  }
}


export function fetchCards() {
    return function (dispatch) {
      axios.get(`http://localhost:3001/recipes`)
        .then(r => r.data)
        //.then(l=> dispatch(SetLoading(true)))
        .then(d => dispatch({
          type: 'SET_CARDS',
          payload: d
        }))
        //.then(l => dispatch(SetLoading(false)))
        .catch(e => console.log(e));
    }
  }



  export function searchByTitle(payload){
    return function(dispatch){
      axios.get(`http://localhost:3001/recipes?nombre=${payload}`)
      .then(r => {
        console.log(r, '|||||||actions|||||||') 
        return r.data})
      .then(d => dispatch(
        {
          type:'SEARCH_BY_TITLE',
          payload: d
        }
      ))
      .catch(e => console.log(e, 'ERROR DE SEARCH TITLE'))
    }
  }

  export function guardarCreado(payload){
    console.log( 'entró al action', payload)
    return {
        type: "GUARDAR_CREADO",
        payload
    }
}
          //---------- FILTRADOS ------------\\
export function Vegetarian(payload){
  return{
    type: 'VEGETARIAN',
    payload
  }
}

export function LactoVegetarian(payload){
  return{
    type: 'LACTO_VEGETARIAN',
    payload
  }
}

export function Ketogenic(payload){
  return{
    type: 'KETOGENIC',
    payload
  }
}

export function OvoVegetarian(payload){
  return{
    type: 'OVO_VEGETARIAN',
    payload
  }
}

export function Vegan(payload){
  return{
    type: 'VEGAN',
    payload
  }
}

export function Pescetarian(payload){
  return{
    type: 'PESCETARIAN',
    payload
  }
}

export function Paleo(payload){
  return{
    type: 'PALEO',
    payload
  }
}

export function Primal(payload){
  return{
    type: 'PRIMAL',
    payload
  }
}

export function Whole30(payload){
  return{
    type: 'WHOLE_30',
    payload
  }
}
      //---------- ORDENAMIENTOS ------------\\

export function AZ(){
  return{
    type: 'AZ'
  }
}

export function ZA(){
  return{
    type: 'ZA'
  }
}

export function PuntajeAsc(){
  return{
    type: 'PUNTAJE_ASC'
  }
}

export function PuntajeDesc(payload){
  return{
    type: 'PUNTAJE_DESC'
  }
}


            //details//

export function det(id){
  return function(dispatch){
    axios.get(`http://localhost:3001/recipes/${id}`)
    .then(r => r.data)
    .then(d => dispatch({
      type: 'DETAILS',
      payload: d
    }))
    .catch(e => console.log(e))
  }
}