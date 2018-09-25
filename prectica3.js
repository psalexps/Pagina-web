
document.getElementById('dni').value = readCookie("Dni");
document.getElementById('nombre').value = readCookie("Nombre");
document.getElementById('url').value = readCookie("Url");
document.getElementById('ip').value = readCookie("Ip");


function practica3(dni,nombre,url,ip) {

    try {

        var expiredateC = new Date(2018,8,25,12,15).toUTCString();

        var expreDni = new RegExp("^[0-9]{8}[A-z]{1}$");

        if (expreDni.test(dni)) {

            var cookivalue = dni;

            document.cookie = "Dni=" + encodeURIComponent(cookivalue) + "; expires=" + expiredateC;

            document.getElementById('dni').style.backgroundColor = 'white';
        }
        else {

            document.getElementById('dni').style.backgroundColor = 'red';
            alert("Dni no válido");
        }

        var expreNombre = new RegExp("^[A-Z]{1}[A-z0-9]{2,}$")

        if (expreNombre.test(nombre)){

            cookivalue = nombre;

            document.cookie = "Nombre=" + encodeURIComponent(cookivalue) + "; expires=" + expiredateC;

            document.getElementById('nombre').style.backgroundColor = 'white';
        }
        else {

            document.getElementById('nombre').style.backgroundColor = 'red';
            alert("Nombre no válido")
        }

        var expreUrl = new RegExp("^(www.)[A-z]{1,}(.)[A-z]{1,}$");

        if (expreUrl.test(url)){

            cookivalue = url;

            document.cookie = "Url=" + encodeURIComponent(cookivalue) + "; expires=" + expiredateC;

            document.getElementById('url').style.backgroundColor = 'white';
        }
        else {

            document.getElementById('url').style.backgroundColor = 'red';
            alert("Url no válido")
        }

        var expreIp = new RegExp("^[0-9]{1,3}(.)[0-9]{1,3}(.)[0-9]{1,3}(.)[0-9]{1,3}$");

        if (expreIp.test(ip)){

            cookivalue = ip;

            document.cookie = "Ip=" + encodeURIComponent(cookivalue) + "; expires=" + expiredateC;

            document.getElementById('ip').style.backgroundColor = 'white';
        }
        else {

            document.getElementById('ip').style.backgroundColor = 'red';
            alert("Ip no válido")
        }

    }
    catch (err){
        alert("Error");
    }

}

function readCookie(name) {

    var nameCo = name + "=";
    var ca = document.cookie.split(';');


    for (var i=0; i < ca.length; i++){

        var c = ca[i];
        while (c.charAt(0)==' '){
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameCo) == 0){
            return decodeURIComponent(c.substring(nameCo.length,c.length));
        }
    }

    return null;
}


















