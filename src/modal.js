
window.obtenerDatos = (input, select) => {

    let urls
    if (input == '') {
        urls = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${select}`;

    } else {
        urls = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${input}`;
        // document.getElementById("inputBip").value = "";


    }
    return fetch(urls).then(res => res.json()).then(resultado => {
        window.tarjeta(resultado);


    })
}
window.obtenerDatosTarifa = (input, select) => {

    let urls
    if (input == '') {
        urls = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${select}`;

    } else {
        urls = `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${input}`;
        document.getElementById("inputBip").value = "";


    }
    return fetch(urls).then(res => res.json()).then(resultado => {
        let input = document.getElementById('inputGroupSelect02').value;
        window.saldo(resultado.saldoTarjeta, input);
    })
}
window.saldo = (infoBip, selectinput) => {
    saldomostrar = infoBip;
    let saldo = saldomostrar.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "");
    let saldo_final = (parseInt(saldo) - selectinput);

    return saldo_final,window.mostrarTarifa(saldo_final, selectinput);
}

window.agregarTarjeta = () => {
    const numeroBip = icon_telephone.value;
    if (numeroBip == '' ) {
    return  alert('ingrese el numero de bip');
    } else {
      return firebase.database().ref(`bips/${uiduser}`).child(`numBip`).push(numeroBip);
      document.getElementById('icon_telephone').value = '';
    }
  }

 window.loginfirebase = (emailValue,passwordValue) => {
        
        firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
            .then(() => {

                location = 'html/perfil.html';
                console.log("Usuario con login exitoso");
            })
            .catch((error) => {
                console.log("Error de firebase > " + error.code);
                console.log("Error de firebase, mensaje > " + error.message);
            });


    }
    

window.cerrarSesion = ()=> {
    firebase.auth().signOut()
        .then(() => {
            location = '../index.html';
        })
        .catch();
}

window.registrofirebase = (emailValue,passwordValue) => {
   
    if ( passwordValue.length <= 8  && passwordValue.length > 3) {
        
      
            firebase.auth().createUserWithEmailAndPassword(emailValue, number)
            .then((response) => {
            
                location = '../../dist/index.html'
                console.log('usuario registrado');
            })
            .catch((error) => {
               console.log('no entras')
                console.log("Error de firebase > Código > " + error.code);
                console.log("Error de firebase > Mensaje > " + error.message);
            });
       
    }else{
        alert('email no valido o password mayor de 8 caracteres')
    }
}


