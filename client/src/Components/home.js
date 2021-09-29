import React, { useEffect, useState} from 'react';
import Pages from './Pages';
// import axios from 'axios'
// import {useDispatch, useSelector} from 'react-redux'
import * as actionsCreators from '../Redux/actions';
// import axios from 'axios'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styles from './styles/home.module.css'

const Home = (
  {cards, 
    fetchCards, creadas, Vegan, Vegetarian, OvoVegetarian, LactoVegetarian, Whole30, Paleo, Primal, Pescetarian, Ketogenic,
    AZ, ZA, PuntajeAsc, PuntajeDesc
    //,loading
  }
  ) => {
    //console.log(cards, 'linea 13, gracias por avisar consola')
    //console.log(creadas, 'linea17 home')

    //const cards = useSelector(state => state.Cards)
    //const dispatch = useDispatch()
    useEffect(()=>{
    },[])

    function selectDiet(e){
      let value = e.target.value;
      if(value === "Vegetarian"){
        Vegetarian();
      }
      if(value === "Lacto-Vegetarian"){
        LactoVegetarian();
      }
      if(value === "Ketogenic"){
        Ketogenic();
      }
      if(value === "Ovo-Vegetarian"){
        OvoVegetarian();
      }
      if(value === "Vegan"){
        Vegan();
      }
      if(value === "Pescetarian"){
        Pescetarian();
      }
      if(value === "Paleo"){
        Paleo();
      }
      if(value === "Primal"){
        Primal();
      }
      if(value === "Whole30"){
        Whole30();
      }
    }

    function Orden(e){
      let value = e.target.value
      if(value === "Alfabético A-Z"){
        AZ()
      }
      if(value === "Alfabético A-Z"){
        ZA()
      }
      if(value === "Puntaje asc"){
        PuntajeAsc()
      } 
      if(value === "Puntaje desc"){
        PuntajeDesc()
      }
    }

      return(
        <div className={styles.Home}>
        <span>
        <label >Filtrar </label> <br />
        <select onChange={selectDiet} className="selects">
            <option value="Vegetarian">Vegetarian</option>
            <option value="Lacto-Vegetarian">Lacto-Vegetarian</option>
            <option value="Ketogenic">Ketogenic</option>
            <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Pescetarian">Pescetarian</option>
            <option value="Paleo">Paleo</option>
            <option value="Primal">Primal</option>
            <option value="Whole30">Whole30</option>
        </select>
    </span>
    <span>
        <label>Ordenamiento </label> <br />
        <select onChange={Orden} className="selects">
            <option value="Alfabético A-Z">Alfabético A-Z</option>
            <option value="Alfabético Z-A">Alfabético Z-A</option>
            <option value="Puntaje asc">Puntaje asc</option>
            <option value="Puntaje desc">Puntaje desc</option>
        </select> 
    </span>
    <span>
      <button onClick={fetchCards}>Reiniciar/Mostrar recetas</button>
    </span>
        <Pages cards={cards} creadas={creadas} />
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    cards: state.Cards,
    //loading: state.Loading,
    creadas: state.creados
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home