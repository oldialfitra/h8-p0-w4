function fpb(angka1, angka2) {
    var result = 0
    for (var i = 0; i < angka2; i++) {
        if (angka2 % i === 0) {
            if (angka1 % i === 0) {
                result = i
            }
        }
    }
    return result
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1