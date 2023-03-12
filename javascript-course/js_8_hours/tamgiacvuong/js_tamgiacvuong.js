let firstSide;
let secondSide;
let hypotenus;
document.getElementById("submit").onclick = function() {
    firstSide = document.getElementById("fisrt-rightTriangle").value;
    secondSide = document.getElementById("second-rightTriangle").value;
    hypotenus = Math.sqrt(Math.pow(firstSide,2)+Math.pow(secondSide,2));
    document.getElementById("hypotenus").innerHTML = hypotenus;
}