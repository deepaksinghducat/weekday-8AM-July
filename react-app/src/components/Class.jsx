import React, { Component } from 'react'

export default class Class extends Component {
  
  constructor() {
    super()
    
    this.state = {
        name: "Deepak"
    }

    console.log("constructor called");
  }

  componentDidMount(){
    console.log("componentDidMount");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  render() {
    return (
      <div>{this.state.name}</div>
    )
  }
}


// props and states
