namespace hebrew {
    const hs = 
        ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "ך", "כ", "ל", "ם", "מ", "ן", "נ", "ס", "ע", "ף", "פ", "ץ", "צ", "ק", "ר", "ש", "ת"]

    /**
     * Show string, one letter at a time. That string can include the aleph-bet hebrew's letters.
     * @param text the string to show, eg: שלום
     */
    //% blockId=show_string block="הצג מחרוזת %v"
    export function showString(text: string): void {
        for (let c = 0; c < text.length; c++) {
            let found = false;
            for (let y = 0; y < hs.length; y++) {
                if (hs[y] == text.substr(c, 1)) {
                    found = true;
                    if (hs[y] == 'א') {
                        basic.showLeds(`
                            # . . . #
                            # # . # .
                            # . # . .
                            # . . # .
                            # . . . #
                        `)
                    }
                    else if (hs[y] == 'ב') {
                        basic.showLeds(`
                            # # # # .
                            . . . # .
                            . . . # .
                            . . . # .
                            # # # # #
                        `)
                    }
                    else if (hs[y] == 'ג') {
                        basic.showLeds(`
                            . # # # #
                            . . . . #
                            . . . # #
                            . . # . #
                            . # . . #
                        `)
                    }
                    else if (hs[y] == 'ד') {
                        basic.showLeds(`
                            # # # # #
                            . . . # .
                            . . . # .
                            . . . # .
                            . . . # .
                        `)
                    }
                    else if (hs[y] == 'ה') {
                        basic.showLeds(`
                            # # # # .
                            . . . # . 
                            # . . # . 
                            # . . # .
                            # . . # . 
                        `)
                    }
                    else if (hs[y] == 'ו') {
                        basic.showLeds(`
                            . # # . .
                            . . # . .
                            . . # . .
                            . . # . .
                            . . # . .
                        `)
                    }
                    else if (hs[y] == 'ז') {
                        basic.showLeds(`
                            . # # # .
                            . . # . .
                            . . # . .
                            . . # . .
                            . . # . .
                        `)
                    }
                    else if (hs[y] == 'ח') {
                        basic.showLeds(`
                            # # # # #
                            . # . . #
                            . # . . #
                            . # . . #
                            . # . . #
                        `)
                    }
                    else if (hs[y] == 'ט') {
                        basic.showLeds(`
                            # . . . #
                            # . . # #
                            # . # . #
                            # . . . #
                            # # # # #
                        `)
                    }
                    else if (hs[y] == 'י') {
                        basic.showLeds(`
                            . # # . .
                            . . # . .
                            . . # . .
                            . . . . .
                            . . . . .
                        `)
                    }
                    else if (hs[y] == 'ך') {
                        basic.showLeds(`
                            # # # . .
                            . . # . .
                            . . # . .
                            . . # . .
                            . . # . .
                        `)
                    }
                    else if (hs[y] == 'כ') {
                        basic.showLeds(`
                            # # # # #
                            . . . . #
                            . . . . #
                            . . . . #
                            # # # # #
                        `)
                    }
                    else if (hs[y] == 'ל') {
                        basic.showLeds(`
                            . # . . .
                            . # . . .
                            . # # # .
                            . . . # .
                            . # # # .
                        `)
                    }
                    else if (hs[y] == 'ם') {
                        basic.showLeds(`
                            # # # # #
                            . # . . #
                            . # . . #
                            . # . . #
                            . # # # #
                        `)
                    }
                    else if (hs[y] == 'מ') {
                        basic.showLeds(`
                            # . # # #
                            . # . . #
                            # . . . #
                            . . . . #
                            # # # # #
                        `)
                    }
                    else if (hs[y] == 'ן') {
                        basic.showLeds(`
                            . # # . .
                            . . # . .
                            . . # . .
                            . . # . .
                            . . # . .
                        `)
                    }                    
                    else if (hs[y] == 'נ') {
                        basic.showLeds(`
                            . # # . .
                            . . # . .
                            . . # . .
                            . . # . .
                            # # # . .
                        `)
                    }
                    else if (hs[y] == 'ס') {
                        basic.showLeds(`
                            # # # # .
                            . # . . #
                            . # . . #
                            . # . . #
                            . . # # .
                        `)
                    }
                    else if (hs[y] == 'ע') {
                        basic.showLeds(`
                            # . . . #
                            . # . . #
                            . . # . #
                            . . . # #
                            # # # # #
                        `)
                    }
                    else if (hs[y] == 'ף') {
                        basic.showLeds(`
                            . # # # #
                            . # . . #
                            . # # . #
                            . . . . #
                            . . . . #
                        `)
                    }
                    else if (hs[y] == 'פ') {
                        basic.showLeds(`
                            . # # # #
                            . # . . #
                            . # # . #
                            . . . . #
                            . # # # #
                        `)
                    }
                    else if (hs[y] == 'ץ') {
                        basic.showLeds(`
                            # . . . #
                            . # . # .
                            . . # . .
                            . . . # .
                            . . . . #
                        `)
                    }
                    else if (hs[y] == 'צ') {
                        basic.showLeds(`
                            # . . . #
                            . # . # .
                            . . # . .
                            . . . # .
                            # # # # #
                        `)
                    }
                    else if (hs[y] == 'ק') {
                        basic.showLeds(`
                            . # # # .
                            . . . # .
                            . # . # .
                            . # . # .
                            . # . . .
                        `)
                    }
                    else if (hs[y] == 'ר') {
                        basic.showLeds(`
                            # # # # .
                            . . . # .
                            . . . # .
                            . . . # .
                            . . . # .
                        `)
                    }
                    else if (hs[y] == 'ש') {
                        basic.showLeds(`
                            # . # . #
                            # . # . #
                            # . # . #
                            # . # . #
                            # # # # #
                        `)
                    }
                    else if (hs[y] == 'ת') {
                        basic.showLeds(`
                            # # # # #
                            . # . . #
                            . # . . #
                            . # . . #
                            # # . . #
                        `)
                    }
                }
            }
            if (! found) {
                basic.showString(text.substr(c, 1));
            }
        }
    }
}
