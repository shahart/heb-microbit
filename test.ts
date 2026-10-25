// Regression checks for the public display API. Single-character strings are
// rendered without scrolling, so the simulator display can be inspected.
function assertDisplay(expected: number[][], label: string): void {
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            control.assert(led.point(x, y) == (expected[y][x] == 1),
                label + " at (" + x + "," + y + ")")
        }
    }
}

hebrew.showString("א")
assertDisplay([
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 0],
    [1, 0, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1]
], "alef glyph")

// A following blank glyph must turn off every LED from the previous glyph.
hebrew.showString(" ")
assertDisplay([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
], "space clears display")

hebrew.showString("A")
assertDisplay([
    [0, 1, 1, 0, 0],
    [1, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0]
], "Latin A glyph")


// basic.forever(() => {
//   basic.showString('.AB cd')
//   hebrew.showString('Aa אבגדהוזחטיכךלמםנןסעפףצץקרשת. 12')
// })
