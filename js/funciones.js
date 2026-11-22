
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => new bootstrap.Tooltip(el));
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => new bootstrap.Popover(el));
  const form = document.querySelector("#suscripcion-form");
  if(form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      if(!form.checkValidity()){form.classList.add("was-validated");return;}
      document.querySelector("#mensaje-suscripcion").innerHTML =
        '<div class="alert alert-success mt-3" role="alert">¡Registro recibido! Este formulario es una demostración académica; no se enviaron datos a un servidor.</div>';
      form.reset(); form.classList.remove("was-validated");
    });
  }
  const contact = document.querySelector("#contacto-form");
  if(contact){
    contact.addEventListener("submit", function(e){
      e.preventDefault();
      if(!contact.checkValidity()){contact.classList.add("was-validated");return;}
      document.querySelector("#mensaje-contacto").innerHTML =
        '<div class="alert alert-success mt-3">Mensaje de demostración registrado correctamente.</div>';
      contact.reset(); contact.classList.remove("was-validated");
    });
  }
});
