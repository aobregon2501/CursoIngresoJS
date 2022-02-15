/*
Obregón Alex DIV I
Ej Switch 10
Una agencia de viajes nos piden informar si hacemos viajes a lugares
según la estación del año estemos, informar si "Se viaja" o
"No se viaja" a ese lugar.

En Invierno: Solo Bariloche informa "Se viaja"
los demas destinos "No se viaja".

En Verano: Se viaja a Mar del plata y Cataratas solamente.

En Otoño: Se viaja a todos los destinos.

En Primavera: Solo no se viaja a Bariloche.
 */
// txtIdEstacion , txtIdDestino

function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var mensajeMostrado;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;

	switch(estacionIngresada)
	{
		case "Invierno":
			mensajeMostrado = "No se viaja";
			if(destinoIngresado == "Bariloche")
			{
				mensajeMostrado = "Se viaja";
			}
		break;
		case "Verano":
			mensajeMostrado = "Se viaja";
			if((destinoIngresado == "Bariloche") || (destinoIngresado == "Cordoba"))
			{
				mensajeMostrado = "No se viaja";
			}
		break;
		case "Otoño":
			mensajeMostrado = "Se viaja";
		break;
		default:
			mensajeMostrado = "Se viaja";
			if(destinoIngresado == "Bariloche")
			{
				mensajeMostrado = "No se viaja";
			}
		break;
	}

	alert(mensajeMostrado);
}