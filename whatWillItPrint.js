let mylet = "Hello from global";

 function scopePractice() {
let mylet = "Hello from function scope";
}

scopePractice();
console.log(mylet);

let tricky = "Hello from global";

function trickyScopePractice() {
tricky = "Hello from function scope";
}
console.log(tricky);