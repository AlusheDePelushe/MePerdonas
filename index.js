/*var botones = document.querySelectorAll(".boton").length;

for (var i = 1;i<=botones; i++){
    
    document.querySelectorAll(".boton")[i].addEventListener("mouseover", function(){
        this.classList.add("ocultar");
        document.querySelectorAll(".boton")[i+1].classList.remove("ocultar")
    });

    if (i > 1){
        document.querySelectorAll(".boton")[i].classList.add("ocultar");
    }
}*/

var botones = document.querySelectorAll(".boton").length;

for (let i = 1; i < botones; i++) {
    document.querySelectorAll(".boton")[i].addEventListener("mouseover", function() {
        this.classList.add("ocultar");
        if (i + 1 < botones) {
            document.querySelectorAll(".boton")[i + 1].classList.remove("ocultar");
        } else if (i === 3) {
            document.querySelectorAll(".boton")[1].classList.remove("ocultar");            
        }
    });

    if (i > 1) {
        document.querySelectorAll(".boton")[i].classList.add("ocultar");
    }
}

document.querySelectorAll(".boton")[0].addEventListener("click", function() {
    alert("Muchas gracias, yo tambien te amo")
});