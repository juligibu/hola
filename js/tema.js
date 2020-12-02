var temaActual = "claro";

function cambiarTema() {
    var body = document.getElementById("page-body");

    if(temaActual === "oscuro") {
        body.classList.remove("dark");
        temaActual = "claro";
    } else 
    {
        body.classList.add("dark");
        temaActual = "oscuro";
    } 
}