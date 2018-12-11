function totalDigitRekursif(angka) {
    if (angka === 0) {
        return 0
    }

    var stringAngka = String(angka)
    var angkaDepan = stringAngka[0]
    var ambil = stringAngka.slice(1)
    if (stringAngka.length >= 0) {
        return Number(angkaDepan) + totalDigitRekursif(Number(ambil))
    }

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5