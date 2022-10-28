var yob = 2018
var curYr = 2022

var age = curYr - yob
console.log(yob)

if(age > 18){
    console.log("Your age is: " + age)
} else{
    console.log("Sorry, you are " + age + " yrs, and don't qualify")
}

function vote1() {
    var votes = Number(document.getElementById("s1").innerHTML)

    document.getElementById("s1").innerHTML = votes+1
}


