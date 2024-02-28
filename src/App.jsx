
import './App.css'
import Alumno from './Components/Alumno'

function App() {
 

  return ( 
    <>
      <div className='contenedor'>
      <h1> Mi clase de front III</h1>
      <Alumno/>
      <Alumno/>
      <Alumno/>
      <Alumno/>
      <Alumno/>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
     
    </>
  )
}

export default App
