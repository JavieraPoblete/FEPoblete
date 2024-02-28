import { useState } from "react"
import Card from './Card.component'


const BookForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [image, setImage] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateTitle(title) || !validateAuthor(author) || !validateGenre(genre) || !validateImage(image)) {
      return;
    }
    SetError('');
    renderCard();
    };

     const renderCard = () => {
        return (
          <Card 
            title={title} 
            author={author} 
            genre={genre} 
            image={image} 
          />
        );
      };
  
  const validateTitle = (title) => {
    if (title.trim().length < 3 || title.trim() !== title) {
      alert('El título debe tener al menos 3 caracteres y no puede comenzar con espacios en blanco.');
      return false;
    }
    return true;
  };

  const validateAuthor = (author) => {
    if (author.length < 6) {
      alert('El autor debe tener al menos 6 caracteres.');
      return false;
    }
    return true;
  };

  const validateGenre = (genre) => {
    if (genre.trim().length === 0) {
      alert('Por favor, ingresa un género.');
      return false;
    }
    return true;
  };

  const validateImage = (image) => {
    if (image.trim().length === 0) {
      alert('Por favor, ingresa una URL de imagen válida.');
      return false;
    }
    return true;
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>
      Título:
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </label>
    <label>
      Autor:
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
    </label>
    <label>
      Género:
      <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
    </label>
    <label>
      Imagen:
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
    </label>
    <button type="submit">Agregar libro</button>
  </form>
  {error && <p>{error}</p>} {'los datos que fueron ingresados son incorrectos.'}
  </div>
    );
};

export default BookForm;