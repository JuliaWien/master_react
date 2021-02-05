import { fireEvent, render } from "@testing-library/react"
import { PinColors } from "../MM_Logic/MasterMind.js"
import { MyPin, PinForm } from "./Pin"



describe('Pin', () => {
    it('should change on click', () => {
        const spy = jest.fn();
        const { container } = render(<MyPin pin='0' onColorChange={spy} /> );

        fireEvent.click(container.querySelector('button'));
        expect(spy).toHaveBeenCalled();
    })
})


describe('PinForm', () => {
    it('should change on click', () => {
        const spy = jest.fn();
        const { container } = render(<PinForm defaultColor={PinColors.RED} onGuess={spy} /> );

        fireEvent.click(container.querySelector('.myGoButton'));
        expect(spy).toHaveBeenCalled();
    })
})
