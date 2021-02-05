import React from 'react';

class ShowGuessesAndHints extends React.Component {


  hintToColor(hint) {
    if (hint === "fits")
      return 'white';
    else if (hint === "partially")
      return 'lightgray';
    return 'black';
  }

  render() {
    let playerMoves = this.props.playerMoves;

    return (
      <div>
        <table>
          <tbody>
            {playerMoves.map((item, index) => {
              return (
                <tr  key={index.toString()}>
                  <td><svg height="40" width="40"><circle cx="20" cy="20" r="18" stroke="black" strokeWidth="1" fill={item[0]} /></svg></td>
                  <td><svg height="40" width="40"><circle cx="20" cy="20" r="18" stroke="black" strokeWidth="1" fill={item[1]} /></svg></td>
                  <td><svg height="40" width="40"><circle cx="20" cy="20" r="18" stroke="black" strokeWidth="1" fill={item[2]} /></svg></td>
                  <td><svg height="40" width="40"><circle cx="20" cy="20" r="18" stroke="black" strokeWidth="1" fill={item[3]} /></svg></td>
                  <td>
                    <svg height="20" width="20"><circle cx="10" cy="10" r="9" stroke="black" strokeWidth="1" fill={this.hintToColor(item[4])} /></svg>
                    <svg height="20" width="20"><circle cx="10" cy="10" r="9" stroke="black" strokeWidth="1" fill={this.hintToColor(item[5])} /></svg>
                    <svg height="20" width="20"><circle cx="10" cy="10" r="9" stroke="black" strokeWidth="1" fill={this.hintToColor(item[6])} /></svg>
                    <svg height="20" width="20"><circle cx="10" cy="10" r="9" stroke="black" strokeWidth="1" fill={this.hintToColor(item[7])} /></svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowGuessesAndHints