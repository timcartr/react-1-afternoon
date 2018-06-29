import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
            actors: [
                {
                    name: 'Jim Carrey',
                    movie: 'Dumb and Dumber',
                    age: 60

                },
                {
                    name: 'Brad Pitt',
                    age: 50
                },
                {
                    name: 'Leo Decaprio',
                    movie: 'Inception',
                    age: 45
                }
            ],
            userInput: '',
            filteredActors: []
        }

    }
    
    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterActors(prop) {
        var actors = this.state.actors;
        var filteredActors = [];
        
        for ( var i = 0; i < actors.length; i++ ) {
          if ( actors[i].hasOwnProperty(prop) ) {
            filteredActors.push(actors[i]);
          }
        }
    
        this.setState({ filteredActors: filteredActors });
      }
    
      render() {
        return (
          <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.actors, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterActors(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredActors, null, 10) } </span>
          </div>
        )
      }
    }
export default FilterObject;