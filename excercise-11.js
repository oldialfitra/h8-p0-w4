function shoppingTime(memberId, money) {
    var result = {}
    var counter = 0
    var barang = [
        ['Stacattu', 1500000],
        ['Zoro', 500000],
        ['H&N', 250000],
        ['Uniklooh', 175000],
        ['Casing Handphone', 50000]
    ]
    if (memberId === undefined || memberId === '') {
        return 'Mohon maaf, hanya berlaku untuk member saja'
    } else {
        result['memberId'] = memberId
        result['money'] = money
        result['listPurchased'] = []
        if (money < 50000) {
            return 'Mohon maaf, uang tidak cukup'
        } else {
            for (var i = 0; i < barang.length; i++) {
                if (counter <= money && barang[i][1] <= money) {
                    result['listPurchased'].push(barang[i][0])
                    counter += barang[i][1]
                }
                // if (counter <= money) {
                //     result['listPurchased'].push(barang[i][0])
                //     counter += barang[i][1]
                // } else {
                //     break
                // }

            }
        }
        result['changeMoney'] = money - counter
    }
    return result
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja