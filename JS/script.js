
function myfuntion() {
    

    
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const numero = document.getElementById("numero").value;
    const ninos = document.getElementById("ninos").value;
    let comidas = document.getElementsByName("regimen").value

    for (let i = 0; i < comidas.length; i++) {
        const element = array[i];
        
    }

    


    return alert("Datos de la reserva:" + "\n"+ "Nombre: " + nombre + "\n" +"Apellido: " + apellido + "\n" + "Adultos: " + numero + "\n" + "Niños: " + ninos + "\n" + "Comidas: " + regimen )

  
} 



