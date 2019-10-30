import React from 'react';
import ReactDOM from 'react-dom';

type SquareProps = {
  value: number;
}

type SquareState = {
  value: string | null;
}


/**
 * tic-tac-toeのマス目に対応するクラス
 * @class Square
 * @extends {React.Component<SquareProps, SquareState>}
 */
class Square extends React.Component<SquareProps, SquareState> {
  state: SquareState = {
    value: null
  };
  
  render() {
    return (
      <button 
        className="square" 
        onClick={() => this.setState({value: 'X'})}> {this.state.value} 
      </button>
    );
  }
}
