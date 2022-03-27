function header(element) {
    const componenteNodo = document.createElement("header");
    componenteNodo.className = "header";
    componenteNodo.innerHTML = `
    <div class="izquierda">
    <a href="http://127.0.0.1:8080/">
    <img class="logo-inicio" src="./components/header/media/logo-footer.png" alt="" />
    </a>
</div>
<div class="derecha">
<button class="abre-ventana">Open</button>
<div class="ventana">
    <button class="cierra-ventana">Close</button>
    <div class="ventana-contenido">Contenido</div>
    
</div>
    
    <menu class="menu">
        <div>About Me</div>
        <div>Services</div>
        <div>Write Me</div>
    </menu>
</div>
   `;
    element.insertAdjacentElement("beforebegin", componenteNodo);

    function ventanaMenu() {
        const botonAbreVentana = document.querySelector(".abre-ventana");
        const botonCierraVentana = document.querySelector(".cierra-ventana");
        const ventana = document.querySelector(".ventana");

        botonAbreVentana.addEventListener("click", () => {
            ventana.style.display = "inherit";
        });

        botonCierraVentana.addEventListener("click", () => {
            ventana.style.display = "none";
        });
    }
    ventanaMenu();

}
