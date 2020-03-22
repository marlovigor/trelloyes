import React from 'react'
import Card from './Card.js'

function List(props) {

   return(
       <div>
           <h2>{props.header}</h2>
           
           {props.cards.map((card)=>
           <Card 
           key={card.id}
           title={card.title}
           content={card.content}
           />)}
           {/* just a button below */}
           <button
          type='button'
          className='List-add-button'
        ></button>
       </div>
   )
}

export default List