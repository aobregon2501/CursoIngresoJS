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
	var condicional;
	condicional = "Soltero";
	condicional = parseInt(condicional);

	edadIngresada = document.getElementById('txtIdEdad').value;
	edadIngresada = parseInt(edadIngresada);
	estadoCivilIngresado = document.getElementById('estadoCivil').value;
	estadoCivilIngresado = parseInt(estadoCivilIngresado);

	console.log(estadoCivilIngresado);

	if((edadIngresada < 18)){
		if(estadoCivilIngresado != condicional){
			alert("Es muy pequeño para NO ser soltero.");
		}
	}
}
