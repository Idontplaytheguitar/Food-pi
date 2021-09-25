import React, { useEffect} from 'react';
import axios from 'axios'
import CardHome from './CardHome';
import { setCards, setLoading } from '../Redux/actions';
import { connect } from 'react-redux'
import { store } from '../Redux/store';

const Home = ({cards,loading}) => {

/*   const [cards, setCards] = useState([])
  const [loading, setLoading] = useState((false));
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage, setCardsPerPage] = useState(10)
 */

  useEffect((cards,loading)=> {
    const fetchCards = async ()=> {
      store.dispatch(setLoading('Si'))
      const r = await axios.get('http://localhost:3001/recipes')
      //console.log(r)
      store.dispatch(setCards(r.data));
      store.dispatch(setLoading('No'));
    }
    
    fetchCards()
    console.log(loading)
    console.log(cards)
    console.log(Home.prototype)
    
    //console.log(loading)
    //console.log(cards)
  }
  , [])
  
  return (
    <div>
        <CardHome loading={loading} cards={cards}></CardHome>
    </div>
  )
};

const mapStateToProps = (state) => {

  return {
    cards: state.cards,
    loading: state.loading
  }
}

export default connect(mapStateToProps)(Home);