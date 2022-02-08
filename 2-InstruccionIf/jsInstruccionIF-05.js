/*
Obregón Alex DIV I
Ins/IF 05
Al ingresar una edad solo debemos informar
si la persona NO es adolescente.
*/
// txtIdEdad

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if((13 > edadIngresada) || (edadIngresada > 17)){
		alert("Esta persona no es adolescente, tiene " + edadIngresada);
	}
}
