/*
Obregón Alex DIV I
Ej Switch 01
Al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
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
		case "Enero":
			mensajeMostrado = "que comiences bien el año!!!.";
		break;
		case "Marzo":
			mensajeMostrado = "a clases!!!.";
		break;
		case "Julio":
			mensajeMostrado = "se vienen las vacaciones!!!.";
		break;
		case "Diciembre":
			mensajeMostrado = "Felices fiesta!!!.";
		break;
	}

	alert(mensajeMostrado);
}