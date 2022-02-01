/*
Obregón Alex DIV I
E/S 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{
	var importeIngresado;
	var descuentoDeImporte;

	importeIngresado = document.getElementById('txtIdImporte').value;

	importeIngresado = parseInt(importeIngresado);
	//descuentoDeImporte = importeIngresado - ...;

	document.getElementById('txtIdResultado').value = descuentoDeImporte;
}

// txtIdImporte , txtIdResultado