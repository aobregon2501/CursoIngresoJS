/*
Obregón Alex DIV I
Ej Switch 07
Al selecionar un destino , indicar el punto cardinal
de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste.
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
		case "Bariloche":
			mensajeMostrado = "Esta en el Oeste";
		break;
		case "Cataratas":
			mensajeMostrado = "Esta en el Norte";
		break;
		case "Mar del plata":
			mensajeMostrado = "Esta en el Este";
		break;
		case "Ushuaia":
			mensajeMostrado = "Esta en el Sur";
		break;
	}

	alert(mensajeMostrado);
}