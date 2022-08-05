// 1. Là Hàm  
// 2. được truyền qua các đối số 
// khi gọi hàm khác
function myfuncion(param) {
    if (typeof param === 'function') { console.log(param); }
}

function myCallback(value) {
    console.log('Values : ', value)
}
myfuncion(myCallback('CALLBACK'))
var course = [
    'js',
    'php',
    'ruby'
]

Array.prototype.map2 = function(callBack) {
    var arrLength = this.length
    var ouput = []
    for (var i = 0; i < arrLength; i++) {
        var result = callBack(this[i], i);
        ouput.push(result)
    }
    return ouput
}
var htmls = course.map2(function(course) {

    return `<h2>${course}<h2>`;
})

console.log(htmls.join(''))
    // forEach , find , filter , some , reduce
Array.prototype.forEach3 = function(cb) {

    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            console.log('index : ', index)
            cb(this[index], index, this)
        }
    }
}
course.forEach3(function(c, i, a) {
    console.log(c, i, a)
})

Array.prototype.filter2 = function(callback) {
    var out = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var rs2 = callback(this[index], index, this);
            if (rs2) {
                out.push(this[index]);
            }
        }
    }
    return out;
};

var fruits = [{
        name: 'Tao',
        coin: 200
    },
    {
        name: 'Man',
        coin: 300
    },
    {
        name: 'Vai',
        coin: 400
    },
];
var filterFs = fruits.filter2(function(fs, index, fruits) {
    return fs.coin > 250;
});
console.log(filterFs);
Array.prototype.some2 = function(callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i, this)) {

                return true
            }

        }
    }
}
Array.prototype.every2 = function(callback) {
    var ouput = true
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (!(callback(this[i], i, this))) {

                ouput = false
                break;
            }

        }
    }
}