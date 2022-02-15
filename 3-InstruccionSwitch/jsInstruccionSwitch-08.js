/*
Obregón Alex DIV I
Ej Switch 08
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino.
 */
// txtIdDestino

function mostrar()
{
	var destinoIngresado;
	var mensajeMostrado ;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	mensajeMostrado = "...";

	switch(horaIngresada)
	{
		case "Mar del plata":
		case "Cataratas":
			mensajeMostrado = "Hace calor en el lugar de destino";
		break;
		case "Bariloche":
		case "Ushuaia":
			mensajeMostrado = "Hace frio en el lugar de destino";
		break;
	}

	alert(mensajeMostrado);
}