/*for(var i = 0; i < 10;  i++) {
    // block of code 

    document.write(i + "<br>");

}

var person = {
    firstName: "Abdulrahman",
    lastName: "Alaa",
    age : 25
}


var i = 0;
var text = "";


for(var i in person) {
    text += person[i] + " "
}

document.getElementById("demo").innerHTML = text;

*/
/*
var x = 0;

do {
    // 

    document.write(x + "<br>");
    x++




} while (x > 10)



var y = 0;

while (y > 10) {
    
    document.write(y + "<br>");
    y++

}



*/


/* try catch  


try {
    var x = parseInt(prompt("what is your age ?"));

    if(x < 10) {
        throw "less than";
    } else if (x > 20){
        throw "bigger than";
    
    } else {
        alert("hello");
    }

    console.log("hello");

} catch(e) {
    alert("heelo error");
    console.log("xxx x xx xx");
} finally {
    document.getElementById("demo").innerHTML = "abdultaa.m,an"
}

*/ 




/* hositng 

inital ==            var x = "abdulrahman"

declare ==           var x; ==== 


var x = 5; // Initialize x
var y;     // Declare y


y = 7;    // Assign 7 to y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y

*/






/* clouser in javascript */
/* global scope */
/* local scope */









function foo(outer) {
    function inner(innnner) {
        return outer + innnner
    }

    return inner;

}

var get_fun = foo(5);

console.log(get_fun(10));



function Counet() {
    var counter = 0;

    function increaseCounter() {
        return counter += 1; 
        
    }
    return increaseCounter;
    
}

// var countererer  = Counet(); clousuer

alert(countererer());
alert(countererer());
alert(countererer());
alert(countererer());
alert(countererer());