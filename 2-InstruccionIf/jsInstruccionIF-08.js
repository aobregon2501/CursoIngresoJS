/*
Obregón Alex DIV I
Ins/IF 08
Al ingresar una edad menor a 18 años
y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor,
mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
// txtIdEdad , estadoCivil

function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilIngresado = document.getElementById('estadoCivil').value;
	
	if(!((edadIngresada < 18) || (estadoCivilIngresado != "Soltero")))
	{
		alert("Es soltero y no es menor.");	
	}
}
