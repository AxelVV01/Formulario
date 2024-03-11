function myfuntion() {
    

    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const numero = document.getElementById("numero").value;
    const ninos = document.getElementById("ninos").value;


    

    let = comidas = ""
    
    let radios = document.getElementsByName("regimen");

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            comidas = radios[i].value
        }
        
    }

    return alert("Datos de la reserva:" + "\n"+ "Nombre: " + nombre + "\n" +"Apellido: " + apellido + "\n" + "Adultos: " + numero + "\n" + "Niños: " + ninos + "\n" + "Comidas: " + comidas)
  
} 
console.log(myfuntion)