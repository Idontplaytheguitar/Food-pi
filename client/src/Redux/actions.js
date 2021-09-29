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
      axios.get(`http://localhost:3001/recipes?nombre?${payload}`)
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
    return {
        type: "GUARDAR_CREADO",
        payload
    }
}
          //---------- FILTRADOS ------------\\
export function Vegetarian(){
  return{
    type: 'VEGETARIAN'
  }
}

export function LactoVegetarian(){
  return{
    type: 'LACTO_VEGETARIAN'
  }
}

export function Ketogenic(){
  return{
    type: 'KETOGENIC'
  }
}

export function OvoVegetarian(){
  return{
    type: 'OVO_VEGETARIAN'
  }
}

export function Vegan(){
  return{
    type: 'VEGAN'
  }
}

export function Pescetarian(){
  return{
    type: 'PESCETARIAN'
  }
}

export function Paleo(){
  return{
    type: 'PALEO'
  }
}

export function Primal(){
  return{
    type: 'PRIMAL'
  }
}

export function Whole30(){
  return{
    type: 'WHOLE_30'
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

export function PuntajeDesc(){
  return{
    type: 'PUNTAJE_DESC'
  }
}
