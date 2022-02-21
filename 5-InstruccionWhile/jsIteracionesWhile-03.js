/*
Obregón Alex DIV I
Ej While 03
Al presionar el botón pedir la CLAVE (ayuda: es utn750)
*/

function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("Ingrese la clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("ERROR: Ingrse la clave correcta.");
	}
	alert("Ingreso exitoso.");
}
