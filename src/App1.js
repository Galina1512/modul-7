import { useEffect, useState } from 'react';
import video from './Deep.mp4';
import Visiblescreen from './Visiblescreen'
import './App.css';

function App() {

  const API_ID = "9a06e7d8" ;
  const API_KEY = "c0f0d0dbcadcc6be297cd71709b9b6f1"; 
  
  const [mySearch, setMySearch] = useState('');
  const [myRecipe, setMyResipe] = useState([]);
  const [wordSubmit, setWordSubmit] = useState('');

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
          <label>Что собираетесь готовить?</label>
          <input type='radio' name='chois' onChange={yourSearch} /> <label>Breakfast</label>
          <input type='radio' name='chois' onChange={yourSearch} /> <label>Lunch/dinner</label>
          <input type='radio' name='chois' onChange={yourSearch} /> <label>Snack</label>
          <input type='radio' name='chois' onChange={yourSearch} /> <label>Teatime</label>

          {/* <input onChange={yourSearch} placeholder='Напиши блюдо или ингредиенты...' ></input>       */}
        </form>  
        {/* <button>ENTER</button> */}
    </div>
  <div>
      {myRecipe.map(item =>(
        <Visiblescreen
        label={item.recipe.label}
        mealType ={item.recipe.mealType}
        />
))}
  </div>
   </div>    
  );
}

export default App;


// const responce = await fetch (`https://api.edamam.com/search?q=${wordSubmit}&app_id=${API_ID}&app_key=${API_KEY}`);
