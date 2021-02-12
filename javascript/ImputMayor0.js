
// tomar los elementos en tabla (con el menor dato posible) y despues usar una caracteristica facil de manipular---
// probar con dos documentos, tal vez no puede agarrar varios a la vez
const contenedor = document.getElementById('imputmayorcero1');
console.log(contenedor)



contenedor.addEventListener('keydown', function(evento) {
  const elemento = evento.target;
  if (elemento.className === 'trans') {
    const teclaPresionada = evento.key;
    const teclaPresionadaEsUnNumero =
      Number.isInteger(parseInt(teclaPresionada));
    const sePresionoUnaTeclaNoAdmitida =
      teclaPresionada != 'ArrowDown' &&
      teclaPresionada != 'ArrowUp' &&
      teclaPresionada != 'ArrowLeft' &&
      teclaPresionada != 'ArrowRight' &&
      teclaPresionada != 'Backspace' &&
      teclaPresionada != 'Delete' &&
      teclaPresionada != 'Enter' &&
      !teclaPresionadaEsUnNumero;
    const comienzaPorCero = elemento.value.length === 0 && teclaPresionada == 0;

    if (sePresionoUnaTeclaNoAdmitida || comienzaPorCero) {
      evento.preventDefault(); 
    }
  }
});
/*<div id = "contenedor-campos">
  <input class="campo-numerico" type="number" min="1" pattern="^[0-9]+" onpaste="return false;" onDrop="return false;" autocomplete=off>
  <input class="campo-numerico" type="number" min="1" pattern="^[0-9]+" onpaste="return false;" onDrop="return false;" autocomplete=off>
  <input class="campo-numerico" type="number" min="1" pattern="^[0-9]+" onpaste="return false;" onDrop="return false;" autocomplete=off>
</div>*/
//onchange 

/*const contenedor = document.getElementById('contenedor-campos');

contenedor.addEventListener('keydown', function(evento) {
  const elemento = evento.target;
  if (elemento.className === 'campo-numerico') {
    const teclaPresionada = evento.key;
    const teclaPresionadaEsUnNumero =
      Number.isInteger(parseInt(teclaPresionada));
      console.log(contenedor)
    const sePresionoUnaTeclaNoAdmitida = 
      teclaPresionada != 'ArrowDown' &&
      teclaPresionada != 'ArrowUp' &&
      teclaPresionada != 'ArrowLeft' &&
      teclaPresionada != 'ArrowRight' &&
      teclaPresionada != 'Backspace' &&
      teclaPresionada != 'Delete' &&
      teclaPresionada != 'Enter' &&
      !teclaPresionadaEsUnNumero;
    const comienzaPorCero = 
      elemento.value.length === 0 &&
      teclaPresionada == 0;

    if (sePresionoUnaTeclaNoAdmitida || comienzaPorCero) {
      evento.preventDefault(); 
    }
  }
});




