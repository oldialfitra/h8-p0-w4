// function changeMe(arr) {
//     var result = {}
//     var hasil = []
//     for (var i = 0; i < arr.length; i++) {
//         var keyName = (i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ': '
//         if (result[keyName] === undefined) {
//             result[keyName] = {}
//             result[keyName]['firstname'] = arr[i][0]
//             result[keyName]['lastname'] = arr[i][1]
//             result[keyName]['gender'] = arr[i][2]
//             result[keyName]['age'] = arr[i][3]
//         }
//         if (result[keyName]['age'] === undefined) {
//             result[keyName]['age'] = 'Invalid Birth Year'
//         }

//     }
//     console.log(result)


// }

function changeMe(arr) {
    var result = {}
    var year = new Date().getFullYear()
    for (let i = 0; i < arr.length; i++) {
        var keyName = (i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ': '
        result['firstname'] = arr[i][0]
        result['lastname'] = arr[i][1]
        result['gender'] = arr[i][2]
        if (arr[i][3] === undefined) {
            result['age'] = 'Invalid Birth Year'
        } else {
            result['age'] = year - arr[i][3]
        }
        console.log(keyName)
        console.log(result)
    }
}

changeMe([
        ['Christ', 'Evans', 'Male', 1982],
        ['Robert', 'Downey', 'Male']
    ]) // 1. Christ Evans:
    // { firstName: 'Christ',
    //   lastName: 'Evans',
    //   gender: 'Male',
    //   age: 36 }
    // 2. Robert Downey:
    // { firstName: 'Robert',
    //   lastName: 'Downey',
    //   gender: 'Male',
    //   age: 'Invalid Birth Year' }
changeMe([]) // ""