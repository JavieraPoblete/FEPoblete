import { useState } from "react";

const App = () => {
  const [favoriteColor, setFavoriteColor] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const color = event.target.elements.color.value;
    setFavoriteColor(color);
  }; 
  
  return (

    <div>
  <p>Indícanos cuál es tu color favorito: </p>

    <form 
    onSubmit={ ev => {
      ev.preventDefault();
      const color = ev.target.elements.color.value;
      setFavoriteColor(color);
    }}
    >
      imput color: <input type="text" name="color" />
    
      <button type="submit">Buscar</button>
      </form>
      <p> Tu color favorito es: {favoriteColor}  </p> 
      </div>
  
  )
}

export default App;
 