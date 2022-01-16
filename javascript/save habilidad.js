//creacion lista de habilidades
//''C es la variable de ki requerido de cada atributo
// '' A el la acumulacion de la habilidad
var checkCantidadCreada = Array (20).fill(false)
var cantidadCreada = 0;

function crear() {
  cantidadCreada++;
  let NumeroDeHabilidad = cantidadCreada
  const agiC = document.getElementById("Agi").value;
  const conC = document.getElementById("Con").value;
  const desC = document.getElementById("Des").value;
  const fueC = document.getElementById("Fue").value;
  const podC = document.getElementById("Pod").value;
  const volC = document.getElementById("Vol").value;
  const agiA = document.getElementById("AgiMant").value;
  const conA = document.getElementById("ConMant").value;
  const desA = document.getElementById("DesMant").value;
  const fueA = document.getElementById("FueMant").value;
  const podA = document.getElementById("PodMant").value;
  const volA = document.getElementById("VolMant").value;
  var nombre = document.getElementById("hab").value;
  let descripcion = document.getElementById("descripcion").value;
  var lista = document.getElementById("list");
  if (nombre === "") {
    nombre = "Ponele nombre gil";
  }
  if (descripcion === "") {
    descripcion = "-";
  }
  let tecnicas = `
  <div class='habilidad  fondo'  id= "habilidad${cantidadCreada}" >
    <div class="">
      <div class="form-inline ml-3">
        <h2>Nombre:  </h2>
        <p class'${nombre}' id="${cantidadCreada}Nombre">${nombre}</p>
      </div>
      <div id'togle-button'>
        <a class='iconRed mr'>
          <i class="fas fa-angle-down icon right"></i>
        </a>
          <div class'togle-btn'>
            <div class="form-inline">
              <h4>Descripcion: </h4>
              <p>${descripcion.value}</p>
            </div>
            <div class="table2 table ml-4">
              <div class='row tablita'>
                <div class='col ml-3'></div>
                <div class='col'>Ki</div>
                <div class='col'>Mant.</div>
              </div>
              <div class='row deg1'>
                <div class='col'>AGI.</div>
                <div class='col' id='agiC${cantidadCreada}'>${agiC}</div>
                <div class='col' id='agiA${cantidadCreada}'>${agiA}</div>
              </div>
              <div class='row deg2'>
                <div class='col'>CON.</div>
                <div class='col' id='conC${cantidadCreada}'>${conC}</div>
                <div class='col' id='conA${cantidadCreada}'>${conA}</div>
              </div>
              <div class='row deg1'>
                <div class='col'>DES.</div>
                <div class='col' id='desC${cantidadCreada}'>${desC}</div>
                <div class='col' id='desA${cantidadCreada}'>${desA}</div>
              </div >
              <div class='row deg2'>
                <div class='col'>FUE.</div>
                <div class='col' id='fueC${cantidadCreada}'>${fueC}</div>
                <div class='col' id='fueA${cantidadCreada}'>${fueA}</div>
              </div>
              <div class='row deg1'>
                <div class='col '>POD.</div>
                <div class='col' id='podC${cantidadCreada}'>${podC}</div>
                <div class='col' id='podA${cantidadCreada}'>${podA}</div>
              </div>
              <div class='row deg2'>
                <div class='col'>VOL.</div>
                <div class='col' id='volC${cantidadCreada}'>${volC}</div>
                <div class='col' id='volA${cantidadCreada}'>${volA}</div>
              </div>
              <div class='row deg3'>
                <div class='col'>Turno</div>
                <div class='col ' id='TurnoHab${cantidadCreada}'>0</div>
              </div>
            </div>
        </div>
      </div>
      <div class='row ml-0'>
        <a onclick="Activar(${NumeroDeHabilidad})"class="action sel ml-2 mt-2" > Activar </a>
        <a onclick="Mantener(${NumeroDeHabilidad})" class="action sel ml-2 mt-2" > Mantener </a>
        <a onclick="eliminar(${NumeroDeHabilidad})" class=" danger sel ml-2 mt-2 "> Eliminar </a>
        </div>
      </div>
    </div>
  </div>
  <div id=list>
  </div>`;
  lista.outerHTML = tecnicas;
  $("#myModal").modal("hide");
  //Borrado();
}

/*function Borrado(){
  var nombre = document.getElementById("hab").value;
  let descripcion = document.getElementById("descripcion").value;
  descripcion.value='';
  nombre='';
  console.log(descripcion,nombre);
}*/
// <a onclick="Mantener(${cantidadCreada})" class=" action sel ml-2 mt-2"> Mantener </a>