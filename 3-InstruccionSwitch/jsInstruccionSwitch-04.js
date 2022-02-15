/*
Obregón Alex DIV I
Ej Switch 04
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
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
		case "Febrero":
			mensajeMostrado = "Este mes tiene 28 días.";
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			mensajeMostrado = "Este mes tiene 31 días.";
		break;
		default:
			mensajeMostrado = "Este mes tiene 30 días";
		break;	
	}

	alert(mensajeMostrado);
}