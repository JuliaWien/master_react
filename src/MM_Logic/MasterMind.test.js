
const { pickColor, generateCode, CheckCode, CheckCodeScrumble, game, PinColors, GuessStat, GameStat } = require('./MasterMind')


describe('pickColorTesting', () => {
    it('it should choose PinColors.RED on 0.16', () => {
        expect(pickColor(() => 0.16)).toBe(PinColors.RED)
    })
    it('it should choose PinColors.CYAN on 0.56', () => {
        expect(pickColor(() => 0.56)).toBe(PinColors.CYAN)
    })
    it('it should choose PinColors.MAGENTA on 0.16', () => {
        expect(pickColor(() => 0.96)).toBe(PinColors.MAGENTA)
    })
    
    it('it should choose PinColors.RED on 0.16', () => {
        expect(pickColor(() => 1.16)).toBe(PinColors.RED)
    })
    it('it should choose PinColors.CYAN on 0.56', () => {
        expect(pickColor(() => 10.56)).toBe(PinColors.CYAN)
    })
    it('it should choose PinColors.MAGENTA on 0.16', () => {
        expect(pickColor(() => 20.96)).toBe(PinColors.MAGENTA)
    })
})



function doubleColorTest(f) {
    for (let i = 0; i < f.length - 1; i++) {
        for (let j = i + 1; j < f.length; j++) {
            if (f[i] == f[j])
                return true;
        }
    }
    return false;
}

describe('generateCodeTesting', () => {
    for (let i = 0; i < 10; i++) {
        it("array mustn't contain twin PinColors", () => {
            expect(doubleColorTest(generateCode())).toBe(false)
        })
    }
})

describe('checkCodeTesting', () => {
    let arr0 = [PinColors.RED, PinColors.BLUE, PinColors.GREEN, PinColors.RED];
    it("array with double PinColors detected", () => {
        expect(doubleColorTest(arr0)).toBe(true)
    })

    let arr1 = [PinColors.RED, PinColors.BLUE, PinColors.GREEN, PinColors.MAGENTA];
    let arr2 = [PinColors.RED, PinColors.GREEN, PinColors.BLUE, PinColors.MAGENTA];
    let expected = [GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.PARTIALLY, GuessStat.FITS];
    it("checkCode should return expected result 1", () => {
        expect(CheckCode(arr1, arr2)).toStrictEqual(expected)
    })
    it("checkCode should return expected result 2", () => {
        expect(CheckCode(arr2, arr1)).toStrictEqual(expected)
    })

    let arr3 = [PinColors.BLUE, PinColors.YELLOW, PinColors.CYAN, PinColors.MAGENTA];
    let expected2 = [GuessStat.PARTIALLY, GuessStat.WRONG, GuessStat.WRONG, GuessStat.FITS];
    it("checkCode should return expected result 3", () => {
        expect(CheckCode(arr1, arr3)).toStrictEqual(expected2)
    })
})


describe('checkCodeScrumbleTesting', () => {
    let arr1 = [PinColors.RED, PinColors.BLUE, PinColors.GREEN, PinColors.MAGENTA];
    let arr2 = [PinColors.RED, PinColors.GREEN, PinColors.BLUE, PinColors.MAGENTA];
    let expected = [GuessStat.PARTIALLY, GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY];
    it("CheckCodeScrumble should return expected result 1", () => {
        expect(CheckCodeScrumble(arr1, arr2, () => 0.4)).toStrictEqual(expected)
    })
    it("CheckCodeScrumble should return expected result 2", () => {
        expect(CheckCodeScrumble(arr2, arr1, () => 0.4)).toStrictEqual(expected)
    })
    
    let arr3 = [PinColors.BLUE, PinColors.YELLOW, PinColors.CYAN, PinColors.MAGENTA];
    let expected2 = [GuessStat.WRONG, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG];
    it("CheckCodeScrumble should return expected result 3", () => {
        expect(CheckCodeScrumble(arr1, arr3, () => 0.4)).toStrictEqual(expected2)
    })
})

describe('checkCodeScrumbleTesting', () => {
    let guesses1 = [
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.WRONG, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.WRONG, GuessStat.PARTIALLY, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.FITS, GuessStat.FITS]
    ];
    it("game() on 13 tries should return LOST", () => {
        expect(game(guesses1)).toBe(GameStat.LOST)
    })

    let guesses2 = [
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.WRONG, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.WRONG, GuessStat.PARTIALLY, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.FITS, GuessStat.FITS]
    ];
    it("game() within 12 tries and allFITS should return WON", () => {
        expect(game(guesses2)).toBe(GameStat.WON)
    })

    let guesses3 = [
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.WRONG, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.WRONG, GuessStat.PARTIALLY, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.PARTIALLY, GuessStat.WRONG],
        [GuessStat.FITS, GuessStat.FITS, GuessStat.FITS, GuessStat.WRONG]
    ];
    it("game() within 12 tries and NO allFITS should return PENDING", () => {
        expect(game(guesses3)).toBe(GameStat.PENDING)
    })
})
// describe('berechne', () => {
//     it('should call clear', () => {
//         const input = jasmine.createSpy('input').and.returnValue('3-680-08783-7')
//         const valid = jasmine.createSpy('valid')
//         const invalid = jasmine.createSpy('invalid')
//         const clear = jasmine.createSpy('clear')

//         berechne(input, valid, invalid, clear) ()
//         expect(clear).toHaveBeenCalled();
//     })
// })
