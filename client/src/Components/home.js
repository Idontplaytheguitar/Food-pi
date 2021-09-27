import React, { useEffect, useState} from 'react';
import Pages from './Pages';
// import axios from 'axios'
// import {useDispatch, useSelector} from 'react-redux'
import * as actionsCreators from '../Redux/actions';
// import axios from 'axios'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

const Home = (
  {cards, fetchCards
    //,loading
  }
  ) => {
    console.log(cards, 'linea 13, gracias por avisar consola')

    //const cards = useSelector(state => state.Cards)
    //const dispatch = useDispatch()
    useEffect(()=>{
      fetchCards()
    },[])
    
      return(
        <>
        <Pages cards={cards} 
        //loading={loading}
        />
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    cards: state.Cards,
    loading: state.Loading
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
//export default Home