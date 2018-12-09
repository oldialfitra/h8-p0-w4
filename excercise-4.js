function cariModus(arr) {
    var tampung = []
    var hasil = []
    for (var i = 0; i < arr.length; i++) {
        var check = true
        for (var j = 0; j < tampung.length; j++) {
            if (arr[i] === tampung[j]) {
                check = false
            }
        }
        if (check === true) {
            tampung.push(arr[i])
        }
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] === arr[j]) {
                    hasil.push(arr[i])
                }
            }

        }

    }
    if (tampung.length === 1) {
        return -1
    } else if (tampung.length === arr.length) {
        return -1
    } else {
        return hasil[0]
    }

}
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1