/*
Obregón Alex DIV I
E/S 07
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

var primerNumero;
var segundoNumero;

function sumar()
{	
	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;
	var suma;

	suma = parseInt(primerNumero) + parseInt(segundoNumero);

	alert("La suma es " + suma);	
}

function restar()
{	
	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;
	var resta;

	resta = parseInt(primerNumero) - parseInt(segundoNumero);

	alert("La resta es " + resta);
}

function multiplicar()
{ 
	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;	
	var multiplicacion;

	multiplicacion = parseInt(primerNumero) * parseInt(segundoNumero);

	alert("La multiplicacion es " + multiplicacion);
}

function dividir()
{	
	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;
	var division;

	division = parseInt(primerNumero) / parseInt(segundoNumero);

	alert("La division es " + division);	
}

// txtIdNumeroUno , txtIdNumeroDos