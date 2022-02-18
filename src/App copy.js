import { useEffect, useState } from 'react';
import video from './Deep.mp4';
import Visiblescreen from './Visiblescreen'
import loupe from './loupe-32.jpg';
import './App.css';

function App() {

  const API_ID = "9a06e7d8" ;
  const API_KEY = "c0f0d0dbcadcc6be297cd71709b9b6f1"; 
  
  const [mySearch, setMySearch] = useState('');
  const [myRecipe, setMyResipe] = useState([]);
  const [wordSubmit, setWordSubmit] = useState('ice-cream');

  useEffect (async ()=> {
const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${API_ID}&app_key=${API_KEY}`);
const data = await responce.json();
console.log(data.hits)
setMyResipe(data.hits)
  }, [wordSubmit])

  const yourSearch = (e) =>{
    setMySearch(e.target.value);
  }

  const fimalSearch = (e) =>{
    e.preventDefault();
    setWordSubmit(mySearch)
  }

  return (
    <div className="App">
      <div className='container-video'>
        <video autoPlay muted loop>
        <source src={video} type='video/mp4'/>
        </video>
      </div>
        <h1>Рецепты на каждый день</h1>
    <div className="container">
        <form onSubmit={fimalSearch}>
          <input onChange={yourSearch} placeholder='Напиши блюдо или ингредиенты...' ></input>      
        </form>  
        <button><img src={loupe}  alt='icon' className='input'/></button>
    </div>
  <div className='foremap'>
      {myRecipe.map(item =>(
        <Visiblescreen
        label={item.recipe.label}
        image = {item.recipe.image}
        ingredients = {item.recipe.ingredientLines}
        caloriesAll = {item.recipe.calories}
        weigthAll = {item.recipe.totalWeight}
        proteinAll = {item.recipe.digest[2].total}
        carbonAll = {item.recipe.digest[1].total}
        fatAll = {item.recipe.digest[0].total}

        />
))}
  </div>
   </div>    
  );
}

export default App;


