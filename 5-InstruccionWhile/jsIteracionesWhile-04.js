/*
Obregón Alex DIV I
Ej While 04
Al presionar el botón 
pedir un número entre 0 y 9 inclusive.
*/
// txtIdNumero

function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("Ingrese un número entre 0 y 9 inclusive.");

	while((numeroIngresado < 0) || (numeroIngresado > 9))
	{
		numeroIngresado = prompt("ERROR: Ingrese un número ENTRE 0 y 9 INCLUSIVE.");
	}
	document.getElementById('txtIdNumero').value = numeroIngresado;
}