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
	var suma;
	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	suma = primerNumero + segundoNumero;

	alert("La suma es " + suma);	
}

function restar()
{	
	var resta;
	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	
	resta = primerNumero - segundoNumero;

	alert("La resta es " + resta);
}

function multiplicar()
{ 
	var multiplicacion;
	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);	

	multiplicacion = primerNumero * segundoNumero;

	alert("La multiplicacion es " + multiplicacion);
}

function dividir()
{	
	var division;
	primerNumero = document.getElementById('txtIdNumeroUno').value;
	segundoNumero = document.getElementById('txtIdNumeroDos').value;
	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);
	
	division = primerNumero / segundoNumero;

	alert("La division es " + division);	
}

// txtIdNumeroUno , txtIdNumeroDos