function KiTotal() {
  var mult = document.getElementById(v + "Acc").value;
  var total = document.getElementById(v + "T");

  total.innerText = +total.innerText * Math.abs(n) + mult * n;

  if (total.innerText < 0) total.innerText = 0;
}
