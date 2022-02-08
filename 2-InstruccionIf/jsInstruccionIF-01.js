/*
Obregón Alex DIV I
Ins/IF 01
Al ingresar una edad que sea igual a 15,
mostrar el mensaje "niña bonita".
*/
// txtIdEdad

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value
	edadIngresada = parseInt(edadIngresada);

	if(15 == edadIngresada){
		alert("niña bonita");
	}
}
