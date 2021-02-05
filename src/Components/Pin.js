import React from 'react';
import { PinColorCount, PinColorCSS, PinColors } from "../MM_Logic/MasterMind";

export class MyPin extends React.Component {
    constructor(props) {
        super(props);
        this.handleColorChange = this.handleColorChange.bind(this)
        this.state = {
            colIndex: 0
        }
    }

    handleColorChange() {
        const newColorIndex = (this.state.colIndex + 1) % PinColorCount
        this.setState({ colIndex: newColorIndex })
        this.props.onColorChange(
            this.props.pin,
            PinColors[Object.keys(PinColors)[newColorIndex]]
        );
    }

    getPinColor() {
        return PinColors[Object.keys(PinColors)[this.state.colIndex]];
    }

    render() {
        let btn_class = PinColorCSS[this.state.colIndex]

        return (
            <div>
                <button className={"myPin " + btn_class}
                    onClick={this.handleColorChange}>
                    {/* {this.state.colIndex} */}
                </button>
            </div>
        )
    }
}



export class PinForm extends React.Component {
    constructor(props) {
        super(props);
        this.colorChange = this.colorChange.bind(this)
        this.onPlay = this.onPlay.bind(this)
        this.state = {
            pinColors: [PinColors.RED, PinColors.RED, PinColors.RED, PinColors.RED]
        };
    }
    onPlay = () => {
        this.props.onGuess(this.state.pinColors);
    }

    colorChange = (pinNumber, color) => {
        let newPinColors = [...this.state.pinColors];
        // console.log("colorChange  Pin:" + pinNumber + "  color:" + color)
        newPinColors[pinNumber] = color;
        this.setState({ pinColors: newPinColors });
        // console.log("colorChange: " + newPinColors)
    }

    render() {
        return (
            <table >
                <thead>
                    <tr>
                        <th><MyPin pin='0' onColorChange={this.colorChange} /></th>
                        <th><MyPin pin='1' onColorChange={this.colorChange} /></th>
                        <th><MyPin pin='2' onColorChange={this.colorChange} /></th>
                        <th><MyPin pin='3' onColorChange={this.colorChange} /></th>

                        <th><button className="myGoButton" onClick={this.onPlay}>GO!</button></th>
                    </tr>
                </thead>
            </table>
        );
    }
}
export default PinForm;
