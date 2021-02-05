import './App.css';
import React from 'react';
import PinForm from './Components/Pin'
import EndOfGame from './Components/EndOfGame'
import ShowGuessesAndHints from './Components/ShowGuessesAndHints'
import { PinColors, GameStat, generateCode, /*CheckCode,*/ game, CheckCodeScrumbleReady } from './MM_Logic/MasterMind'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.onNewGuess = this.onNewGuess.bind(this);
    this.startNewGame = this.startNewGame.bind(this);

    this.state = {
      secretCode: generateCode(),
      playerMoves: [],
      playerhints: [],
      currentGuess: '',
      guessInd: 0,
      gamestatus: GameStat.PENDING
    };
  }

  onNewGuess(currGuess) {
    //console.log(currGuess);
    // let hint = CheckCode(this.state.secretCode, currGuess);
    let hint = CheckCodeScrumbleReady(this.state.secretCode, currGuess);

    console.log("Secret: " + this.state.secretCode);
    let newPlayerMoves = [...this.state.playerMoves];
    let newGuessInd = this.state.guessInd;
    let newPlayerHints = [...this.state.playerhints];

    newPlayerHints.push(hint);
    newPlayerMoves.push(currGuess.concat(hint));
    newGuessInd++;

    this.setState({
      playerMoves: newPlayerMoves,
      currentGuess: currGuess,
      guessInd: newGuessInd,
      playerhints: newPlayerHints,
      gamestatus: game(newPlayerHints)
    });
  }


  startNewGame() {
    let newSecretCode = generateCode()

    this.setState({
      secretCode: newSecretCode,
      playerMoves: [],
      playerhints: [],
      currentGuess: '',
      guessInd: 0,
      gamestatus: GameStat.PENDING
    });
  }


  render() {

    return (
      <div className="spielbrett">
        <h1>Willkommen zu MasterMind</h1>
        <PinForm defaultColor={PinColors.RED} onGuess={this.onNewGuess} />

        <EndOfGame gameStatus={this.state.gamestatus} restartFn={this.startNewGame}></EndOfGame>
        <ShowGuessesAndHints playerMoves={this.state.playerMoves}></ShowGuessesAndHints>

      </div >
    );
  }
}

export default App;
