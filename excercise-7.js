function urutkanAbjad(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var simpan = ''
    for (var i = 0; i < alphabet.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (alphabet[i] === str[j]) {
                simpan += alphabet[i]
            }

        }

    }
    return simpan
}


// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'