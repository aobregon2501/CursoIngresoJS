/*
Obregón Alex DIV I
E/S 09
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

function mostrarAumento()
{
	var sueldoIngresado;
	var aumentoDeSueldo;

	sueldoIngresado = document.getElementById('txtIdSueldo').value;

	sueldoIngresado = parseInt(sueldoIngresado);
	//aumentoDeSueldo = sueldoIngresado + ...;

	document.getElementById('txtIdResultado').value = aumentoDeSueldo;
}

// txtIdSueldo , txtIdResultado