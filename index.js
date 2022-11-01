const run = document.getElementById("run");
const container = document.getElementById("container");
const container2 = document.getElementById("container2");
const btn = document.getElementById("button");

var count = 0

btn.addEventListener("click", function() {
    count = 1;
});

run.addEventListener("click", function() {
    if(count == 1) {
        container2.style.display = "block";
        
    }
    else {
        window.open("https://www.google.com/search?q=seven+of+spades", '_self');
    }
});