import React, { Component } from 'react'
import Square from './components/Square'
import Button from './components/Button'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squaresArray: [...Array(9).fill("")],
      playerTurn: "",
      O: "O",
      X: "X",
      OMoves: [],
      XMoves: [],
      solutionSet: [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    }
  }

  checkSolution = (solutionSet) => {
    let { XMoves} = this.state
    for (let i = 0; i < solutionSet.length; i++) {
      console.log("solution")
      for (let j = 0; j < solutionSet[i].length; j++) {
        console.log("something")
        if(XMoves.includes(solutionSet[i][0]) && XMoves.includes(solutionSet[i][1]) && XMoves.includes(solutionSet[i][2])) {
          alert("you win")
        }
      }
    }
  }

  checkSolution2 = (solutionSet) => {
    let { OMoves} = this.state
    for (let i = 0; i < solutionSet.length; i++) {
      console.log("solution")
      for (let j = 0; j < solutionSet[i].length; j++) {
        console.log("something")
        if(OMoves.includes(solutionSet[i][0]) && OMoves.includes(solutionSet[i][1]) && OMoves.includes(solutionSet[i][2])) {
          alert("you win")
        }
      }
    }
  }

  handleChange = (index) => {
    let { squaresArray, playerTurn, O, X, OMoves, XMoves, solutionSet } = this.state
    if (squaresArray[index] === "") {
      if (playerTurn === "player 2") {
      squaresArray[index] = O
      OMoves.push(index)
      this.checkSolution2(solutionSet)
      this.setState({ squaresArray: squaresArray, playerTurn: "player 1" })} else
      {squaresArray[index] = X
      XMoves.push(index)
      this.checkSolution(solutionSet)
      console.log(XMoves);
      this.setState({ squaresArray: squaresArray, playerTurn: "player 2" })}
    }
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
        <Button />
      </React.Fragment>
    )
  }
}
export default App

// Solution set = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]







// Array of arrays
// For each Solution in Solution set:
// For each move in Solution:
// XMoves.includes(move)?