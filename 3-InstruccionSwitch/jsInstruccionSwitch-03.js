/*
Obregón Alex DIV I
Ej Switch 03
al seleccionar un mes informar.
si es Febrero: "Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
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
			mensajeMostrado = "Este mes no tiene más de 29 días.";
		break;
		default:
			mensajeMostrado = "Este mes tiene 30 o más días";
		break;	
	}

	alert(mensajeMostrado);
}