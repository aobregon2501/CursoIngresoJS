/*
Obregón Alex DIV I
Ej Switch 06
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".
 */
// txtIdHora

function mostrar()
{
	var horaIngresada;
	var mensajeMostrado;

	horaIngresada = document.getElementById('txtIdHora').value;
	horaIngresada = parseInt(horaIngresada);

	if((horaIngresada < 0) || (horaIngresada > 24))
	{
		mensajeMostrado = "la hora no existe.";
	}
	else
	{
		if((horaIngresada < 7) || (horaIngresada > 19))
		{
			mensajeMostrado = "Es de noche.";
		}
		else
		{
			if(horaIngresada < 11)
			{
				mensajeMostrado = "Es de mañana.";
			} 
			else
			{
				mensajeMostrado = "Es de tarde.";
			}
		}
	}

	alert(mensajeMostrado);
}