/*
Obregón Alex DIV I
Ej Switch 09
Una agencia de viajes debe sacar las tarifas de los viajes,
se cobra $15.000 por cada estadia como base, se pide el ingreso
de una estacion del año y localidad para vacacionar para poder
calcular el precio final.

En Invierno: Bariloche tiene un aumento del 20%, Cataratas y Cordoba
tienen un descuento del 10% y Mar del plata tiene un descuento del 20%.

En Verano: Bariloche tiene un descuento del 20%, Cataratas y Cordoba
tienen un aumento del 10% Mar del plata tiene un aumento del 20%.

En Otoño y Primavera: Bariloche, Cataratas y Mar del plata tienen
un aumento del 10%. Cordoba tiene el precio sin descuento.
 */
// txtIdEstacion , txtIdDestino

function mostrar()
{
	var destinoIngresado;
	var estacionIngresada;
	var mensajeMostrado;
	var tarifaFinal;
	var porcentajeTarifa;

	destinoIngresado = document.getElementById('txtIdDestino').value;
	estacionIngresada = document.getElementById('txtIdEstacion').value;
	tarifaFinal = 15000;

	switch(estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado == "Bariloche")
			{
				porcentajeTarifa = 0.2;
			}
			else
			{
				porcentajeTarifa = -0.1;
				if(destinoIngresado == "Mar del plata")
				{
					porcentajeTarifa = -0.2;
				}
			}
		break;
		case "Verano":
			if(destinoIngresado == "Bariloche")
			{
				porcentajeTarifa = -0.2;
			}
			else
			{
				porcentajeTarifa = 0.1;
				if(destinoIngresado == "Mar del plata")
				{
					porcentajeTarifa = 0.2;
				}
			}
		break;
		default:
			porcentajeTarifa = 0;
			if(destinoIngresado != "Cordoba")
			{
				porcentajeTarifa = 0.1;
			}
		break;
	}
	console.log(porcentajeTarifa);
	tarifaFinal += porcentajeTarifa * tarifaFinal;
	console.log(tarifaFinal);

	mensajeMostrado = "El precio final es: " + tarifaFinal;
	alert(mensajeMostrado);
}