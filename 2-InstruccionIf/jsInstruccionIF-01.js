/*
Obregón Alex DIV I
Ins/IF 01
Al ingresar una edad que sea igual a 15,
mostrar el mensaje "niña bonita".
*/

function mostrar()
{
	var edadIngresada;
	var condicional = 15;

	edadIngresada = document.getElementById('txtIdEdad').value;
	if(condicional == edadIngresada){
		alert("niña bonita");
	}
}
// txtIdEdad