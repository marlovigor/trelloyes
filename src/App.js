import React, { Component } from 'react';
import List from './List'
import './App.css';


class App extends Component {
 static defaultProps={
  store: {
    lists: [],
    allCards: {},
   }
  }

  render(){
    const {store} = this.props
    return(
      <div>
        <h1>Trelloyes!</h1>
        {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}

      </div>
    )
  }


 
    
};

export default App;