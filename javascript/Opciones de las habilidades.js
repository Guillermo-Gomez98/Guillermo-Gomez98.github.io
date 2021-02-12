function eliminar(cantidadCreada) {
    var Nombre = document.getElementById('habilidad'+cantidadCreada);
    let nuevoParrafo = `
    <div id=list>
    </div>
`;

  Nombre.outerHTML = nuevoParrafo;
  console.log (Nombre)
}

function Activara(cantidadCreada) {
  //valores guardados de las habilidades
  let agiC = document.getElementById('agiC'+cantidadCreada);
  let conC = document.getElementById('conC'+cantidadCreada);
  let desC = document.getElementById('desC'+cantidadCreada);
  let fueC = document.getElementById('fueC'+cantidadCreada);
  let podC = document.getElementById('podC'+cantidadCreada);
  let volC = document.getElementById('volC'+cantidadCreada);
// llamo valores en la tabla
  let AgiTabla = document.getElementById("agiT");
  let ConTabla = document.getElementById("conT");
  let DesTabla = document.getElementById("desT");
  let FueTabla = document.getElementById("fueT");
  let PodTabla = document.getElementById("podT");
  let VolTabla = document.getElementById("volT");
//Se realiza la operacion
  AgiTabla.innerText= +AgiTabla.innerText - agiC.innerText
  ConTabla.innerText= +ConTabla.innerText - conC.innerText
  DesTabla.innerText= +DesTabla.innerText - desC.innerText
  FueTabla.innerText= +FueTabla.innerText - fueC.innerText
  PodTabla.innerText= +PodTabla.innerText - podC.innerText
  VolTabla.innerText= +VolTabla.innerText - volC.innerText

}

function Activar(cantidadCreada){
  EfectoActivar(cantidadCreada,"agi");
  EfectoActivar(cantidadCreada,"con");
  EfectoActivar(cantidadCreada,"des");
  EfectoActivar(cantidadCreada,"fue");
  EfectoActivar(cantidadCreada,"pod");
  EfectoActivar(cantidadCreada,"vol");
}

function EfectoActivar(cantidadCreada,z) {
  let AcumulacionNecesaria = document.getElementById(z+'C'+cantidadCreada);
  let Mantenimiento =  document.getElementById(z + 'A'+cantidadCreada);
  let AcumulacionTabla = document.getElementById(z + "T");

  if(AcumulacionTabla.innerText - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText > 0){
    AcumulacionTabla.innerText = AcumulacionTabla.innerText - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText
  // Por si hay error o cualquier cosa Function Reverse.
  let turnoUtilizado= document.getElementById("turno").innerText;
  if (z == "agi") {
    TurnoAgi[turnoUtilizado - 1] = TurnoAgi[turnoUtilizado - 1] - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText
  }
  if (z == "con") {
    TurnoCon[turnoUtilizado - 1] = TurnoCon[turnoUtilizado - 1] - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText
  }
  if (z == "des") {
    TurnoDes[turnoUtilizado - 1] = TurnoDes[turnoUtilizado - 1] - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText
  }
  if (z == "fue") {
    TurnoFue[turnoUtilizado - 1] = TurnoFue[turnoUtilizado - 1] - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText
  }
  if (z == "pod") {
    TurnoPod[turnoUtilizado - 1] = TurnoPod[turnoUtilizado - 1] - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText
  }
  if (z == "vol") {
    TurnoVol[turnoUtilizado - 1] = TurnoVol[turnoUtilizado - 1] - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText
  }}
  else{
  //que desencadene error
  console.log('viste, no cuidas el ki acumulado y ahora no tenes con que zarparle al tipo')
  }

  console.log(TurnoDes)
}

function Mantener(cantidadCreada) {
//llamo dos variables, de la tabla seleccionada que gestiona la habilidad
let agiC = document.getElementById('agiC'+cantidadCreada);
let agiA = document.getElementById('agiA'+cantidadCreada);

let conC = document.getElementById('conC'+cantidadCreada);
let conA = document.getElementById('conA'+cantidadCreada);

let desC = document.getElementById('desC'+cantidadCreada);
let desA = document.getElementById('desA'+cantidadCreada);

let fueC = document.getElementById('fueC'+cantidadCreada);
let fueA = document.getElementById('fueA'+cantidadCreada);

let podC = document.getElementById('podC'+cantidadCreada);
let podA = document.getElementById('podA'+cantidadCreada);

let volC = document.getElementById('volC'+cantidadCreada);
let volA = document.getElementById('volA'+cantidadCreada);

}