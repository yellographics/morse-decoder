const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let stringsArray = [];
    let splittedStrings = [];
    let finalArray = [];
    let slicedFinalArray = [];

    for (let i = 0; i < expr.length; i += 10) {
        stringsArray.push(expr.substring(i, i + 10));
    }

    stringsArray.forEach(string => {
        for (let i = 0; i < string.length; i += 2) {
            splittedStrings.push(string.substring(i, i + 2));
        }
    })

    splittedStrings.forEach(string => {
        if (string === "00") {
            finalArray.push('0')
        } else if (string === '10') {
            finalArray.push('.')
        } else if (string === '11') {
            finalArray.push('-');
        } else if (string === '**') {
            finalArray.push('*');
        }
    })

    for (let i = 0; i < finalArray.length; i += 5) {
        slicedFinalArray.push(finalArray.slice(i, i + 5));
    }

    stringsArray = [];

    slicedFinalArray.forEach((array, index) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === '0') {
                array.splice(i, 1);
                i--;
            }
        }


        stringsArray.push(array.join(''));
    })

    stringsArray.forEach((string, index) => {
        if (string === '*****') {
            stringsArray.splice(index, 1, ' ')
        } else {
            stringsArray.splice(index, 1, MORSE_TABLE[string])
        }
    })

    console.log(stringsArray.join(''));

    return stringsArray.join('');

}

module.exports = {
    decode
}