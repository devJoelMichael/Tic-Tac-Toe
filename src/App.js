import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squaresArray: [...Array(9).fill("")]
    }
  }

  render(){
    let { squaresArray } = this.state
    let squares = squaresArray.map((square, index) => {
      return (
        <>
        <Square 

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
