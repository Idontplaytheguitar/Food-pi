import React from 'react';
import CardHome from './CardHome';


const Pages = ({cards, loading}) => {

console.log(cards, 'pages linea 7 (cards) ')

console.log(loading, 'pages linea 9 (loading)')

/* if(loading === true){
    return(
    <h1>por favor no renderices lo de abajo, dale</h1>)
} */
    
return (
        <div>
            {
                cards.map(element => {
                    return(
                    <CardHome key= {element.id}image={element.image} title={element.title} dietTypes={element.dietTypes}/>)
                })
            }
        </div>
    )

};

export default Pages