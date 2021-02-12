//array que contienen los totales en un determinado turno para poder borrarlo mas tarde con la funcion reverse
var TurnoAgi = Array(100).fill(0);
var TurnoCon = Array(100).fill(0);
var TurnoDes = Array(100).fill(0);
var TurnoFue = Array(100).fill(0);
var TurnoPod = Array(100).fill(0);
var TurnoVol = Array(100).fill(0);



function sumarTurno(n) {
  let KiReservaT= document.getElementById('TOTALKI');
  let KiReservaU= document.getElementById('KiUtilizado');
  let t = document.getElementById("turno");
  t.innerText = +t.innerText * Math.abs(n) + n;
  if (KiReservaU.innerText==KiReservaT.innerText){
    t.innerText = +t.innerText * Math.abs(n) - n;
  }
  else{
    if (t.innerText < 0) t.innerText = 0;
    nombrar(n);
    KiTotal();
    Reverse(n)
  }
}

function nombrar(n) {
  if (agi) total("agi", n);
  if (con) total("con", n);
  if (des) total("des", n);
  if (fue) total("fue", n);
  if (pod) total("pod", n);
  if (vol) total("vol", n);
}

function total(v, n) {
  let T = document.getElementById("turno");
  let mult = document.getElementById(v + "Acc").value;
  let TotalKiAtributo = document.getElementById(v + "T");

  if (Activa == false) {
    if (n > 0) {
      TotalKiAtributo.innerText = +TotalKiAtributo.innerText + mult * n
      if (v == "agi") {
        TurnoAgi[T.innerText - 1] = mult
      }
      if (v == "con") {
        TurnoCon[T.innerText - 1] = mult
      }
      if (v == "des") {
        TurnoDes[T.innerText - 1] = mult
      }
      if (v == "fue") {
        TurnoFue[T.innerText - 1] = mult
      }
      if (v == "pod") {
        TurnoPod[T.innerText - 1] = mult
      }
      if (v == "vol") {
        TurnoVol[T.innerText - 1] = mult
      }
    }

  }
  if (Activa == true) {
    if (n > 0) {
      TotalKiAtributo.innerText = +TotalKiAtributo.innerText + Math.ceil((mult * n) / 2)
      if (v == "agi") {
        TurnoAgi[T.innerText - 1] = Math.ceil((mult * n) / 2)
        console.log(TurnoAgi)
      }
      if (v == "con") {
        TurnoCon[T.innerText - 1] = Math.ceil((mult * n) / 2)
        console.log(TurnoCon)
      }
      if (v == "des") {
        TurnoDes[T.innerText - 1] = Math.ceil((mult * n) / 2)
      }
      if (v == "fue") {
        TurnoFue[T.innerText - 1] = Math.ceil((mult * n) / 2)
      }
      if (v == "pod") {
        TurnoPod[T.innerText - 1] = Math.ceil((mult * n) / 2)
      }
      if (v == "vol") {
        TurnoVol[T.innerText - 1] = Math.ceil((mult * n) / 2)
      }
    }
  }


  KiUtilizado ()

}


function Reverse(n) {
  if (n < 0) {
    let T = document.getElementById("turno");

    let totalA = document.getElementById("agiT");
    let totalC = document.getElementById("conT");
    let totalD = document.getElementById("desT");
    let totalF = document.getElementById("fueT");
    let totalP = document.getElementById("podT");
    let totalV = document.getElementById("volT");


    totalA.innerText = +totalA.innerText + TurnoAgi[T.innerText] * n

    totalC.innerText = +totalC.innerText + TurnoCon[T.innerText] * n

    totalD.innerText = +totalD.innerText + TurnoDes[T.innerText] * n

    totalF.innerText = +totalF.innerText + TurnoFue[T.innerText] * n

    totalP.innerText = +totalP.innerText + TurnoPod[T.innerText] * n

    totalV.innerText = +totalV.innerText + TurnoVol[T.innerText] * n
    if (totalA.innerText < 0) totalA.innerText = 0;
    if (totalC.innerText < 0) totalC.innerText = 0;
    if (totalD.innerText < 0) totalD.innerText = 0;
    if (totalF.innerText < 0) totalF.innerText = 0;
    if (totalP.innerText < 0) totalP.innerText = 0;
    if (totalV.innerText < 0) totalV.innerText = 0;
  }
  KiUtilizado ()
}



