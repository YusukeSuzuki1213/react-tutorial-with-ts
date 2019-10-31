import React from 'react';
import ReactDOM from 'react-dom';
import { string } from 'prop-types';

type SquareProps = {
  value: string | null;
  onClick: () => void;
}

type BoardState = {
  squares: string[];
}

/**
 * tic-tac-toeのマス目に対応するクラス
 */
class Square extends React.Component<SquareProps> {
  /**
   * マス目をクリックしたら'X'が表示されるような、button DOMノードを返却する関数
   * @returns button DOMノード
   */
  render() {
    return (
      <button
        className="square"
        onClick={ () => this.props.onClick() }
      >
        {this.props.value}
      </button>
    );
  }
}

/**
 * tic-tac-toeの盤面に対応するクラス
 */
class Board extends React.Component<BoardState> {
  state: BoardState = {
    squares: new Array<string>(9).fill(''),
  }
  /**
   *
   */
  private handleClick = (i: number) => {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }
  /**
   * Squareコンポーネントを返却する関数
   * @param i  マス目に表示する数字
   * @return Squareコンポーネント
   */
  private renderSquare = (i: number) => {
    return (
      <Square
        value={ this.state.squares[i] }
        onClick={ () => this.handleClick(i) }
      />
    );
  }
  /**
   * 3×3 のSquareコンポーネントを返却する関数
   * @returns 3×3 のSquareコンポーネント
   */
  render() {
    const status: string = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          { this.renderSquare(0) }
          { this.renderSquare(1) }
          { this.renderSquare(2) }
        </div>
        <div className="board-row">
          { this.renderSquare(3) }
          { this.renderSquare(4) }
          { this.renderSquare(5) }
        </div>
        <div className="board-row">
          { this.renderSquare(6) }
          { this.renderSquare(7) }
          { this.renderSquare(8) }
        </div>
      </div>
    );
  }
}

/**
 *
 *
 */
class Game extends React.Component {
  /**
   *
   *
   */
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={[]}/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
