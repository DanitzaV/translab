$(document).ready(function () {
    $('.sidenav').sidenav();
    $('select').formSelect();
    $('.collapsible').collapsible();
  });
let useremail;

firebase.auth().onAuthStateChanged((user) => {
  uiduser = user.uid;
  useremail = user.email;
  if (user) {
    console.log(user);


  }
  firebase.database().ref(`bips/${user.uid}/numBip/`)
    .on('child_added', (bips) => { //Para escuchar datos más veces o doblegados
      console.log(bips.val())
      let selectBip = document.getElementById('selectBip');
      let option = document.createElement('option');
      const numbip = document.createTextNode(bips.val());
      option.appendChild(numbip);
      // let option = `<option> ${bips.val()} </option>`;
      selectBip.appendChild(option)
    });
  inputGroupSelect02.innerHTML += `<option value="769">Horario Alto</option>
  <option value="680">Horario Medio</option>
  <option value="630">Horario Bajo</option>
   `;
});


window.mostrarSaldo = (i) => {
  console.log(i);
  saldoTotal.innerHTML = `<div class="col s12 col m12 col l12 col xl12 contSaldo center-align" >
      <h5>Saldo Total</h5>
     <p>${i}</p>
     </div>`;

}

window.mostrarTarifa = (i, e) => {
  console.log(i, e);
  tarifatotal.innerHTML = `<div class="col s12 col m12 col l12 col xl12 contSaldo center-align" >
  <h5>Costo pasaje</h5>
  <p>$ ${e}</p>
  </div>
  <div class="col l12 col s12 col m12 col xl12 contSaldo center-align" >
  <h5>Costo total</h5>
  <p>$ ${i}</p>
  </div>`;
}