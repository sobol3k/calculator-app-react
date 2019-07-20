import React, {Component} from 'react';
import ButtonMath from './components/ButtonMath';
import ButtonResult from './components/ButtonResult';
import ButtonClearScreen from './components/ButtonClearScreen';
import ButtonDot from './components/ButtonDot';
import ButtonZeroNumber from './components/number-buttons/ButtonZeroNumber';
import ButtonFromOneToThree from './components/number-buttons/ButtonFromOneToThree';
import ButtonFromFourToSix from './components/number-buttons/ButtonFromFourToSix';
import ButtonFromSevenToNine from './components/number-buttons/ButtonFromSevenToNine';
import './App.css';

/* content for buttons of calculator */
const char = ['+', '-', '*', '/'];
const buttonFromOneToThree = [1, 2, 3];
const buttonFromFourToSix = [4, 5, 6];
const buttonFromSevenToNine = [7, 8, 9];

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

  handleResultClick = () => {
    let resultBeforeConversion; // result as number type
    let resultAfterConversion; // result as string type (lastIndexOf method requaires)

    const {mathSign, screen} = this.state;

    if((screen.indexOf('+') !== -1) || (screen.indexOf('-') !== -1) || 
       (screen.indexOf('*') !== -1) || (screen.indexOf('/') !== -1)){
        const numbers = screen.split(this.state.mathSign);
        const firstNumber = parseFloat(numbers[0]);
        const secondNumber = parseFloat(numbers[1]);
    
        if(mathSign === '+')  resultBeforeConversion = firstNumber + secondNumber;
        else if(mathSign === '-')  resultBeforeConversion = firstNumber - secondNumber;
        else if(mathSign === '*') resultBeforeConversion = firstNumber * secondNumber;
        else resultBeforeConversion = firstNumber / secondNumber;
    
        resultAfterConversion = `${resultBeforeConversion}`; // converstion from type number to string
    
        if(resultAfterConversion !== 'NaN'){
          this.setState({
            screen: resultAfterConversion
          });
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
    const buttonsChars = char.map(char => (
      <ButtonMath 
        class="button"
        click={this.handleCharClick}
        char={char} 
      />
    ))

    const buttonsFromOneToThree = buttonFromOneToThree.map((number, index) => (
      <ButtonFromOneToThree
        id={number.toString()}
        class="button"
        click={this.handleNumberClick}
        number={number} 
      />
    ))

    const buttonsFromFourToSix = buttonFromFourToSix.map((number, index) => (
      <ButtonFromFourToSix
        id={number.toString()}
        class="button"
        click={this.handleNumberClick}
        number={number} 
      />
    ))

    const buttonsFromSevenToNine = buttonFromSevenToNine.map((number, index) => (
      <ButtonFromSevenToNine
        id={number.toString()}
        class="button"
        click={this.handleNumberClick}
        number={number} 
      />
    ))

    return(
      <div className="wrapper">
        <div className="screen">
          {this.state.screen}
        </div>
        <div className="first-row">
          {buttonsChars}
        </div>
        <div className="row">
          {buttonsFromSevenToNine}
        </div>
        <div className="row">
          {buttonsFromFourToSix}
        </div>
        <div className="row">
          {buttonsFromOneToThree}
        </div>
        <div className="row">
          <ButtonZeroNumber 
            click={this.handleNumberClick} 
          />
          <ButtonDot 
            click={this.handleNumberClick}
          />
          <ButtonClearScreen 
            click={this.handleClearClick} 
          />
        </div>
        <ButtonResult click={this.handleResultClick} />
      </div>
    )
  }
}

