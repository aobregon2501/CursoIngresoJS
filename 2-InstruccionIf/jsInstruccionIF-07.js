/*
Obregón Alex DIV I
Ins/IF 07
Al ingresar una edad menor a 18 años
y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
// txtIdEdad , estadoCivil

function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilIngresado = document.getElementById('estadoCivil').value;
	
	if(edadIngresada < 18)
	{
		if(estadoCivilIngresado != "Soltero")
		{
			alert("Es muy pequeño para NO ser soltero.");
		}
	}
}
