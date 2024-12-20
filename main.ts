//% color=#0f9c11 icon="\u05d0"
namespace hebrew {
    const hs = [
        [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/"],
        ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "<", "=", ">", "?"],
        ["@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
        ["P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "\\", "]", "^", "_"],
        ["`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"],
        ["p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", ""],
        ["¥", "｡", "｢", "｣", "､", "א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "ך"],
        ["כ", "ל", "ם", "מ", "ן", "נ", "ס", "ע", "ף", "פ", "ץ", "צ", "ק", "ר", "ש", "ת"]
    ]
    const arr = [
        [
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [1, 1, 1, 1, 1], [0, 1, 0, 1, 0]],
            [[0, 1, 1, 1, 0], [1, 1, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [0, 1, 0, 1, 0]],
            [[1, 1, 0, 0, 1], [1, 0, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 0, 1], [1, 0, 0, 1, 1]],
            [[0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [0, 0, 0, 0, 1]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [1, 0, 0, 0, 1]],
            [[1, 0, 0, 0, 1], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [1, 0, 1, 0, 0], [0, 1, 0, 0, 0], [1, 0, 1, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 0, 0], [1, 0, 0, 0, 0]],
        ],
        [
            [[0, 1, 1, 1, 0], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 1, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[1, 0, 0, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [0, 1, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[1, 0, 0, 1, 0], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 1, 0, 1, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 1, 1, 0], [0, 1, 0, 1, 0], [1, 0, 0, 1, 0], [1, 1, 1, 1, 1], [0, 0, 0, 1, 0]],
            [[1, 1, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 1, 0]],
            [[0, 0, 0, 1, 0], [0, 0, 1, 0, 1], [0, 1, 1, 0, 1], [1, 0, 1, 0, 1], [0, 0, 0, 1, 0]],
            [[1, 0, 0, 0, 1], [1, 0, 0, 1, 0], [1, 0, 1, 0, 0], [1, 1, 0, 0, 0], [1, 0, 0, 0, 0]],
            [[0, 1, 0, 1, 0], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0]],
            [[0, 1, 0, 0, 0], [1, 0, 1, 0, 1], [1, 0, 1, 1, 0], [1, 0, 1, 0, 0], [0, 1, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [1, 0, 0, 0, 1], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 1, 0, 0, 0], [1, 0, 0, 0, 0], [1, 0, 1, 0, 1], [1, 0, 1, 0, 0], [0, 1, 0, 0, 0]]
        ],
        [
            [[0, 1, 1, 1, 0], [1, 0, 1, 0, 1], [1, 1, 0, 1, 1], [1, 1, 1, 1, 1], [0, 1, 1, 1, 0]],
            [[0, 1, 1, 1, 1], [1, 0, 1, 0, 0], [1, 0, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0], [0, 0, 0, 0, 0]],
            [[0, 1, 1, 1, 0], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [1, 0, 1, 0, 0], [1, 0, 1, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 1, 1, 1, 0], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [0, 0, 1, 1, 0]],
            [[1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]],
            [[1, 0, 0, 0, 1], [1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[1, 0, 0, 1, 0], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 0, 0, 0], [1, 1, 1, 1, 1]],
            [[1, 1, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [1, 1, 1, 1, 1]],
            [[0, 1, 1, 1, 0], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [0, 1, 1, 1, 0], [0, 0, 0, 0, 0]]
        ],
        [
            [[1, 1, 1, 1, 1], [1, 0, 1, 0, 0], [1, 0, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 1, 1, 0, 0], [1, 0, 0, 1, 0], [1, 0, 0, 1, 1], [0, 1, 1, 0, 1], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [1, 0, 1, 0, 0], [1, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 0, 1]],
            [[0, 1, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 1, 0], [0, 0, 0, 0, 0]],
            [[1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 0], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [1, 1, 1, 0, 0]],
            [[1, 1, 1, 1, 1], [0, 0, 0, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [1, 1, 1, 1, 1]],
            [[1, 1, 0, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [1, 1, 0, 1, 1], [0, 0, 0, 0, 0]],
            [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 0, 0, 0]],
            [[1, 0, 0, 1, 1], [1, 0, 1, 0, 1], [1, 1, 0, 0, 1], [1, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 0, 0, 1]],
            [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]],
            [[1, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 1, 0, 0, 0], [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]]
        ],
        [
            [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 1, 1, 0], [0, 1, 0, 0, 1], [0, 1, 0, 0, 1], [0, 1, 1, 1, 1], [0, 0, 0, 0, 1]],
            [[1, 1, 1, 1, 1], [0, 0, 1, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 1, 1, 0], [0, 1, 0, 0, 1], [0, 1, 0, 0, 1], [0, 1, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 1, 0], [0, 0, 1, 0, 1], [0, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]],
            [[0, 1, 1, 1, 0], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [0, 1, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[0, 0, 1, 0, 0], [0, 1, 1, 1, 1], [1, 0, 1, 0, 0], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 1, 0, 0, 0], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 1, 1, 1, 0], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [1, 0, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [1, 0, 1, 1, 0], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [1, 1, 1, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[0, 1, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 1, 1, 1]],
            [[0, 1, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 1, 1, 1]],
            [[0, 0, 1, 1, 0], [0, 1, 0, 0, 1], [0, 1, 0, 0, 1], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]
        ],
        [
            [[0, 1, 1, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0]],
            [[0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 1], [0, 0, 1, 0, 1], [0, 1, 0, 1, 0], [0, 1, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [1, 1, 1, 1, 0], [0, 0, 1, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 0, 1]],
            [[0, 1, 1, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 1, 1, 1, 1], [0, 0, 0, 0, 1]],
            [[0, 1, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [0, 1, 1, 0, 0]],
            [[0, 1, 1, 1, 1], [0, 0, 0, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1], [0, 1, 1, 1, 1]],
            [[0, 1, 0, 0, 1], [0, 0, 1, 1, 0], [0, 0, 1, 1, 0], [0, 1, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[0, 1, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [0, 0, 1, 0, 0], [0, 1, 0, 0, 0]],
            [[0, 1, 0, 0, 1], [0, 1, 0, 1, 1], [0, 1, 1, 0, 1], [0, 1, 0, 0, 1], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [1, 1, 1, 1, 1], [1, 0, 0, 0, 1]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[1, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 1, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 1, 0, 0]],
            []
        ],
        [
            [[0, 0, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 1, 1, 1], [1, 0, 1, 1, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 1, 0], [0, 0, 1, 0, 1], [0, 0, 0, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0]],
            [[0, 0, 0, 0, 1], [0, 0, 0, 0, 1], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[0, 0, 0, 1, 0], [0, 0, 0, 0, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
            [[1, 1, 1, 1, 1], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]], //א
            [[1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 1]], //ב
            [[0, 0, 0, 0, 0], [1, 0, 0, 0, 1], [1, 0, 0, 1, 0], [1, 0, 1, 0, 0], [1, 1, 1, 1, 1]], //ג
            [[1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 0, 0, 0]], //ד
            [[1, 0, 1, 1, 1], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]], //ה
            [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], //ו
            [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 0]], //ז
            [[1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1]], //ח
            [[1, 1, 1, 1, 1], [0, 0, 0, 0, 1], [0, 0, 1, 0, 1], [0, 1, 0, 0, 1], [1, 1, 1, 1, 1]], //ט
            [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], //י
            [[1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], //ך
        ],
        [
            [[1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]], //כ
            [[0, 0, 0, 0, 0], [1, 1, 1, 0, 1], [0, 0, 1, 0, 1], [0, 0, 1, 1, 1], [0, 0, 0, 0, 0]], //ל
            [[1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]], //ם
            [[1, 0, 1, 0, 1], [0, 1, 0, 0, 1], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]], //מ
            [[0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], //ן
            [[0, 0, 0, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], //נ
            [[1, 0, 0, 0, 0], [1, 1, 1, 1, 0], [1, 0, 0, 0, 1], [1, 0, 0, 0, 1], [0, 1, 1, 1, 0]], //ס
            [[1, 0, 0, 0, 1], [0, 1, 0, 0, 1], [0, 0, 1, 0, 1], [0, 0, 0, 1, 1], [1, 1, 1, 1, 1]], //ע
            [[0, 0, 0, 0, 0], [1, 1, 1, 0, 0], [1, 0, 1, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1]], //ף
            [[0, 0, 0, 0, 0], [1, 1, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]], //פ
            [[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]], //ץ
            [[1, 0, 0, 0, 1], [0, 1, 0, 0, 1], [0, 0, 1, 0, 1], [0, 1, 0, 1, 1], [1, 0, 0, 0, 1]], //צ
            [[0, 0, 0, 0, 0], [1, 0, 1, 1, 1], [1, 0, 0, 0, 0], [1, 1, 1, 1, 0], [0, 0, 0, 0, 0]], //ק
            [[1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0]], //ר
            [[1, 1, 1, 1, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 1], [1, 1, 1, 1, 1]], //ש
            [[1, 0, 0, 0, 1], [1, 1, 1, 1, 1], [1, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 1, 1, 1]], //ת
        ]
    ]

    /**
     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.
     * @param text the text to scroll on the screen, eg: "שלום!"
     */
    //% blockId=hebrew_show_string
    //% block="show string %text"
    export function showString(text: string): void {
        let textWorkaround = text.length == 1 ? text : " " + text + " ";
        let strings: number[][] = []
        for (let c = 0; c < textWorkaround.length; c++) {
            for (let x = 0; x < 8; x++) {
                for (let y = 0; y < 16; y++) {
                    if (hs[x][y] == textWorkaround.substr(c, 1)) {
                        for (let z = 0; z < arr[x][y].length; z++) {
                            strings.push(arr[x][y][4 - z])
                        }
                        if (textWorkaround.length > 1) {
                            strings.push([0, 0, 0, 0, 0])
                            strings.push([0, 0, 0, 0, 0])
                        }
                    }
                }
            }
        }
        for (let z2 = 0; z2 < strings.length; z2++) {
            for (let x2 = z2; x2 < z2 + 5; x2++) {
                for (let y2 = 0; y2 < 5; y2++) {
                    if (x2 >= strings.length) {
                        if (strings[x2 - strings.length][y2] == 1) {
                            led.plot(4 - (x2 - z2), y2)
                        }
                        else {
                            led.unplot(4 - (x2 - z2), y2)

                        }
                    } else {
                        if (strings[x2][y2] == 1) {
                            led.plot(4 - (x2 - z2), y2)
                        }
                        else {
                            led.unplot(4 - (x2 - z2), y2)
                        }
                    }
                }
            }
            if (textWorkaround.length > 1) {
                basic.pause(150)
                for (let x3 = z2; x3 < z2 + 5; x3++) {
                    for (let y3 = 0; y3 < 5; y3++) {
                        if (x3 >= strings.length) {
                            if (strings[x3 - strings.length][y3] == 1) {
                                led.unplot(4 - (x3 - z2), y3)
                            }
                        } else {
                            if (strings[x3][y3] == 1) {
                                led.unplot(4 - (x3 - z2), y3)
                            }
                        }
                    }
                }
            }
            else {
                break
            }
        }
    }

}
