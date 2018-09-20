function practica2(n1) {
    
    switch (parseInt(n1)) {

        case 1:
            fun1();
            break;

        case 2:
            fun2();
            break;

        case 3:
            fun3();
            break;

        case 4:
            fun4();
            break;

        case 5:
            fun5();
            break;

        case 6:
            fun6();
            break;

        case 7:
            fun7();
            break;

        case 8:
            fun8();
            break;

        case 9:
            fun9();
            break;

        case 10:
            fun10();
            break;

        case 11:
            fun11();
            break;

        case 12:
            fun12();
            break;

    }
}

function fun1() {

    try {

        var cadena = prompt("Introduce texto").replace(/ /g, "");

        if (cadena==""){
            throw "empty";
        }

        var expreg = new RegExp("^[A-Za-z]*$");

        if (expreg.test(cadena)) {

            var mayu = 0;
            var minu = 0;

            for (i in cadena) {

                if (cadena[i] == cadena[i].toUpperCase()) {

                    mayu++;
                }
                else if (cadena[i] == cadena[i].toLowerCase()) {

                    minu++;
                }
            }

            alert("Esta cadena tiene " + mayu + " letras mayúsculas y " + minu + " minusculas");
        }
        else {

            alert("No puedes introducir números");
        }
    }
    catch (err){
        alert("Cadena vacia");
    }
}

function fun2() {

    try {

        var cadena = prompt("Introduce texto").replace(/ /g, "");

        if (cadena==""){
            throw "empty";
        }

        alert(cadena.substr(0, cadena.length / 2) + "\n" + cadena.substr(cadena.length / 2, cadena.length));
    }
    catch (err){
        alert("Cadena vacia");
    }
}

function fun3() {

    try {

        var cadena = prompt("Introduce texto").replace(/ /g, "");

        if (cadena == "") {
            throw "empty";
        }

        cadena = cadena.toLowerCase();

        var si = "";

        for (var i = cadena.length - 1; i >= 0; i--) {

            si += cadena[i];
        }

        if (si == cadena) {

            alert("Es un políndromo");
        }
        else {
            alert("No es un políndromo");
        }
    }
    catch (err){
        alert("Cadena vacia");
    }
}

function fun4() {

        var sueldo = parseFloat(prompt("Introduce sú sueldo"));

        var años = parseInt(prompt("Años que lleva en la empresa"));

        var expreg = new RegExp("^[0-9]*$");

        if (expreg.test(sueldo) && expreg.test(años)) {

            if (sueldo < 500 && años >= 10) {

                sueldo += sueldo * 20 / 100;
            }
            else if (sueldo < 500 && años < 10) {

                sueldo += sueldo * 10 / 100;
            }

            alert("Su nuevo sueldo es " + sueldo);
        }
        else {
            alert("Introduce un número por favor");
        }


}

function fun5() {

    var valor = Math.round(Math.random() * (0+1000)+0);

    var expreg = new RegExp("^[0-9]*$");

    do {

        var n1 = parseInt(prompt("Introduce el numero"));

        if (expreg.test(n1)) {

            if (valor > n1) {

                alert("Es un numero mayor")
            }
            else if (valor < n1) {

                alert("Es un numero menor")
            }
        }
        else {
            alert("Introduce un número por favor");
        }

    }
    while (valor != n1);

    alert("Encontraste el numero felicidades");
}

function fun6() {

    do {

        var valor = Math.round(Math.random() * (8998) + 1001);

        valor = valor.toString();
    }
    while(valor.indexOf(valor.charAt(3))!=3 || valor.indexOf(valor.charAt(2))!=2 || valor.indexOf(valor.charAt(1))!=1);

    do {

        do {

            var n1 = prompt("Introduce un numero de 4 cifras");
        }
        while (n1 != null && n1.indexOf(n1.charAt(3))!=3 || n1.indexOf(n1.charAt(2))!=2 || n1.indexOf(n1.charAt(1))!=1);

        var heridos = 0;
        var muertos = 0;

        for (i in n1){

            for (x in valor){

                if (valor[x].indexOf(n1[i])==0 && i==x){

                    muertos++;
                }
                else if (valor[x].indexOf(n1[i])==0 && i!=x){

                    heridos++;
                }
            }
        }

        alert("Heridos : "+heridos+"\nMuertos : "+muertos);

    }
    while (valor != n1);

    alert("Ganaste!!!");

}

function fun7() {

    try {

        var suma = 0;

        do {

            var n1 = parseFloat(prompt("Introduce un número"));

            suma+=n1;
        }
        while (confirm("¿Sumar otro número?")==1);

        alert(suma);
    }
    catch (err){}
}

function fun8() {

    try {

        var neg = 0;
        var pos = 0;
        var nul = 0;

        do {

            var n1 = parseFloat(prompt("Introduce un número"));

            if (n1 >= 0){

                pos++;
            }
            else if (n1 < 0){

                neg++;
            }
            else {

                nul++;
            }

        }
        while (confirm("¿Otro número❤?")==1);

        alert("Positivos : "+pos+"\nNegativos : "+neg+"\nNulos : "+nul);

    }
    catch (err){}
}

function fun9() {

    try {

        var mayor;
        var menor;

        do {

            var n1 = parseFloat(prompt("Introduce un número"));

            var expreg = new RegExp("^[0-9]*$");

            if (expreg.test(n1)) {

                if (mayor == undefined && menor == undefined) {
                    mayor = n1;
                    menor = n1;
                }
                else if (n1 > mayor) {
                    menor = mayor;
                    mayor = n1;
                }
                else if (n1 < menor) {
                    menor = n1;
                }
            }
            else {
                alert("Introduce un número");
            }

        }
        while (confirm("¿Otro número?")==1)

        alert("Mayor : "+mayor+"\nMenor : "+menor);
    }
    catch (err){}
}

function fun10() {

    try {

        var cantidadD = 0;
        var fechaI = new Date(2017,00,01);
        var fechaF = new Date(2050,11,31);

        for (var x=fechaI.getYear(); x<=fechaF.getYear(); x++){

            if (fechaI.getDay()==0){

                cantidadD++;
                fechaI.setFullYear(fechaI.getFullYear()+1);
            }
            else {
                fechaI.setFullYear(fechaI.getFullYear()+1);
            }
        }

        alert("Hay "+cantidadD);

    }
    catch (err){}
}

function fun11() {

    setInterval(function () {

        try {

            var dias = 0;

            var navidad = new Date(2018,11,25);
            var fecha = new Date();

            var diff = navidad.getTime() - fecha.getTime();

            var dias = Math.floor(diff/(1000*60*60*24));
            var horas = Math.floor(((diff/(1000*60*60*24))-dias)*24);
            var minutos = Math.floor(((((diff/(1000*60*60*24))-dias)*24)-horas)*60);
            var segundos = Math.floor(((((((diff/(1000*60*60*24))-dias)*24)-horas)*60)-minutos)*60);


            document.getElementById("time").innerHTML
                ="Quedan "+dias+" noches, "+horas+" horas, "+minutos+" minutos y "+segundos+" segundos para navidad.";
        }
        catch (err){}

    },1000);
}

function fun12() {

    try {

        var fechaN = new Date(prompt("Fecha de nacimiento 'yyyy-MM-dd'"));
        var fecha = new Date();

        var edad = fecha.getFullYear() - fechaN.getFullYear();
        var mes = fecha.getMonth() - fechaN.getMonth();

        if (mes < 0 || (mes === 0 && fecha.getDate() < fechaN.getDate())){
            edad--;
        }

        alert("Tienes " + edad + " años");

    }
    catch (err){}
}



















