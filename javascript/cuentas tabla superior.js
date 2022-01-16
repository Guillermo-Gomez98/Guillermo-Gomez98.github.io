//array que contienen los totales en un determinado turno para poder borrarlo mas tarde con la funcion reverse
var TurnoAgi = Array(100).fill(0);
var TurnoCon = Array(100).fill(0);
var TurnoDes = Array(100).fill(0);
var TurnoFue = Array(100).fill(0);
var TurnoPod = Array(100).fill(0);
var TurnoVol = Array(100).fill(0);
var KiUtilizado = Array(100).fill(0);
var Nombrar = ["agi","con","des","fue","pod","vol"]

function sumarTurno(n) {
  let KiReservaT = document.getElementById('TOTALKI');
  let t = document.getElementById("turno");
  let agiT = document.getElementById("agiT");
  let conT = document.getElementById("conT");
  let desT = document.getElementById("desT");
  let fueT = document.getElementById("fueT");
  let podT = document.getElementById("podT");
  let volT = document.getElementById("volT");
  Guardado (t)
  t.innerText = +t.innerText * Math.abs(n) + n;
  if (t.innerText < 0) t.innerText = 0;
  if (n > 0){
  PrefijoDeVariable(n);
  KiTotal();
  MantenerCuentas ("agi",t,n);
  MantenerCuentas ("con",t,n);
  MantenerCuentas ("des",t,n);
  MantenerCuentas ("fue",t,n);
  MantenerCuentas ("pod",t,n);
  MantenerCuentas ("vol",t,n);
  EfectoActivar(cantidadCreada, "agi", t);
  EfectoActivar(cantidadCreada, "con", t);
  EfectoActivar(cantidadCreada, "des", t);
  EfectoActivar(cantidadCreada, "fue", t);
  EfectoActivar(cantidadCreada, "pod", t);
  EfectoActivar(cantidadCreada, "vol", t);
  SumaTMantener (n,cantidadCreada);
  for(let i=1 ; i<=cantidadCreada ; i++){
    if(checkActivar[i]==true)  checkActivar[i] = !checkActivar[i];
  }
  }
  if (n < 0){
    SumaTMantener (n)
    Reverse(t)
    PrefijoDeVariable(n);
    KiTotal();
  }
  if (KiReservaT.innerText < +agiT.innerText + +conT.innerText + +desT.innerText + +fueT.innerText + +podT.innerText + +volT.innerText) {
    //Agregar avizo de error 1 "Exedo de ki en reserva: expulsa ki o usa alguna de las avilidades"
    t.innerText = +t.innerText -1;
    Reverse(t)
    if (n < 1) {
      t.innerText = +t.innerText * Math.abs(n) + n;
      Reverse(t)
      }
  }
}

function PrefijoDeVariable(n) {
  if (agi) total("agi", n);
  if (con) total("con", n);
  if (des) total("des", n);
  if (fue) total("fue", n);
  if (pod) total("pod", n);
  if (vol) total("vol", n);
}
function total(v, n) {
  let t = document.getElementById("turno");
  let mult = document.getElementById(v + "Acc").value;
  let TotalKiAtributo = document.getElementById(v + "T");
  if(n>0){
    if(Activa == false) {
    TotalKiAtributo.innerText = +TotalKiAtributo.innerText + mult * n
    Guardado (t,v)

  }
  //Funcion que al realizar una accion, el personaje acumalara la mitad de ki.
  if (Activa == true) {
    if(mult==1){TotalKiAtributo.innerText = +TotalKiAtributo.innerText + mult * n}
    else{
    TotalKiAtributo.innerText = +TotalKiAtributo.innerText + Math.trunc(( mult * n)/2)
    Guardado (t,v)
    }
  }
}
}


function Reverse(t) {
  let totalA = document.getElementById("agiT");
  let totalC = document.getElementById("conT");
  let totalD = document.getElementById("desT");
  let totalF = document.getElementById("fueT");
  let totalP = document.getElementById("podT");
  let totalV = document.getElementById("volT");
  let totalKi = document.getElementById("KiUtilizado")
    totalA.innerText = TurnoAgi[t.innerText]

    totalC.innerText = TurnoCon[t.innerText]

    totalD.innerText = TurnoDes[t.innerText]

    totalF.innerText = TurnoFue[t.innerText]

    totalP.innerText = TurnoPod[t.innerText]

    totalV.innerText = TurnoVol[t.innerText]

    totalKi.innerText = KiUtilizado[t.innerText]

    if (totalA.innerText < 0) totalA.innerText = 0;
    if (totalC.innerText < 0) totalC.innerText = 0;
    if (totalD.innerText < 0) totalD.innerText = 0;
    if (totalF.innerText < 0) totalF.innerText = 0;
    if (totalP.innerText < 0) totalP.innerText = 0;
    if (totalV.innerText < 0) totalV.innerText = 0;
    let TMantenimiento = document.getElementById("TurnoHab" + cantidadCreada)
    if(TMantenimiento != null){
      for(let i=1 ; i<=cantidadCreada ; i++){
        let TMantenimiento = document.getElementById("TurnoHab" + i)
        if(checkMantenimiento[i] == true){
        TMantenimiento.innerText = 0;
        }
      }
    }
    checkMantenimiento=false
}

function Reserva0() {
  let agiT = document.getElementById("agiT");
  let conT = document.getElementById("conT");
  let desT = document.getElementById("desT");
  let fueT = document.getElementById("fueT");
  let podT = document.getElementById("podT");
  let volT = document.getElementById("volT");
  agiT.innerText = 0
  conT.innerText = 0
  desT.innerText = 0
  fueT.innerText = 0
  podT.innerText = 0
  volT.innerText = 0
}


// para borrar todo
function Delet() {
  let t = document.getElementById("turno")
  let KiRestante = document.getElementById()

  Reserva0()
}

function Guardado (t, Mantenimiento, AcumulacionNecesaria, i) {
  let TotalKiAgi = document.getElementById("agiT");
  let TotalKiCon = document.getElementById("conT");
  let TotalKiDes = document.getElementById("desT");
  let TotalKiFue = document.getElementById("fueT");
  let TotalKiPod = document.getElementById("podT");
  let TotalKiVol = document.getElementById("volT");


  TurnoAgi[t.innerText] = TotalKiAgi.innerText

  TurnoCon[t.innerText] = TotalKiCon.innerText

  TurnoDes[t.innerText] = TotalKiDes.innerText

  TurnoFue[t.innerText] = TotalKiFue.innerText

  TurnoPod[t.innerText] = TotalKiPod.innerText

  TurnoVol[t.innerText] = TotalKiVol.innerText
  KiUtilizado[+t.innerText + 1] = +KiUtilizado[t.innerText]
  if(checkMantenimiento[i] == true) KiUtilizado[t.innerText] = KiUtilizado[t.innerText] + +Mantenimiento.innerText;
  if(checkActivar[i] == true ) KiUtilizado[t.innerText] = KiUtilizado[t.innerText] + +AcumulacionNecesaria.innerText;
}