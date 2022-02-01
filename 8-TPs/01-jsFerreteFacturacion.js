/*
Obregón Alex DIV I
TP-FF 01
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

var precioUno;
var precioDos;
var precioTres;

function Sumar () 
{
	precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;
    var suma;

    suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);

    alert("La suma de los precios es " + suma);
}
function Promedio () 
{
	precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;
    var suma;
    var promedio;

    suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
    promedio = suma / 3;

    alert("El promedio de los precios es " + promedio);
}
function PrecioFinal () 
{
	precioUno = document.getElementById('txtIdPrecioUno').value;
    precioDos = document.getElementById('txtIdPrecioDos').value;
    precioTres = document.getElementById('txtIdPrecioTres').value;
    var suma;
    var precioFinal;

    suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
    precioFinal = suma + 0.21*suma;

    alert("El precio final es " + precioFinal);
}

// txtIdPrecioUno , txtIdPrecioDos , txtIdPrecioTres