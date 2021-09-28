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

  export function searchById(payload){
    return{
      type:'SEARCH_BY_ID',
      payload
    }
  }

  export function searchByTitle(payload){
    return{
      type:'SEARCH_BY_TITLE',
      payload
    }
  }

  export function guardarCreado(payload){
    return {
        type: "GUARDAR_CREADO",
        payload
    }
}