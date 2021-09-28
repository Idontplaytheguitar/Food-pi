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
  {cards, fetchCards, creadas
    ,loading
  }
  ) => {
    //console.log(cards, 'linea 13, gracias por avisar consola')
    console.log(creadas, 'linea17 home')

    //const cards = useSelector(state => state.Cards)
    //const dispatch = useDispatch()
    useEffect(()=>{
      fetchCards()
    },[])
    
      return(
        <div className={styles.Home}>
        <Pages cards={cards} creadas={creadas} />
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    cards: state.Cards,
    loading: state.Loading,
    creadas: state.creados
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home