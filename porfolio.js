const body = document.getElementById("lenguaje");

const desplegable = document.createElement("select");
body.appendChild(desplegable);
desplegable.classList.add("desplegable");
desplegable.style.width = "200px";
desplegable.style.backgroundColor = "#102a43";
desplegable.style.color = "white";
desplegable.textContent = "Lenguajes";

const opciones = ["Selecciona un lenguaje", "java", "html", "script", "sql", "Mysql"];

opciones.forEach((texto) => {
  const option = document.createElement("option");
  option.value = texto;
  option.textContent = texto;
  desplegable.appendChild(option);
});

desplegable.addEventListener("change", function () {
  const id = this.value;

  if (id !== "Selecciona un lenguaje") {
    const elemento = document.getElementById(id);
    
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });

       elemento.classList.add("resaltado");

      setTimeout(() => {
        elemento.classList.remove("resaltado");
      }, 3000);
    }
  }
});

