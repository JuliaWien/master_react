import React from 'react';
import { GameStat } from '../MM_Logic/MasterMind';

export default class EndOfGame extends React.Component {
    render() {
        let gamestatus = this.props.gameStatus;
        let spielstatus = "Gut überlegen!";

        if (gamestatus === GameStat.LOST)
            spielstatus = "Leider verloren!!!";
        else if (gamestatus === GameStat.WON)
            spielstatus = "GEWONNEN!!!";

        return (
            <div>
                <h1 style={{ padding: 20 }}>{spielstatus}</h1>
                {gamestatus !== GameStat.PENDING &&
                    <button style={{ marginBottom: 80, padding: 20, borderRadius: 10 }} 
                    onClick={this.props.restartFn}>Restart Game!</button>}
            </div>
        );
    }
}