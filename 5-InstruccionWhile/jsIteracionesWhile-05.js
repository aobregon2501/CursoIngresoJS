/*
Obregón Alex DIV I
Ej While 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
*/
// txtIdSexo

function mostrar()
{
	var sexoIngresado;
	var condicion;
	var mensaje;

	sexoIngresado = prompt("Ingrese f o m, según su sexo.");
	condicion = 1;

	while(condicion)
	{
		switch(sexoIngresado)
		{
			case "f":
				mensaje = "El sexo ingresado es femenino";
				condicion = 0;
			break;
			case "m":
				mensaje = "El sexo ingresado es masculino";
				condicion = 0;
			break;
			default:
				sexoIngresado = prompt("ERROR: Ingrese f o m, según su sexo.");
		}
	}
	document.getElementById('txtIdSexo').value = mensaje;
}