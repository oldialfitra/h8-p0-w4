function ubahHuruf(kata) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var hasilAkhir = ''
    for (var i = 0; i < kata.length; i++) {
        var tampung = kata[i]
        var hasil = ''
        for (var j = 0; j < alphabet.length; j++) {
            var counter = j
            if (counter > 26) {
                if (tampung === alphabet[counter]) {
                    hasil = alphabet[counter + 1]
                    hasilAkhir += hasil
                }
            } else {
                if (tampung === alphabet[counter]) {
                    hasil = alphabet[(counter + 1) % 26]
                    hasilAkhir += hasil
                }
            }

        }

    }
    return hasilAkhir
}

console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu