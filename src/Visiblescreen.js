import { useState } from "react";
function Visiblescreen ({label, image, ingredients, caloriesAll, weigthAll, proteinAll, fatAll, carbonAll}){

    const [detaly, setDetaly] = useState(true);
    const total = (caloriesAll.toFixed() /weigthAll.toFixed()) * 100;
    const carbon = (carbonAll / weigthAll)*100;
    const fat = (fatAll / weigthAll)*100;
    const protein = (proteinAll / weigthAll)*100;

    return(
    <div  className='card' >
        <h2>{label} </h2>
        <img src={image} alt='pict'/>
<button onClick={()=>setDetaly(!detaly)} className="btn"> {detaly ? "More details" :"Less details"}</button>
   {detaly? ("") : (
    <div id='detali'> 
    <div className="detali" >
        <h3 className="header">Recipe and Ingredients</h3>
        <ul>
            {ingredients.map (ingredient =>(
            <li>{ingredient}</li>    
            ))}
        </ul>
        </div>
        <h4>Nutritional value per 100 gr</h4>
        <div className="table">
<p className="calory">Calories, kcal:     {total.toFixed()}</p>
<p className="fat">Proteins, g:    {protein.toFixed()}</p>
<p className="fat">Fat, g:    {fat.toFixed()} </p>
<p className="fat">Carbohydrates, g:     {carbon.toFixed()}</p>
    </div>
</div>
   )}
</div>
    )
}

export default Visiblescreen;

