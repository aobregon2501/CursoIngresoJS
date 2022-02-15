/*
Obregón Alex DIV I
Ej Switch 02
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
 */
// txtIdMes

function mostrar()
{
	var mesIngresado;
	var mensajeMostrado ;

	mesIngresado = document.getElementById('txtIdMes').value;
	mensajeMostrado = "...";

	switch(mesIngresado)
	{
		case "Julio":
		case "Agosto":
			mensajeMostrado = "Abrigate que hace frio.";
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			mensajeMostrado = "Ya pasamos el frio, ahora calor!!!.";
		break;
		default:
			mensajeMostrado = "Falta para el invierno.";
		break;	
	}

	alert(mensajeMostrado);
}