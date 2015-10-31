document.getElementById("colorButton").addEventListener('click', function(e) {
    e.preventDefault();
    var classList = document.getElementById("content").classList; 
    if (classList.contains("red")) {
        classList.remove("red");
        classList.add("green");
    } else {
        classList.remove("green");
        classList.add("red");
    }
});