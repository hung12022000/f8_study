/**
VÒNG LẶP - LOOP

1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

*/
for (var i = 1; i < 10; i++) {
    console.log('quoc hung')
}

function getTotal(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(getTotal([1, 2, 3]))
var myArray = [
    'Java',
    'PHP',
    'Dart',
    'Ruby',
    'Python'
];
for (var value of myArray) {
    console.log(value)
}
var arrayLength = myArray.length;
for (var i = 1; i < arrayLength; i++) {
    console.log(myArray[i]);
}
var orders = [{
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders) {
    var sum = 0
    for (var i = 0; i < orders.length; i++) {
        sum += orders[i].price
    }
    return sum
}
console.log(getTotal(orders))
    // Ứng dụng của For in với Object   
    // -Lấy key or value
var myInfor = {
    name: 'Quoc Hung',
    age: 22,
    adrress: 'Hai duong'
};


for (var key in myInfor) {
    console.log(key); // Lấy element của Object
    console.log(myInfor[key]); // Lấy value 
}

// Ứng dụng của For in với Array
var cars = [
    'Honda',
    'Suzuki',
    'Ferari',
    'Mercesdez'
];

for (var key in cars) {
    console.log(key);
    console.log(cars[key]);
}


// Ứng dụng với Chuỗi
var myString = 'Javascript';

// for (var key in myString) {
//     console.log(key);
//     console.log(myString[key]); // Lấy từng chữ cái của chuỗi
// }
function run(object) {
    var arr = [];
    for (var key in object) {
        arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`);
    }
    return arr;
}


// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// While 
//Perform While loop
var myArray1 = [
    'hung',
    'gch190676',
    'greenwich'
]
var i = 0;
while (i < myArray1.length) {

    console.log(myArray1[i]);
    i++;
}
// do while
/*
var i = 0
var isSuccess = false;

var account = 'tentaikhoan';
var password = 'matkhau'
console.log(!isSuccess)
do {
    i++;
    var nhapAccount = prompt('Nhập tên tài khoản')
    var nhapPassword = prompt('Nhập Mật khẩu')
    if (nhapAccount === account) {
        if (nhapPassword === password) {
            alert('Đăng nhập thành công')
            isSuccess = true

        } else {
            alert('Sai Mật khẩu')
            do {
                var nhapPassword = prompt('Nhập lại Mật khẩu')
                if (nhapPassword === password) {
                    alert('Đăng nhập thành công')
                    isSuccess = true
                }
            } while (nhapAccount !== password && !isSuccess);
        }
    } else if (i === 5) {
        alert('Tài khoảng bạn bị khóa')

    } else {
        alert('Sai tài khoản' + '\nNếu sai 5 lần thì sẽ khóa tài khoản ' + i)

    }


} while (!isSuccess && i < 5);*/
// break and continue
// Break & Continue in Loop
for (var i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        break;
    }
    console.log(i);
}
// vong lap long nhau
var arr = [
    [1, 2],
    [3, 4],
    [5, 6]
]
for (var i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])
    }
}