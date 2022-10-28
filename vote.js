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
    var cand1 = Number(document.getElementById("c1").innerHtml)
    var sp1 = Number(document.getElementById("s1").innerHtml)

    sp1.innerHtml = cand1 + 1

}


