import React from 'react';
import ButtonMath from '../components/ButtonMath';
import ButtonResult from '../components/ButtonResult';
import ButtonClearScreen from '../components/ButtonClearScreen';
import ButtonDot from '../components/ButtonDot';
import ButtonZeroNumber from '../components/number-buttons/ButtonZeroNumber';
import ButtonFromOneToThree from '../components/number-buttons/ButtonFromOneToThree';
import ButtonFromFourToSix from '../components/number-buttons/ButtonFromFourToSix';
import ButtonFromSevenToNine from '../components/number-buttons/ButtonFromSevenToNine';
import '../css/Layout.css';

/* content for buttons of calculator */
const char = ['+', '-', '*', '/'];
const buttonFromOneToThree = [1, 2, 3];
const buttonFromFourToSix = [4, 5, 6];
const buttonFromSevenToNine = [7, 8, 9];

/* layout */
const Layout = (props) => {

  /* generate buttons*/
  const buttonsChars = char.map((char, index) => (
    <ButtonMath 
      id={index.toString()}
      click={props.char}
      char={char} 
    />
  ))

  const buttonsFromOneToThree = buttonFromOneToThree.map((number) => (
    <ButtonFromOneToThree
      id={number.toString()}
      click={props.click}
      number={number} 
    />
  ))

  const buttonsFromFourToSix = buttonFromFourToSix.map((number) => (
    <ButtonFromFourToSix
      id={number.toString()}
      click={props.click}
      number={number} 
    />
  ))

  const buttonsFromSevenToNine = buttonFromSevenToNine.map((number) => (
    <ButtonFromSevenToNine
      id={number.toString()}
      click={props.click}
      number={number} 
    />
  ))

  return(
    <div className="wrapper">
      <div className="screen">{props.screen}</div>
      <div className="first-row">{buttonsChars}</div>
      <div className="row">{buttonsFromSevenToNine}</div> 
      <div className="row">{buttonsFromFourToSix}</div>
      <div className="row">{buttonsFromOneToThree}</div>
      <div className="row">
        <ButtonZeroNumber 
          click={props.click} 
        />
        <ButtonDot 
          click={props.click}
        />
        <ButtonClearScreen 
          click={props.clear} 
        />
      </div>
      <ButtonResult 
        click={props.result} 
      />    
    </div>
  );
}

export default Layout;
