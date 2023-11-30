for (let i = 0; i <= 10; i++ ) {
    if (i % 0 === 0) {
        console.log("Nomalum")
    }else if (i % 2 === 0) {
        console.log("Juft son")
    }else {
        console.log("toq son");
    }

    console.log(i)
}


let str = "Webbrainacademy"
let natija = ''

for (i = 0; i < str.length; i++) {
    if (str[i] === "A" || str[i] === "a") {
        natija = natija + str[i]
    }
}
console.log(natija.length)
