/*cada ves que alguien aprete en turno se suma los valores.
hacer que dependa de otra cosa como un onclick en cada casilla de ki*/

let agiki = document.getElementById("agiKI").value;
let conki = document.getElementById("conKI").value;
let deski = document.getElementById("desKI").value;
let fueki = document.getElementById("fueKI").value;
let podki = document.getElementById("podKI").value;
let volki = document.getElementById("volKI").value;
let totalki = document.getElementById("TOTALKI");

totalki.innerText = +agiki + +conki + +deski + +fueki + +podki + +volki;
function KiTotal() {
  let agiki = document.getElementById("agiKI").value;
  let conki = document.getElementById("conKI").value;
  let deski = document.getElementById("desKI").value;
  let fueki = document.getElementById("fueKI").value;
  let podki = document.getElementById("podKI").value;
  let volki = document.getElementById("volKI").value;
  let totalki = document.getElementById("TOTALKI");

  totalki.innerText = +agiki + +conki + +deski + +fueki + +podki + +volki;
}

function KiUtilizado (){

  let agiT = document.getElementById("agiT");
  let conT = document.getElementById("conT");
  let desT = document.getElementById("desT");
  let fueT = document.getElementById("fueT");
  let podT = document.getElementById("podT");
  let volT = document.getElementById("volT");
  let Utilizado = document.getElementById("KiUtilizado");
  
  Utilizado.innerText= +agiT.innerText + +conT.innerText + +desT.innerText + +fueT.innerText + +podT.innerText + +volT.innerText

}