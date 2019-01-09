import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        value: "",
        sum: '',
        ans: 0
    };
  }



  clkMathEq = event => {
      let sh = event.target.innerText
    this.setState(prevState => {
        return{
            sum: prevState.sum + sh
        }
    })
    
    console.log(eval(1+3))
    event.preventDefault();
  }

  handleEquals = event => {
      let a = eval(this.state.sum)
      console.log(a)

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
        <h1>MM</h1>
        <form onSubmit={this.handleSubmit}>
          
            <input
              type="text"
              value={this.state.sum}
              onChange={this.handleChange}
            
            />
            <input
              type="text"
              value={this.state.ans}
              onChange={this.handleChange}
            
            />
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
            <button type="button"  onClick={this.clkMathEq}>+</button>
            <button type="button"  onClick={this.clkMathEq}>-</button>
            <button type="button"  onClick={this.clkMathEq}>*</button>
            <button type="button"  onClick={this.clkMathEq}>/</button>
            <button type="button"  onClick={this.clkEquals}>=</button>


          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    );
  }
}

export default Calculator;
