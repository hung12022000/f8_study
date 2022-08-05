/*
tham so 
truyen tham so
arguments
*/

var sum = function(a, b) {
    console.log(a);
    if (b) {
        console.log(b)
    }
}
sum('Nguyen quoc hung')

function argument() {
    console.log(arguments);
    var mystring = '';
    for (var param of arguments) {
        mystring += `${param} - `
    }
    console.log(mystring)
}
argument('1', '2', '3')

function sum(a, b) {

    for (var params of arguments) {
        a += params
    }
    return a + b;
}
sum(1, 2)

// các loại function 
// 1. declaration funcion

// 2. express func

// 3. arrow func