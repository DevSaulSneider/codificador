function encriptar(){
    var passSistema = "rf7Gx4ML4Lt";
    var mensajeError = "Error en la contraseña, vuelve intentarlo";
    var mensaje = document.getElementById("mensaje").value;
    var password = document.getElementById("password").value;

    // alert(mensaje + " "+password);

    if (passSistema == password) {
        // alert("contraseña correcta");
        document.getElementById("error").innerHTML = "";
        var mensajeEncriptado = btoa(mensaje);
        // alert(mensajeEncriptado);
        document.getElementById("demo1").innerHTML = mensajeEncriptado;

    } else {
        // alert("error");
        document.getElementById("demo1").innerHTML = "";
        document.getElementById("error").innerHTML = mensajeError;
    }

    
};

function desencriptar(){
    var mensajeCodigo = document.getElementById("msgCodigo").value;
    var mensajeDesencriptado = atob(mensajeCodigo);

    document.getElementById("demo2").innerHTML = mensajeDesencriptado;
};