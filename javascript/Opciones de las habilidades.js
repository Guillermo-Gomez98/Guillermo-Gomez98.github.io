function eliminar(cantidadCreada) {
  var Nombre = document.getElementById('habilidad' + cantidadCreada);
  let nuevoParrafo = `
    <div id=list>
    </div>
`;

  Nombre.outerHTML = nuevoParrafo;
}

function SumaTMantener (n, cantidadCreada){
  let TMantenimiento = document.getElementById("TurnoHab" + cantidadCreada)
  if(TMantenimiento != null){
    if(TMantenimiento.innerText>=0){
      for(let i=1 ; i<=cantidadCreada ; i++){
        console.log(checkMantenimiento[i],i)
        let TMantenimiento = document.getElementById("TurnoHab" + i)
        if(checkMantenimiento[i] == true){
          TMantenimiento.innerText= +TMantenimiento.innerText +n
        }
        if(checkMantenimiento[i] == false){
          TMantenimiento.innerText= 0}
      }
    }
  }
}

/*function MantenerCuentas(z,t,n) {
  let totalKi = document.querySelector("#KiUtilizado")
  let AcumulacionTabla = document.getElementById(z + "T");
  let KiTotal =document.getElementById("TOTALKI");
  let MaximoKiUtilizable =document.getElementById("KiUtilizado")
  for(let i=1 ; i<=cantidadCreada ; i++){

    if (checkMantenimiento[i] == true) {
      let AcumulacionNecesaria = document.getElementById(z + 'C' + i);
      let Mantenimiento = document.getElementById(z + 'A' + i);
/*como tengo que calcular si o si el total de la suma entre el mantenimiento de la tecnica
y la acumulacion especifica del turno (que es la primera en activarse por obvias razones)
deberia colocar una exepcion para turnos mayores a 0*/
     /* if (checkActivar[i] == true ) {
        if (AcumulacionTabla.innerText - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText >= 0) {
            totalKi.innerHTML = +totalKi.innerHTML + +Mantenimiento.innerText
            AcumulacionTabla.innerText = AcumulacionTabla.innerText - +Mantenimiento.innerText
            Guardado (t, Mantenimiento, AcumulacionNecesaria, i)
        }
      }
      else{
        if (AcumulacionTabla.innerText - +Mantenimiento.innerText >= 0) {
          totalKi.innerHTML = +totalKi.innerHTML + +Mantenimiento.innerText
          AcumulacionTabla.innerText = AcumulacionTabla.innerText - +Mantenimiento.innerText
          Guardado (t, Mantenimiento, AcumulacionNecesaria, i)
          if(+MaximoKiUtilizable.innerText >= +KiTotal.innerText){
            //Agregar avizo de error 2 "Ki utilizado maximo reservas de ki maximas utilizadas: se desactivaran todas las avilidades. debeeras rellenar tus reservas de nuevo "
            Reverse(t)
            
          }
        }
      }
      if(AcumulacionTabla.innerText - +Mantenimiento.innerText < 0){
        let TMantenimiento = document.getElementById("TurnoHab" + i)
        TMantenimiento = (+TMantenimiento.innerHTML + n)*0
        checkMantenimiento[i] = false
      }
    }
  }
}*/

function EfectoActivar(cantidadCreada, z, t) {
  for(let i=1 ; i<=cantidadCreada ; i++){
    if(checkActivar[i] == true){
    let AcumulacionNecesaria = document.getElementById(z + 'C' + i);
    let AcumulacionTabla = document.getElementById(z + "T");
      if (AcumulacionTabla.innerText - +AcumulacionNecesaria.innerText >= 0) {
        Tipo1(t, AcumulacionNecesaria, AcumulacionTabla, i)
      }
      else {
        //que desencadene error
        console.log('viste, no cuidas el ki acumulado y ahora no tenes con que zarparle al tipo')
      }
    }
  }
}

function Tipo1(t, AcumulacionNecesaria, AcumulacionTabla, i) {
  let totalKi = document.querySelector("#KiUtilizado")
  AcumulacionTabla.innerText = AcumulacionTabla.innerText - +AcumulacionNecesaria.innerText
  totalKi.innerHTML = +totalKi.innerHTML + +AcumulacionNecesaria.innerText
  Guardado (t, AcumulacionNecesaria)
}

function MantenerCuentas(z,t,n) {
  let totalKi = document.querySelector("#KiUtilizado")
  let AcumulacionTabla = document.getElementById(z + "T");
  let KiTotal =document.getElementById("TOTALKI");
  let MaximoKiUtilizable =document.getElementById("KiUtilizado")
  for(let i=1 ; i<=cantidadCreada ; i++){
    for (var S=1 ; S<=5 ;S++){
      console.log(S)}
      if (checkMantenimiento[i] == true) {
        let AcumulacionNecesaria = document.getElementById(z + 'C' + i);
        let Mantenimiento = document.getElementById(z + 'A' + i);
/*como tengo que calcular si o si el total de la suma entre el mantenimiento de la tecnica
y la acumulacion especifica del turno (que es la primera en activarse por obvias razones)
deberia colocar una exepcion para turnos mayores a 0*/
        if (checkActivar[i] == true ) {
          if (AcumulacionTabla.innerText - +AcumulacionNecesaria.innerText - +Mantenimiento.innerText >= 0) {
            totalKi.innerHTML = +totalKi.innerHTML + +Mantenimiento.innerText
            AcumulacionTabla.innerText = AcumulacionTabla.innerText - +Mantenimiento.innerText
            Guardado (t, Mantenimiento, AcumulacionNecesaria, i)
          }
        }
        else{
          if (AcumulacionTabla.innerText - +Mantenimiento.innerText >= 0) {
            totalKi.innerHTML = +totalKi.innerHTML + +Mantenimiento.innerText
            AcumulacionTabla.innerText = AcumulacionTabla.innerText - +Mantenimiento.innerText
            Guardado (t, Mantenimiento, AcumulacionNecesaria, i)
            if(+MaximoKiUtilizable.innerText >= +KiTotal.innerText){
            //Agregar avizo de error 2 "Ki utilizado maximo reservas de ki maximas utilizadas: se desactivaran todas las avilidades. debeeras rellenar tus reservas de nuevo "
            Reverse(t)            
            }
          }
        }
        if(AcumulacionTabla.innerText - +Mantenimiento.innerText < 0){
          let TMantenimiento = document.getElementById("TurnoHab" + i)
          TMantenimiento = (+TMantenimiento.innerHTML + n)*0
          checkMantenimiento[i] = false
          }
      }
    
  }
}