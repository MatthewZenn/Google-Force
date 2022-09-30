const run = document.getElementById("run");
const container = document.getElementById("container");
const btn = document.getElementById("button");

var count = 0

btn.addEventListener("click", function() {
    count = 1;
});

run.addEventListener("click", function() {
    if(count == 0) {
        container.style.display = "block";
    }
    else {
        container.style.display = "block";
    }
});