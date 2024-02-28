import React, { useState } from 'react'
import CardStyles from '../Styles/Card.module.css'
import Counter from './Counter'

const LibroFavorito = ({ libro, setCart }) => {
  const [theme, setTheme] = useState(false);
  const [counter,setCounter] = useState(true);

  const obj = {
    padding: 5,
    color: theme ? '#080708' : '#E6E8E6',
    backgroundColor: theme ? '#E6E8E6' : '#080708'
  }
  const addCart = () => {
    setCart((prevState) => 
    [
      ...prevState, 
      {
        ...libro,

        counter: counter 
        
      }
    ])
  }
  
  return (
    <div className={CardStyles.cardContainer}>
        <img src={book.img} alt="{book.title}" className={CardStyles.cardImg}/>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <h4 style={obj}>
          {book.price}
          <button style={obj} onClick={() => setTheme(!theme)}>📚</button>  
        </h4>
        <Counter counter={counter} setCounter={setCounter}/>
        <button className={CardStyles.cartBtn} onClick={addCart}>Añadir mi libro al carrito</button>
    </div>
  );
};

export default LibroFavorito;