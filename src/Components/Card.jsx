import React from 'react'
import './card.css'

{ console.log("hi") }

function Card({result}) {

    return (
        <div>
            <div className="cards-container">
                {
                result.map((ele) => {
                    console.log(ele.recipe)
                    return <div className='cards'>
                        <div className="cardheading">
                            <h1>{ele.recipe.label}</h1>

                        </div>
                        <div className="orderlist">
                            <ol>
                                {ele.recipe.ingredientLines.map((ingredient, index) => {
                                    if (index <= 4) {
                                        return <li>{ingredient}</li>
                                    }

                                })}
                            </ol>

                        </div>


                        <p>Calories :{ele.recipe.calories.toFixed(2)}</p>

                        <img src={ele.recipe.image} alt={ele.recipe.label} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Card