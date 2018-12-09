function changeVocals(str) {
    var simpanVocals = ''
        //code di sini
    for (var i = 0; i < str.length; i++) {

        if (str[i] === 'a') {
            simpanVocals += 'b'
        } else if (str[i] === 'i') {
            simpanVocals += 'j'
        } else if (str[i] === 'u') {
            simpanVocals += 'v'
        } else if (str[i] === 'e') {
            simpanVocals += 'f'
        } else if (str[i] === 'o') {
            simpanVocals += 'p'
        } else if (str[i] === 'A') {
            simpanVocals += 'B'
        } else if (str[i] === 'I') {
            simpanVocals += 'J'
        } else if (str[i] === 'U') {
            simpanVocals += 'V'
        } else if (str[i] === 'E') {
            simpanVocals += 'F'
        } else if (str[i] === 'O') {
            simpanVocals += 'O'
        }

    }
    return simpanVocals
}

function reverseWord(str) {
    //code di sini
    var simpanReverse = ''
    for (var i = str.length - 1; i >= 0; i--) {
        simpanReverse += str[i]

    }
    return simpanReverse
}

function setLowerUpperCase(str) {
    //code di sini
    var simpanSet = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            simpanSet += str[i].toUpperCase()
        } else {
            simpanSet += str[i].toLowerCase()
        }

    }
    return simpanSet
}

function removeSpaces(str) {
    //code di sini
    var simpanRemoveSpaces = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            simpanRemoveSpaces += ''
        } else {
            simpanRemoveSpaces += str[i]
        }

    }
    return simpanRemoveSpaces
}

function passwordGenerator(name) {
    //code di sini
    if (name.length < 5) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    } else {
        var vocals = changeVocals(name)
        var reverse = reverseWord(vocals)
        var lowerupperCase = setLowerUpperCase(reverse)
        var remove = removeSpaces(lowerupperCase)
        return remove
    }

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'