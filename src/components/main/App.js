import React, {Component} from 'react';
import Layout from '../../layout/Layout';

export default class App extends Component{
  state = {
    screen: '',
    mathSign: '',
  }

  handleNumberClick = (event) => {
    const number = event.target.textContent;
    const {screen} = this.state;

    if(screen[screen.length-1] === '.'){
      if(number === '1' || number === '2' || number === '3' || 
         number === '4' || number === '5' || number === '6' || 
         number === '7' || number === '8' || number === '9'){
        this.setState(prevState => ({
          screen: prevState.screen + number
        }));
      }
    }
    else if(screen.length === 0 && number === '.'){
      this.setState(prevState => ({
        screen: prevState.screen + ''
      }));
    }
    else if((screen[screen.length-1] === '+' && number === '.') || 
            (screen[screen.length-1] === '-' && number === '.') || 
            (screen[screen.length-1] === '*' && number === '.') || 
            (screen[screen.length-1] === '/' && number === '.')){
      this.setState(prevState => ({
        screen: prevState.screen + ''
      }));
    }
    else{
      this.setState(prevState => ({
        screen: prevState.screen + number
      }));
    }
  }

  handleCharClick = (event) => {
    const mathSign = event.target.textContent;
    const {screen} = this.state;

    if(screen.length === 0 && mathSign === '-'){
      this.setState(prevState => ({
        screen: prevState.screen + mathSign
      }));
    }
    else if((screen[screen.length-1] === '+') || (screen[screen.length-1] === '-') || 
            (screen[screen.length-1] === '*') || (screen[screen.length-1] === '/')){
      this.setState(prevState => ({
        screen: prevState.screen + ''
      }));
    }
    else if(screen.lastIndexOf('.') === screen.length-1){
      this.setState(prevState => ({
        screen: prevState.screen + ''
      }));
    }
    else if((screen[screen.length - screen.length] === '-' && screen.lastIndexOf('+') > 2) || 
            (screen[screen.length - screen.length] === '-' && screen.lastIndexOf('-') > 2) || 
            (screen[screen.length - screen.length] === '-' && screen.lastIndexOf('*') > 2) || 
            (screen[screen.length - screen.length] === '-' && screen.lastIndexOf('/') > 2)){
      this.setState(prevState => ({
        screen: prevState.screen + ''
      }));
    }
    else if((screen[screen.length - screen.length] !== '-' && (screen.lastIndexOf('+') > -1) === true) ||
            (screen[screen.length - screen.length] !== '-' && (screen.lastIndexOf('-') > -1) === true) ||
            (screen[screen.length - screen.length] !== '-' && (screen.lastIndexOf('*') > -1) === true) ||
            (screen[screen.length - screen.length] !== '-' && (screen.lastIndexOf('/') > -1) === true)){
      this.setState(prevState => ({
          screen: prevState.screen + ''
      }));
    } 
    else{
      this.setState(prevState => ({
        mathSign: mathSign,
        screen: prevState.screen + mathSign
      }));
    }
  }

  calculate = (action, a, b) => {
    let result;
    switch(action){
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      default:
        this.setState({
          screen: 'wystąpił nieoczekiwany błąd - spróbuj ponownie!',
      });
    }
    return result;
  }

  handleResultClick = () => {
    const {mathSign, screen} = this.state;
    let result; // result as type number
    let resultToString; // result as type string (lastIndexOf method requires)
    
    if((screen.indexOf('+') !== -1) || (screen.indexOf('-') !== -1) || 
       (screen.indexOf('*') !== -1) || (screen.indexOf('/') !== -1)){
      if(screen[0] === '-'){
        const fixedArray = screen.slice(1, screen.length); // delete a minus sign
        const number = fixedArray.split(mathSign);
        const firstNumber = parseFloat('-' + number[0]);
        const secondNumber = parseFloat(number[1]);
        result = this.calculate(mathSign, firstNumber, secondNumber);
        resultToString = `${result}`;
        if(resultToString !== 'NaN'){
          this.setState({
            screen: resultToString
          });
        }
      }
      else{
        const number = screen.split(mathSign);
        const firstNumber = parseFloat(number[0]);
        const secondNumber = parseFloat(number[1]);
        result = this.calculate(mathSign, firstNumber, secondNumber);
        resultToString = `${result}`;
        if(resultToString !== 'NaN'){
          this.setState({
            screen: resultToString
          });
        }
      }
    }
  }

  handleClearClick = () => {
    this.setState({
      screen: '',
      mathSign: ''
    });
  }

  render(){
    return(
      <Layout 
        click={this.handleNumberClick} 
        result={this.handleResultClick}
        char={this.handleCharClick}
        clear={this.handleClearClick}  
        screen={this.state.screen}
      />
    );
  }
}

