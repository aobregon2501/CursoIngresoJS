/*
Obregón Alex DIV I
Ej Switch 05
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
 */
// txtIdHora

function mostrar()
{
	var horaIngresada;
	var mensajeMostrado ;

	horaIngresada = document.getElementById('txtIdHora').value;
	horaIngresada = parseInt(horaIngresada);
	mensajeMostrado = "...";

	switch(horaIngresada)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:				
			mensajeMostrado = "Es de mañana.";		
		break;
	}

	alert(mensajeMostrado);
}