import React, {useState} from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { guardarCreado } from '../Redux/actions';

export function CreateRecipe({guardarCreado}) {
    var [Titulo, setTitulo] = useState('')
    var [Resumen, setResumen] = useState('')
    var [Puntaje, setPuntaje] = useState('')
    var [Saludable, setSaludable] = useState(Boolean)
    var [pasos, setPasos] = useState([])

    var handleTituloChange = function(e){
        setTitulo(e.target.value)
    }
    var handleResumenChange = function(e){
        setResumen(e.target.value)
    }
    var handlePuntajeChange = function(e){
        setPuntaje(e.target.value)
    }
    var handleSaludableChange = function(e){
        setSaludable(e.target.value)
    }
    var handlePasosChange = function(e){
       setPasos(e.target.value)
    }
    let done = false
    var handleSubmit = async function(e,Titulo, Resumen,Puntaje,Saludable,Pasos){
        e.preventDefault()
        Pasos = pasos.split('|')
        let datos ={
            title:Titulo,
            summary:Resumen,
            rating:Puntaje,
            healthy:Saludable,
            steps:Pasos
        }
        await axios.post('http://localhost:3001/recipe',datos)
        let aGuardar = await axios.get(`http://localhost:3001/recipes?nombre=${Titulo}`)
         console.log(aGuardar.data[0])
        guardarCreado(aGuardar.data[0])
        done = true
        // acá renderizo ?
    }
    console.log(done)
    if(done){
        return(
            <div>
                <h1>Listo!</h1>
            </div>
        )
    }

    
    else{
        
        return (
            <div>
        <form onSubmit={e => handleSubmit(e,Titulo,Resumen,Puntaje,Saludable,pasos)}>
            <div>
                <label>Título</label>
                <input type='text' onChange={e => handleTituloChange(e)} value={Titulo}></input>
            </div>
            <div>
                <label>Resumen</label>
                <input type='text' onChange={e => handleResumenChange(e)} value={Resumen}></input>
            </div>
            <div>
                <label>Puntaje</label>
                <input type='number' onChange={e => handlePuntajeChange(e)} value={Puntaje}></input>
            </div>
            <div>
                <label>Saludable</label>
                <select onChange={e => handleSaludableChange(e)} value={Saludable}>
                    <option value={true}>Si</option>
                    <option value={false}>No</option>
                </select>
            </div>
            <div>
                <label>Pasos, separar con un '|' sin comillas </label>
                <input type='text' onChange={e => handlePasosChange(e)} value={pasos}></input>
            </div>
            <div>
                <button type='submit'>Enviar</button>
            </div>
        </form>
    </div>
  )
}
  
};


export default connect(null, {guardarCreado})(CreateRecipe)