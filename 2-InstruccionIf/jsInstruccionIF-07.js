/*
Obregón Alex DIV I
Ins/IF 07
Al ingresar una edad menor a 18 años
y un estado civil distinto a "Soltero",
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/

function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = document.getElementById('txtIdEdad').value;
	estadoCivilIngresado = document.getElementById('estadoCivil');

	console.log(estadoCivilIngresado);

	if((edadIngresada < 18) && (estadoCivilIngresado =! "Soltero")){
		alert("Es muy pequeño para NO ser soltero.");
	}
}
// txtIdEdad , estadoCivil