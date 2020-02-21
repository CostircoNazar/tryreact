import React from 'react'


class State extends React.Component {
  constructor(porps){
    super(porps);
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return { count: prevState.count + 1}
    })
  }

  render() {
    return(
      <div>
        <h1 style={{fontSize:70, textAlign:'center' }}>{this.state.count}</h1>
        <button onClick={this.handleClick} style={{fontSize:50, display:'block', margin:'auto' }}>Change!</button>
      </div>
    )
  }
}

export default State
