
function registro() {
  const emailValue = email.value;
  const passwordValue = password.value;
  window.registrofirebase(emailValue,passwordValue)
}
function login() {
  const emailValue = email.value;
  const passwordValue = password.value
  window.loginfirebase(emailValue,passwordValue)
}

function verSaldos() {
  let selectinput = document.getElementById('selectBip').value;
  let inputvalue = document.getElementById('inputBip').value;
  window.obtenerDatos(inputvalue, selectinput)
  let tarifa = document.getElementById('saldoTotal');
  tarifa.innerHTML = `<div class="col s12 col m12 col l12 col xl12 contSaldo center-align" >
  <h5>Saldo Total</h5>
  <div class="progress">
  <div class="indeterminate"></div>
  </div>
  </div>`;
}
function calcularTarifa() {
  let selectinput = document.getElementById('selectBip').value;
  let inputvalue = document.getElementById('inputBip').value;
  window.obtenerDatosTarifa(inputvalue, selectinput)
  let tarifa = document.getElementById('tarifatotal');
  tarifa.innerHTML = `<div class="col s12 col m12 col l12 col xl12 contSaldo center-align" >
  <h5>Costo Pasaje</h5>
  <div class="progress">
  <div class="indeterminate"></div>
  </div>
  </div>
  <div class="col s12 col m12 col l12 col xl12 contSaldo center-align" >
  <h5>Costo Total</h5>
  <div class="progress">
  <div class="indeterminate"></div>
  </div>
  </div>`;
}


window.tarjeta = (i) => {
  return window.mostrarSaldo(i.saldoTarjeta)
}