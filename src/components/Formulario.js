import React, {useState} from 'react'
import Error from './Error.js'
import shortid from 'shortid'
import PropTypes from 'prop-types'


const Formulario = ({setGasto, setCrearGasto}) => {

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [errorTexto, setErrorTexto] = useState(false);
  const [errorNumero, setErrorNumero] = useState(false);
  const [errorAmbos, setErrorAmbos] = useState(false);


  const guardarNombre = e => {
    setNombre(
      [e.target.name]= e.target.value
    )
  }

  const agregarGasto = e => {
    e.preventDefault();
    //validar
    if((cantidad<1 || isNaN(cantidad)) && nombre.trim()===''){
      setErrorAmbos(true)
      setErrorNumero(false)
      setErrorTexto(false)
      return;
    } else if(cantidad<1 || isNaN(cantidad)){
      setErrorNumero(true)
      setErrorAmbos(false)
      setErrorTexto(false)
      return;
    } else if(nombre.trim()===''){
      setErrorTexto(true)
      setErrorAmbos(false)
      setErrorNumero(false)
      return;
    }
    setErrorAmbos(false)
    setErrorNumero(false)
    setErrorTexto(false)
    //construir el gastos
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }
    //pasar el gasto al componente principal
    setGasto(gasto)
    setCrearGasto(true)

    //resetear el form
    setNombre('')
    setCantidad('')
  }

  return(
    <form
      onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {errorAmbos ? <Error mensaje="Ambos campos son obligatorios"/> : null}
      {errorTexto ? <Error mensaje="Debe completar el nombre"/> : null}
      {errorNumero ? <Error mensaje="Debe ingresar un numero válido"/> : null}
      <label>Nombre gasto</label>
      <input
        type="text"
        className="u-full-width"
        placeholder="Ej. Transporte"
        value={nombre}
        onChange={guardarNombre}
      />
      <label>Cantidad gasto</label>
      <input
        type="number"
        className="u-full-width"
        placeholder="Ej. 300"
        value={cantidad}
        onChange={e => setCantidad(parseInt((e.target.value)))}
      />
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  )
}
Formulario.propTypes = {
  setGastos: PropTypes.func,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario
