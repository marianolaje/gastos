import React, {Fragment, useState} from 'react'
import Error from './Error.js'
import PropTypes from 'prop-types'


const Pregunta = ({setPresupuesto, setRestante, setMostrarPreg}) => {

  //definir es useState
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  //funcion que lee el presupuesto
  const definirPresupuesto = e => {
    setCantidad(parseInt(e.target.value), 10)
  }

  const agregarPresupuesto = e => {
    e.preventDefault();

    //validar
    if(cantidad < 1 || isNaN( cantidad )){
      setError(true)
      return;
    }
    setError(false)
    setPresupuesto(cantidad)
    setRestante(cantidad)
    setMostrarPreg(false)
  }

  return(
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El presupuesto es incorrecto"/> :null}
      <form
        onSubmit={agregarPresupuesto}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  )
}
Pregunta.propTypes = {
  setMostrarPreg: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  setPresupuesto: PropTypes.func.isRequired
}

export default Pregunta
