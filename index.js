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
        container.style.display = "block";
        
    }
    else {
        container2.style.display = "block";
    }
});