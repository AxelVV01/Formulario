
function myfuntion() {
    

    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const numero = document.getElementById("numero").value;
    const ninos = document.getElementById("ninos").value;
    let comida = document.querySelector("#desayuno").value
    let media = document.querySelector("#pension").value;
    let completo = document.querySelector("#completo").value;

    let regimen = [ comida, media, completo]
    


    return alert("Datos de la reserva:" + "\n"+ "Nombre: " + nombre + "\n" +"Apellido: " + apellido + "\n" + "Adultos: " + numero + "\n" + "Niños: " + ninos + "\n" + "Comidas: " + regimen )

  
} 



