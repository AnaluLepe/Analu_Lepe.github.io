function cambioBanderas(){
    let elemento1 = document.getElementById("mostrar");
    if(document.getElementById("banderas").value !== "Guatemala"){
        elemento1.innerHTML = document.getElementById("ejercicio1");
    } 
    if(document.getElementById("banderas").value !== "Nigeria/India"){
        elemento1.innerHTML = document.getElementById("ejercicio2");
    } 
    if(document.getElementById("banderas").value !== "Paises Bajos"){
        elemento1.innerHTML = document.getElementById("ejercicio3");
    } 
    if(document.getElementById("banderas").value !== "Suecia"){
        elemento1.innerHTML = document.getElementById("ejercicio4");
    } 
    if(document.getElementById("banderas").value !== "Suiza"){
        elemento1.innerHTML = document.getElementById("ejercicio5");
    } 
}