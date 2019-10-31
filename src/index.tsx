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
 * @param state マス目の状態('X'がついているか否か)
 */
class Square extends React.Component<SquareProps, SquareState> {
  /**
   * Squareインスタンスを作成
   * @param props
   */
  constructor(public props: SquareProps) {
    super(props);
    this.state = {
      value: null,
    };
  }
  /**
   * マス目をクリックしたら'X'が表示されるような、button DOMノードを返却する関数
   * @returns button DOMノード
   */
  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

/**
 * tic-tac-toeの盤面に対応するクラス
 */
class Board extends React.Component {
  /**
   * Squareコンポーネントを返却する関数
   * @param i  マス目に表示する数字
   * @return Squareコンポーネント
   */
  private renderSquare(i: number) {
    return <Square value={i} />;
  }

  /**
   * 3×3 のSquareコンポーネントを返却する関数
   * @returns 3×3 のSquareコンポーネント
   */
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
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
          <Board />
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
