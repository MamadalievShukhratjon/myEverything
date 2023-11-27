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




// console.log(text.repeat(10))