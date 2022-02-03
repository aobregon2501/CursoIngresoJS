/*
Obregón Alex DIV I
Ins/IF 05
Al ingresar una edad solo debemos informar
si la persona NO es adolescente.
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;

	if((13 > edadIngresada) || (edadIngresada > 17)){
		alert("Esta persona no es adolescente, tiene " + edadIngresada);
	}
}
// txtIdEdad