function saludar() {
    document.getElementById("saludo").innerHTML =  new Date();
    var tiempo = setTimeout(function () {saludar()}, 1000);
}