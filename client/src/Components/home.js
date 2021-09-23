import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Home= () => {

  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState((false));
  const [currentPage, setCurrentPage] = useState(1)
  const [cardsPerPage, setCardsPerPage] = useState(10)

  useEffect(()=> {
    const fetchCards = async ()=> {
      setLoading(true);
      await axios.get('localhost:3002/recipes')
      .then(r => {console.log(r)
      setCards(r)
      setLoading(false)
    })
      .catch(e => console.log(e))
    }

    fetchCards();
  }
    , [])

console.log(cards)

  return (
    <div>
        <h1>Henry Food</h1>
    </div>
  )
};

export default Home;