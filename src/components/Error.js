import React from 'react'
import PropTypes from 'prop-types'


const Error = () => {
  return(
    <p className="alert alert-danger error">Ingrese un numero entre 0 y 6</p>
  )
}
Error.propTypes = {
  mensaje: PropTypes.string.isRequired
}

export default Error
