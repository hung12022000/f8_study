//tao 
var language = [
    'JS',
    'php',
    'ruby'
]
var language2 = [
        'dast',
        'html',
        'css'
    ]
    /*push() – Insert an element at the end of the array.
    unshift() – Insert an element at the beginning of the array.
    pop() – Remove an element from the end of the array.
    shift() – Remove an element from the beginning of the array.
    slice() – Create a shallow copy of an array.
    join() - noi chuoi
    Array. */
console.log(language.push('RUST'))

console.log(language.pop())
    //xoa dau
console.log(language.shift())
    //them dau
console.log(language.unshift('RUST'))
    //thay the mang
console.log(language.splice(1, 1, 'JAVA'))
    //noi chuoi
console.log(language.concat(language2))
    //cat mang
console.log(language.slice(-2, -1))

console.log(language)
    //lam viec voi mang
    /*forEach() - duyệt qua từng phần tử của mảng
    every() - kiểm tra các phần tử của mảng phải thỏa mảng một điều kiện nào
    đó và trả về kiểu boolean
    some() - ngược lại với every chỉ cần một phần tử đúng sẽ trả về
    boolean true
    find() - tìm kiếm một phần tử trong mảng
    filter() - tìm kiếm tất cae các phần tử thoa mảng trong mảng*/
    // Mảng 
    /*NOTE: Các hàm dưới đây đều có thể thực hiện bằng vòng lặp. và tham số truyền vào phải là một function, nếu không truyền vào 1 function sẽ gây ra lỗi.
- every: dùng để kiểm tra tất cả các phần tử trong mảng cần cùng thõa mãn một điều kiện nào đó, kiểu dữ liệu trả về là boolean

- some: ngược lại với every, chỉ cần tìm thấy điều kiện thõa thì sẽ trả về true. Kiểu dữ liệu trả về vẫn là boolean
**Hiểu đơn giản là evey là toán tử &&, còn some là toán tử ||

- find : dùng để tìm kiếm giá trị của key cần tìm, nhưng sẽ chỉ tìm thấy được và trả về một phần tử tìm thấy.
- filter: giống với find cũng là tìm kiếm nhưng sẽ tìm kiếm nhiều hơn là 1 phần tử, sẽ trả về hết tất cả các phần tử tìm kiếm được.
- map: dùng để thêm hoặc sửa lại các phần tử trong object của một mảng theo cách mong muốn
reduce: dùng để lưu trữ biến tích trữ, thay vì dùng loop để tính giá trị cộng dồn từ các phần tử trong mảng thì reduce sẽ giúp chúng ta việc đó. */

courses = [{
        id: 0,
        name: "html",
        coin: 200
    },
    {
        id: 1,
        name: "php",
        coin: 0
    },
    {
        id: 2,
        name: "java",
        coin: 300
    },
    {
        id: 1,
        name: "html",
        coin: 200
    },
    {
        id: 1,
        name: "quochung",
        coin: 300
    },
]
for (var i of courses) {
    console.log(courses[i])
}
courses.forEach(function(courses, index) {
    console.log(index, course)
})
var check = courses.every(function(courses, indel) {
    return courses.coin === 0

});
console.log("every()" + " check all coin=0 : " + check)
var check1 = courses.every(function(courses, indel) {
    return courses.coin === 200

});
console.log(check1)
console.log("some()" + " check coin=200 : " + check)
var check = courses.find(function(courses, indel) {
    return courses.name === "html"

});

console.log("find()" + " check name html : ")
var course = courses.find(function(courses, index) {
    return courses.name === 'quochung'
})
console.log()

var check3 = courses.filter(function(courses, index) {
    return courses.name === "html"

});
console.log("filter()" + " check name html : ")
console.log(check3)
    //map de thay the 1 element trong phan tu
var newCourse = courses.map(function(courses) {
    return {
        id: courses.id,
        name: `Khoa Hoc : ${courses.name}`,
        coin: courses.coin,
        coinText: `Gia : ${courses.coin}`

    }
});
console.log(newCourse)
    // reduce de lam viec 
var sumCoin = courses.reduce(function(accumulator, currentValues) {
    return accumulator + currentValues.coin
}, 0)
console.log(sumCoin)
    // flat 
    //SỬ DỤNG REDUCE LÀM PHẲNG MẢNG.
var array = [1, 2, 3, [4, 5],
    [6, 7, [7, 7, [8, 8], ]], 8, 9, [10, 11]
];

var total = array.reduce(function(total, arrayItem) {
    return total.concat(arrayItem);
}, []);
// console.log(total);
var result = [];
result = array.flat(Infinity);
console.log(result);
// van dung
// Lấy ra tất cả các title của course lưu ra 1 mảng 
var topics = [{
        topic: "Front-end",
        courses: [{
                id: 1,
                title: "HTML CSS"
            },
            {
                id: 2,
                title: "Javascript",
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [{
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: "NodeJS",
            }
        ]
    }
];

var result = topics.reduce(function(course, topic) {
    return course.concat(topic.courses.reduce(function(title, course) {
        return title.concat(course.title);
    }, []));
}, []);
console.log(result);
const numbers = [1, 2, 3, 4, 5]
    // funcion call back nhanh 
const kq = numbers.reduce((acc, crr) => {
    return acc + crr
}, 0)
Array.prototype.selfReduce = function(callback, result = this[0]) {
    let i = arguments.length < 2 ? 1 : 0;
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    return result;
}

var result = numbers.selfReduce((a, b) => a + b, 2)
    // var result = numbers.selfReduce((a, b) => a + b, 10)
console.log(result)

function run(input) {
    var x = input.includes('F8')
    return x
}
// Includes chỉ dùng cho String hoặc Array nên minh chỉ viết
// như thế này thôi chứ không kiểm tra xem có phải là string hay 
// array không.