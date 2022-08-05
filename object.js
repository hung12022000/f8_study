// tao obj

var myInfo = {
    name: 'Quoc Hung',
    tuoi: '22',
    adress: 'Ha Noi',
    getName: function() {
        return this.name
    }
}
myInfo.email = 'Quochung@gmail.com'
var mykey = 'hung1202'
console.log(myInfo)
console.log(myInfo[mykey])
console.log(myInfo.getName())
    // object contuctor
function User(firstName, lastName, avatar) {
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
    this.getName1 = function() {
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User('Hung', 'Quoc', 'anh cua hung');
var user = new User('123', 'Quoc', 'anh cua 123');
author.post = 'Post bai'
user.comment = 'cmt'
console.log(author)
    // object prototype-basic
User.prototype.className = 'f8';
// Date
var date = new Date()
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDay();

console.log(`${day}/${month}/${year}`)
    // Math
Math.PI
Math.round(1.22)
Math.abs(-4)
Math.ceil(4.1) //LAM TRON TREN
Math.floor(4.1) //LAM TRON DUOI
Math.random() // SO THAP PHAN NHO HON 1
var random = Math.floor(Math.random() * 100)
if (random < 50) {
    console.log('thanh cong')
} else
    console.log('cuong hoa that bai')
Math.max(1, 2, 3, 4, 3)
    // toan tu 3 ngoi 
var course = {
    name: 'jv',
    coin: 250
}
var result = course.coin > 0 ? `${course.coin} Coin` : 'Mien phi'
console.log(result)