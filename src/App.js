import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squaresArray: [...Array(9).fill("")],
      playerTurn: ""
    }
  }

  handleChange = (index) => {
    let { squaresArray } = this.state
    playerTurn
    squaresArray[index] = "X"
    this.setState({ squaresArray: squaresArray })
  }

  render(){
    let { squaresArray } = this.state
    let squares = squaresArray.map((square, index) => {
      return (
        <>
        <Square 
        
        handleChange = { this.handleChange }
        square = { square }
        index = { index }
        key = { index }

        />
        </>
      )
    })
    return(
      <React.Fragment>
        <h1>Tic Tac Toe</h1>
        <div id="gameBoard">
          { squares }
        </div>
      </React.Fragment>
    )
  }
}
export default App
