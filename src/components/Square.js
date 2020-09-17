import React, { Component } from 'react'

class Square extends Component{
  render(){
    let { index, square } = this.props
    return(
      <React.Fragment>
        <div id="square" onClick={() => this.props.handleChange(index)}> 
        { square }
        </div>
      </React.Fragment>
    )
  }
}
export default Square
