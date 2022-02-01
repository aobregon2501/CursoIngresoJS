/*
Obregón Alex DIV I
E/S 06
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = document.getElementById('txtIdNumeroUno').value
	segundoNumero = document.getElementById('txtIdNumeroDos').value;
	
	suma = parseInt(primerNumero) + parseInt(segundoNumero);

	alert("La suma es " + suma);
}

// txtIdNumeroUno , txtIdNumeroDos
