document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.getElementById("form-contacto");
    const confirmacionContacto = document.getElementById("confirmacion-contacto");

    formContacto.addEventListener("submit", (event) => {
        event.preventDefault(); 
        confirmacionContacto.style.display = "block";
        formContacto.reset();
        setTimeout(() => {
            confirmacionContacto.style.display = "none";
        }, 4000);
    });
});
