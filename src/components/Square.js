import React, { Component } from 'react'

class Square extends Component{
  constructor(props) {
    super(props)
    this.state= {
      pointerEvents: "auto"
    }
  }

  render(){
    let { index, square, pointerEvents } = this.props
    return(
      <React.Fragment>
        <div id="square" onClick={() => this.props.handleChange(index)} style={{pointerEvents: pointerEvents}}> 
        { square }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
