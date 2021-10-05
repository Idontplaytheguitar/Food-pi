import React, {useState} from 'react';
import CardHome from './CardHome';
import CreatedCard from './CreatedCard';
import styles from './styles/Pages.module.css'

const Pages = ({cards, creadas, buttonFix}) => {

//console.log(cards, 'pages linea 7 (cards) ')

//console.log(loading, 'pages linea 9 (loading)')

let showCreadas = false

const [limit, setLimit] = useState(0);

function disminuye(){
    setLimit(limit - 9);
}

function aumenta(){
    setLimit(limit + 9);
}

console.log(creadas, 'pages linea 24')

function mostrarCreadas(){
    if(showCreadas === true){
        showCreadas= false}
    else{
        showCreadas=true
    }
}

if(showCreadas === true){
    if(creadas.length === 1){
        return(
            <div>
                <CreatedCard key={creadas[0].id} id={creadas[0].id} summary={creadas[0].summary} title={creadas[0].title} healthy={creadas[0].healthy}/>)
            </div>
        )
    }
    else{
    return(
        <div className={styles.CardHome}>   
        {creadas.map(element => {
            return(
                <CreatedCard key= {element.id} id={element.id} summary={element.summary} title={element.title} healthy={element.healthy}/>)
            })}
    </div>
)}
}

else{

    return (
        
        <div className={styles.fixingStyles}>


            <div className={styles.buttons}>
                {buttonFix()}
                <button onClick={mostrarCreadas}>Mostrar recetas creadas</button>
                <button onClick={disminuye}>Anterior</button>
                <button onClick={aumenta}>Siguiente</button>
            </div>
        <div className={styles.Pages}>
            {
                cards.length === 0 ? <h1>No hay recetas con estas dietas</h1>:
                cards.slice(limit,limit +9).map(element => {
                    return(
                    <CardHome key= {element.id} id={element.id}image={element.image} title={element.title} diets={element.diets}/>)
                })
            }
        </div>
    </div>
    )

    }
}

export default Pages