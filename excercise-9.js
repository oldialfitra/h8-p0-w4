function checkAB(str) {
    var check = false
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            if (str[i + 4] === 'b') {
                check = true
            }
        } else if (str[i] === 'b') {
            if (str[i + 4] === 'a') {
                check = true
            }
        }

    }
    return check
        // console.log(checkA)
        // console.log(checkB)

}

console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false