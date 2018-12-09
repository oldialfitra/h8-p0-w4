function digitPerkalianMinimum(angka) {
    var hasil = 0
    var tempI = []
    var tempJ = []
    check = false
    counter = 0
    for (var i = 0; i <= angka; i++) {
        for (var j = angka; j >= 0; j--) {
            if (i * j === angka) {
                if (i % j !== 0) {
                    var stringI = String(i)
                    var stringJ = String(j)
                } else if (i === 1 && j === 1) {
                    var stringI = String(i)
                    var stringJ = String(j)
                }
            }
        }

    }
    for (var k = 0; k < stringI.length; k++) {
        tempI.push(stringI[k])

    }
    for (var l = 0; l < stringJ.length; l++) {
        tempJ.push(stringJ[l])

    }
    return tempI.length + tempJ.length
}


console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2