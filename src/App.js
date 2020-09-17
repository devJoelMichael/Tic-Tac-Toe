import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squaresArray: [...Array(9).fill("")],
      playerTurn: "",
      pointerEvents: "auto",
    }
  }

  handleChange = (index) => {
    let { squaresArray, playerTurn, pointerEvents } = this.state
    if (playerTurn === "player 2") {
    squaresArray[index] = "O"
    this.setState({ squaresArray: squaresArray, playerTurn: "player 1", pointerEvents: "none" })} else
    {squaresArray[index] = "X"
    this.setState({ squaresArray: squaresArray, playerTurn: "player 2", pointerEvents: "none" })}
  }

  render(){
    let { squaresArray, pointerEvents } = this.state
    let squares = squaresArray.map((square, index) => {
      return (
        <>
        <Square 
        
        handleChange = { this.handleChange }
        square = { square }
        index = { index }
        key = { index }
        pointerEvents = { pointerEvents }

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
