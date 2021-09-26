import React, { useEffect, useState} from 'react';
import Pages from './Pages';
// import axios from 'axios'
// import {useSelector} from 'react-redux'
import { SetCards } from '../Redux/actions';
import {connect} from 'react-redux'
import { store } from '../Redux/store';

const Home = (
  {ccards}
  ) => {


  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState((false));

  
  return(
    <>
     {/* <Pages cards={cards} loading={loading}/> */}
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    ccards: state.cards
  }
}

export default connect(mapStateToProps)(Home);
//export default Home