const states = {
    nombre: false,
    correo: false,
    telefono: false
  };

const form = document.forms.frmContact;
const { nombre, correo, telefono } = form.elements;

const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

nombre.addEventListener('keyup', validarNombre);
nombre.addEventListener('blur', validarNombre);
nombre.addEventListener('focus', reiniciarNombre);
correo.addEventListener('keyup', validarCorreo);
correo.addEventListener('blur', validarCorreo);
correo.addEventListener('focus', reiniciarCorreo);
telefono.addEventListener('keyup', validarTelefono);
telefono.addEventListener('blur', validarTelefono);
telefono.addEventListener('focus', reiniciarTelefono);

function validarNombre(e) {
    const expNombre = /[a-z\s]{4,}/i; 
    const inputNombre = e.target; 
    const grupo = inputNombre.closest(".input-grp");
    const icono = grupo.querySelector(".fas");
    const mensaje = grupo.querySelector(".input-error");
    if(expNombre.test(inputNombre.value)){
      //correcto
      grupo.classList.remove("with-error");
      icono.classList.remove("fa-times-circle");
      icono.classList.add("fa-check-circle");
      mensaje.classList.add("hidden");
      states.nombre = true;
    }
    else{
      //incorrecto
      grupo.classList.add("with-error");
      icono.classList.add("fa-times-circle");
      icono.classList.remove("fa-check-circle");
      mensaje.classList.remove("hidden");
      states.nombre = false;
    }
  }
  
  function reiniciarNombre(){
    const inputNombre = document.getElementById("nombre");
    const grupo = inputNombre.closest(".input-grp");
    const icono = grupo.querySelector(".fas");
    const mensaje = grupo.querySelector(".input-error");
    grupo.classList.remove("with-error");
    icono.classList.remove("fa-times-circle");
    icono.classList.remove("fa-check-circle");
    mensaje.classList.add("hidden");
    states.nombre = false;
  }

  function validarCorreo(e) {
    const expCorreo = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; 
    const inputCorreo = e.target; 
    const grupo = inputCorreo.closest(".input-grp");
    const icono = grupo.querySelector(".fas");
    const mensaje = grupo.querySelector(".input-error");
    if(expCorreo.test(inputCorreo.value)){
      //correcto
      grupo.classList.remove("with-error");
      icono.classList.remove("fa-times-circle");
      icono.classList.add("fa-check-circle");
      mensaje.classList.add("hidden");
      states.correo = true;
    }
    else{
      //incorrecto
      grupo.classList.add("with-error");
      icono.classList.add("fa-times-circle");
      icono.classList.remove("fa-check-circle");
      mensaje.classList.remove("hidden");
      states.correo = false;
    }
  }
  
  function reiniciarCorreo(){
    const inputCorreo = document.getElementById("correo") 
    const grupo = inputCorreo.closest(".input-grp");
    const icono = grupo.querySelector(".fas");
    const mensaje = grupo.querySelector(".input-error");
    grupo.classList.remove("with-error");
    icono.classList.remove("fa-times-circle");
    icono.classList.remove("fa-check-circle");
    mensaje.classList.add("hidden");
    states.correo = false;
  }

  function validarTelefono(e) {
    const expTelefono = /^\d{10,13}$/; 
    const inputTelefono = e.target; 
    const grupo = inputTelefono.closest(".input-grp");
    const icono = grupo.querySelector(".fas");
    const mensaje = grupo.querySelector(".input-error");
    if(expTelefono.test(inputTelefono.value)){
      //correcto
      grupo.classList.remove("with-error");
      icono.classList.remove("fa-times-circle");
      icono.classList.add("fa-check-circle");
      mensaje.classList.add("hidden");
      states.telefono = true;
    }
    else{
      //incorrecto
      grupo.classList.add("with-error");
      icono.classList.add("fa-times-circle");
      icono.classList.remove("fa-check-circle");
      mensaje.classList.remove("hidden");
      states.telefono = false;
    }
  }
  
  function reiniciarTelefono(){
    const inputTelefono = document.getElementById("telefono") 
    const grupo = inputTelefono.closest(".input-grp");
    const icono = grupo.querySelector(".fas");
    const mensaje = grupo.querySelector(".input-error");
    grupo.classList.remove("with-error");
    icono.classList.remove("fa-times-circle");
    icono.classList.remove("fa-check-circle");
    mensaje.classList.add("hidden");
    states.telefono = false;
  }

   
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    let datos = new FormData(formulario)
   
    fetch('./php/enviar.php', {
      method: 'POST',
      body: datos
    })
    
    if ( states.nombre && states.correo && states.telefono){      
      formulario.reset(); 
      reiniciarNombre();
      reiniciarCorreo();
      reiniciarTelefono();
      document.getElementById("successfulDelivery").classList.remove('hidden');
      setTimeout(() =>{
        document.getElementById("successfulDelivery").classList.add('hidden');
      }, 5000)
    }else{
      document.getElementById("errorDelivery").classList.remove('hidden');
      setTimeout(() =>{
        document.getElementById("errorDelivery").classList.add('hidden');
      }, 5000)
    }
  });

