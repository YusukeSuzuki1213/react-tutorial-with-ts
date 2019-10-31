import React from 'react';
import ReactDOM from 'react-dom';

type SquareProps = {
  value: string;
  onClick: () => void;
}

type BoardState = {
  squares: string[];
  xIsNext: boolean;
}

/**
 * マス目をクリックしたら'X'が表示されるような、button DOMノードを返却する関数
 * @returns button DOMノード
 */
const Square = (props: SquareProps) => (
  <button
    className="square"
    onClick={ props.onClick }
  >
    {props.value}
  </button>
);

/**
 * tic-tac-toeの盤面に対応するクラス
 */
class Board extends React.Component<BoardState> {
  state: BoardState = {
    squares: new Array<string>(9).fill(''),
    xIsNext: true,
  }
  /**
   *
   */
  private handleClick = (i: number) => {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  /**
   * Squareコンポーネントを返却する関数
   * @param i  マス目に表示する数字
   * @return Squareコンポーネント
   */
  private renderSquare = (i: number) => (
    <Square
      value={ this.state.squares[i] }
      onClick={ () => this.handleClick(i) }
    />
  );
  /**
   * 3×3 のSquareコンポーネントを返却する関数
   * @returns 3×3 のSquareコンポーネント
   */
  render() {
    const winner = calculateWinner(this.state.squares);
    const status: string = winner ? ('Winner: ' + winner) : ('Next player: ' + (this.state.xIsNext ? 'X' : 'O'));
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
          <Board squares={[]} xIsNext={ false }/>
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && (squares[a] === squares[b]) && (squares[a] === squares[c])) {
      return squares[a];
    }
  }
  return null;
};


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
