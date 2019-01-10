import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        value: '',
        eq: '',
        ans: 0
    };
  }

  handleChange = (event) => {
    this.setState({eq: event.target.value})
    event.preventDefault();
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  clkMathEq = event => {
    let sh = event.target.innerText
    this.setState(prevState => {
        return{
            sum: prevState.eq + sh
        }
    })
  
    event.preventDefault();
  }

  clkEquals = event => {
      let a = eval(this.state.eq)
      console.log(a)

      this.setState({ans:a})
              
          
      event.preventDefault()
  }

  handleKeyUp = event => {
    let a = eval(this.state.eq)
    console.log(event.keyCode)

    this.setState(prevState => {
        return{
            ans:a
        }
    })
    event.preventDefault()
  }



  render() {
      
    return (
      <div className="container">
      <div className="inner-cont">
        <h1><i>React Math Master</i></h1>
        <form onSubmit={this.handleSubmit}>
            <div className="inputs">
                <input
                type="text"
                value={this.state.eq}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                autoFocus
                
                />
                <span className="equalsSign">=</span>
                <input
                type="text"
                value={this.state.ans}
                onChange={this.handleChange}
                
                
                />
            </div> 
            <div>
                <button type="button"  onClick={this.clkMathEq}>1</button>
                <button type="button"  onClick={this.clkMathEq}>2</button>
                <button type="button"  onClick={this.clkMathEq}>3</button>
                <button type="button"  onClick={this.clkMathEq}>4</button>
                <button type="button"  onClick={this.clkMathEq}>5</button>
                <button type="button"  onClick={this.clkMathEq}>6</button>
                <button type="button"  onClick={this.clkMathEq}>7</button>
                <button type="button"  onClick={this.clkMathEq}>8</button>
                <button type="button"  onClick={this.clkMathEq}>9</button>
                <button type="button"  onClick={this.clkMathEq}>0</button>
                
            </div>
            <div>
                <button type="button"  onClick={this.clkMathEq}>+</button>
                <button type="button"  onClick={this.clkMathEq}>-</button>
                <button type="button"  onClick={this.clkMathEq}>*</button>
                <button type="button"  onClick={this.clkMathEq}>/</button>
                <button type="button"  onClick={this.clkEquals}>=</button>
            </div>

          {/* <input type="submit" value="Submit" /> */}
        </form>
        </div>
      </div>
    );
  }
}

export default Calculator;
