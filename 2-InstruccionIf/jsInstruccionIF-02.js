/*
Obregón Alex DIV I
Ins/IF 02
Al ingresar una edad debemos informar solo
si la persona es mayor de edad.
*/

function mostrar()
{
	var edadIngresada;
	var mayoriaDeEdad = 18;

	edadIngresada = document.getElementById('txtIdEdad').value;

	if(edadIngresada >= mayoriaDeEdad){
		alert("Esta persona es mayor de edad, tiene " + edadIngresada);
	}
}
// txtIdEdad