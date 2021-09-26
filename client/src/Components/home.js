import React, { useEffect, useState} from 'react';
import Pages from './Pages';
import axios from 'axios'
import { setCards} from '../Redux/actions';
import { store } from '../Redux/store';
import {connect} from 'react-redux'

const Home = ({cards}) => {
  
  const [loading, setLoading] = useState((false));

  useEffect((cards,loading)=> {
    
    const fetchCards = async ()=> {
      setLoading(true)
      const r = await axios.get('http://localhost:3001/recipes')
      //console.log(r)
      store.dispatch(setCards(r));
      setLoading(false);
    }
    
    fetchCards()
    console.log(loading)
    console.log(cards)
    
    //console.log(loading)
    //console.log(cards)
  }
  , [])

  return(
    <>
    <Pages cards={cards} loading={loading}/>
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(Home);