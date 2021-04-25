var getData = function(){

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var numero = document.getElementById("numero").value;



    if (nombre == "") {
        document.getElementById("nombre").focus;
        alert("ingrese un nombre")
    } else {
        if (correo == "") {
            document.getElementById("correo").focus;
            alert("ingrese un correo")
            } else {
                if (numero == "") {
                    document.getElementById("numero").focus;
                    alert("ingrese un Telefono")
                } else {
                    console.log(nombre+" "+correo+" "+numero);
                    document.getElementById("nombre").value="";
                    document.getElementById("correo").value="";
                    document.getElementById("numero").value="";
                }
            }
    }

  
}
