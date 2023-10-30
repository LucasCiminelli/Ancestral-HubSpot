//Form Button

const btn = document.getElementById("btn");

//Adding listener to the button

btn.addEventListener("click", (e) => {
  e.preventDefault();

  btn.innerHTML = `<div class="sk-circle">
    <div class="sk-circle1 sk-child"></div>
    <div class="sk-circle2 sk-child"></div>
    <div class="sk-circle3 sk-child"></div>
    <div class="sk-circle4 sk-child"></div>
    <div class="sk-circle5 sk-child"></div>
    <div class="sk-circle6 sk-child"></div>
    <div class="sk-circle7 sk-child"></div>
    <div class="sk-circle8 sk-child"></div>
    <div class="sk-circle9 sk-child"></div>
    <div class="sk-circle10 sk-child"></div>
    <div class="sk-circle11 sk-child"></div>
    <div class="sk-circle12 sk-child"></div>
  </div>`;
 
  //Set 1s delay to the process of the form validation

  setTimeout(() => {
    btn.innerHTML = "ENVIAR";

    const email = document.querySelector("#email");
    const nombre = document.querySelector("#nombre");
    const ubicacion = document.querySelector("#ubicacion");
    const comercio = document.querySelector("#comercio");
    const telefono = document.querySelector("#telefono");
    const mensaje = document.querySelector("#mensaje");

    const emailError = document.querySelector("#email-error");
    const nombreError = document.querySelector("#nombre-error");
    const ubicacionError = document.querySelector("#ubicacion-error");
    const comercioError = document.querySelector("#comercio-error");
    const telefonoError = document.querySelector("#telefono-error");
    const mensajeError = document.querySelector("#mensaje-error");

    emailError.textContent = "";
    nombreError.textContent = "";
    ubicacionError.textContent = "";
    comercioError.textContent = "";

    if (email.value === "") {
      emailError.style.display = "flex";
      emailError.innerHTML = ` <div class="custom-error-arrow"></div> Required <div class="err-msj2"><i class="bi bi-exclamation-circle-fill"></i> </div>
        `;
    } else {
      emailError.style.display = "none";
    }

    if (nombre.value === "") {
      nombreError.style.display = "flex";
      nombreError.innerHTML = `<div class="custom-error-arrow"></div>Required <div class="err-msj2"><i class="bi bi-exclamation-circle-fill"></i> </div>`;
    } else {
      nombreError.style.display = "none";
    }

    if (ubicacion.value === "") {
      ubicacionError.style.display = "flex";
      ubicacionError.innerHTML = `<div class="custom-error-arrow"></div>Required <div class="err-msj2"><i class="bi bi-exclamation-circle-fill"></i> </div> `;
    } else {
      ubicacionError.style.display = "none";
    }

    if (comercio.value === "") {
      comercioError.style.display = "flex";
      comercioError.innerHTML = `<div class="custom-error-arrow"></div>Required <div class="err-msj2"><i class="bi bi-exclamation-circle-fill"></i> </div> `;
    } else {
      comercioError.style.display = "none";
    }

    if (telefono.value === "") {
      telefonoError.style.display = "flex";
      telefonoError.innerHTML = `<div class="custom-error-arrow"></div>Required <div class="err-msj2"><i class="bi bi-exclamation-circle-fill"></i></div> `;
    } else {
      telefonoError.style.display = "none";
    }

    if (mensaje.value === "") {
      mensajeError.style.display = "flex";
      mensajeError.innerHTML = `<div class="custom-error-arrow"></div>Required <div class="err-msj2"><i class="bi bi-exclamation-circle-fill"></i> </div> `;
    } else {
      mensajeError.style.display = "none";
    }
    if (
      mensaje.value !== "" &&
      telefono.value !== "" &&
      comercio.value !== "" &&
      ubicacion.value !== "" &&
      nombre.value !== "" &&
      email.value !== ""
    ) {
      btn.innerHTML = `ENVIADO<i class="bi bi-check-lg"></i>`;
    }
  }, 1000);
});
