function sorting(arrNumber) {
    // code di sini
    arrNumber.sort(function(a, b) { return a - b })
}

function getTotal(arrNumber) {
    // code di sini
    // for (var i = 0; i < arrNumber.length; i++) {
    //     var counter = 0
    //     for (var j = 0; j < arrNumber.length; j++) {
    //         if (arrNumber[i] === arrNumber[j]) {
    //             counter += 1
    //         }
    //         else {
    //             counter += 0
    //         }

    //     }

    // }
    // return counter
    var tampung = []
    var hasil = []
    for (var i = 0; i < arrNumber.length; i++) {
        var check = true
        for (var j = 0; j < tampung.length; j++) {
            if (arr[i] === tampung[j]) {
                check = false
            }
        }
        if (check === true) {
            tampung.push(arrNumber[i])
        }
    }
    for (var i = 0; i < arrNumber.length; i++) {
        for (var j = 0; j < arrNumber.length; j++) {
            if (i !== j) {
                if (arrNumber[i] === arrNumber[j]) {
                    hasil.push(arrNumber[i])
                }
            }

        }

    }
    if (tampung.length === 1) {
        return -1
    } else if (tampung.length === arrNumber.length) {
        return -1
    } else {
        return hasil[0]
    }
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''