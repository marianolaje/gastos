import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta.js'
import Formulario from './components/Formulario.js'
import Listado from './components/Listado.js'
import ControlPresupuesto from './components/ControlPresupuesto.js'

function App() {

  //definir el useState
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPreg, setMostrarPreg] = useState(true)
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

//useEffect que actualiza el Restante
  useEffect(()=>{
    if(crearGasto){
      //agrega nuevo presupuesto
      setGastos([
        ...gastos,
        gasto
      ])
      //resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);
      //resetear a false
      setCrearGasto(false)
    }
  }, [gasto, crearGasto, gastos, restante]);

  const reiniciar = () => {
  }

  return (
    <header>
      <h1>Gasto Semanal</h1>
      <div className="contenido-principal contenido">
        {mostrarPreg
          ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPreg={setMostrarPreg}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                />
                <form>
                  <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Reiniciar"
                    onClick={reiniciar()}
                  />
                </form>
              </div>
              <div className="one-half column">
                <Listado
                  gastos={gastos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>

          )
        }
      </div>
    </header>
  );
}

export default App;
