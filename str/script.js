//  working with endsWith

let str = "school"

console.log((str.endsWith("l")) || (str.endsWith("L")))
// console.log(str.endsWith("L"))


// reverse the strings
var str1 = "Web"
var str2 = "brain"
var str3 = str1 
str1 = str2 
str2 = str3
console.log(str1)

// Leap year 

var year = "2000"

if ((year % 4 == 0) && (year % 100 == 0) || (year % 400 ==0))
console.log("Leap year")
else console.log("Not a leap year")


//  replace method
var text = "Webbrain "

var web1 = text.replace("Web" , "IT")

console.log( web1.repeat(10))


var name1 = '#fozil#web#brain#'


var part1 = name1.slice(0,6)
var ism1 = part1.replace("#","(")
var part2 = name1.slice(6,10)
var ism2 = part2.replace("#", ")")
var part3 = name1.slice(10,17)
var ism3 = part3.replace("#","(")
var part4 = name1.slice(16,17)
var ism4 = part4.replace("#", ")")

var total = (ism1+ism2+ism3+ism4)
console.log(total)
