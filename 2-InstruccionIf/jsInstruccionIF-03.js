/*
Obregón Alex DIV I
Ins/IF 03
Al ingresar una edad debemos informar
si la persona es mayor de edad,
sino informar que es un menor de edad.
*/

function mostrar()
{
	var edadIngresada;
	var mayoriaDeEdad = 18;

	edadIngresada = document.getElementById('txtIdEdad').value;

	if(edadIngresada >= mayoriaDeEdad){
		alert("Esta persona es mayor de edad, tiene " + edadIngresada);
	}
	
	else{
		alert("Esta persona es menor de edad, tiene " + edadIngresada);
	}
}
// txtIdEdad