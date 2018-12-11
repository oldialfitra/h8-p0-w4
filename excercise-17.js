function kaliTerusRekursif(angka) {
    var angkaString = String(angka)
    var angkaDepan = angkaString[0]
    var ambil = angkaString.slice(1)
    if (ambil.length === 0) {
        return angka
    }
    return kaliTerusRekursif(Number(angkaDepan) * kaliTerusRekursif(Number(ambil)))
}

console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6