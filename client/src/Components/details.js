import React, { useEffect } from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionsCreators from '../Redux/actions'



export function Details({match,details,det}) {
  console.log(details,'||||||||', det)

  useEffect(()=>{
    det(match.params.id)
  },[])

  if(details){
    console.log(details)
  return (
    <div>
        <img src={details.Image} alt='Hola'/>
        <h1>{details.title}</h1>
        <h3>Resumen:</h3>
        <p>{details.summary}</p>
        <h3>Tipos de plato</h3>
        <p>{details.dishTypes}</p>
        <h3>Tipos de dieta</h3>
        <p>{details.diets}</p>
        <h3>Nivel saludable:</h3>
        <p>{details.healthScore}</p>
        <h3>Puntaje</h3>
        <p>{details.rating}</p>
        <h3>Pasos:</h3>
        {
          details.steps[0]?.steps.map(e =>{
            return(

              <div>
              <h2>Paso{e.number}:</h2>
              <p>{e.step}</p>
            </div>
              )
          })
        }


    </div>
  )}
  else{
    return(
      <h1>Todavía está cargando</h1>
    )
  }
};
  function mapStateToProps(state){
    return{
      details: state.details
    }
  }

  function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionsCreators, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Details)