var IMP = false;
var agi = false;
var con = false;
var des = false;
var fue = false;
var pod = false;
var vol = false;

function check(x) {
  if (x == "agi") agi = !agi;
  if (x == "con") con = !con;
  if (x == "des") des = !des;
  if (x == "fue") fue = !fue;
  if (x == "pod") pod = !pod;
  if (x == "vol") vol = !vol;
  if (x == "Imp") IMP = !IMP;
}


//check boton mantener de las habilidades
var checkMantenimiento = Array(20).fill(false)
function Mantener(NumeroDeHabilidad) {
  let TMantenimiento = document.getElementById("TurnoHab" + NumeroDeHabilidad)
  checkMantenimiento[NumeroDeHabilidad] = !checkMantenimiento[NumeroDeHabilidad]
  if(TMantenimiento.innerText==0){
    Activar(NumeroDeHabilidad)
  }
}

var checkActivar = Array (20).fill(false)
function Activar(NumeroDeHabilidad) {
  checkActivar[NumeroDeHabilidad] = !checkActivar[NumeroDeHabilidad]
}

