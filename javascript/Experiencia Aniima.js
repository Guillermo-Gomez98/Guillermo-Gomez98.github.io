/*function KiTotal() {
  var mult = document.getElementById(v + "Acc").value;
  var total = document.getElementById(v + "T");

  total.innerText = +total.innerText * Math.abs(n) + mult * n;

  if (total.innerText < 0) total.innerText = 0;
}
*/
var exp = 100
var expT= 100
for (var S=2 ; S<=11 ;S++){
console.log("Experienciaa nivel",S,exp,"ExpT",expT)
exp = +exp + 25
expT = expT +exp
}

var expT=100
var exp =100

console.log("variacion propia")

for (var S=2 ; S<=11 ;S++){
console.log("Experiencia a nivel",S,exp,"ExpT",expT)
exp = +exp + 50
expT = expT +exp
}