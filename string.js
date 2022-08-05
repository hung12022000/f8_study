// tao chuỗi 
var fullname = 'Quoc Hung'
var fullname1 = new String('Quoc Hung')
    // backlash \
var name = "quoc hung \"123\""
var firstName = 'hung'
var lastname = 'Quoc'
console.log(`Toi la ${firstName} ${lastname}`)
    //lam viec voi 1 chuoi 
    /*
    length
    index
    cut string 
    replace 
    convert upper case 
    convert lower case 
    trim 
    split 
    get character by index
    */
var string = 'Nguyen quoc hung'
console.log(string.length)
console.log(string.indexOf('quoc', 2))
console.log(string.search('quoc'))
console.log(string.slice(7, 12))
console.log(string.replace('quoc', 'Bao'))
console.log(string.replace(/quoc/g, 'Bao'))
console.log(string.toUpperCase())
console.log(string.toUpperCase())
console.log(string.trim())
var language = "js,ruby,php"
console.log(language.split(','))
console.log(language.charAt(8))