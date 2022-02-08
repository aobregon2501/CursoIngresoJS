/*
Obregón Alex DIV I
Ins/IF 04
Al ingresar una edad debemos informar
si la persona es adolescente,
edad entre 13 y 17 años (inclusive).
*/
// txtIdEdad

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);

	if((13 <= edadIngresada) && (edadIngresada <= 17)){
		alert("Esta persona es adolescente, tiene " + edadIngresada);
	}
}
