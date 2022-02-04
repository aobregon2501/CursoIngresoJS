/*
Obregón Alex DIV I
Ins/IF 04
Al ingresar una edad debemos informar
si la persona es adolescente,
edad entre 13 y 17 años (inclusive).
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;

	if((13 <= edadIngresada) && (edadIngresada <= 17)){
		alert("Esta persona es adolescente, tiene " + edadIngresada);
	}
}
// txtIdEdad