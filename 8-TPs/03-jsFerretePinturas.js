/*
Obregón Alex DIV I
TP-FP 03
3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

var temperaturaIngresada;
var cambioDeUnidad;

function FahrenheitCentigrados () 
{
	temperaturaIngresada = document.getElementById('txtIdTemperatura').value;
    temperaturaIngresada = parseInt(temperaturaIngresada);

    cambioDeUnidad = (temperaturaIngresada - 32) / 1.8;

    alert(temperaturaIngresada + " grados fahrenheit equivalen a " + cambioDeUnidad + " grados centígrados");
}

function CentigradosFahrenheit () 
{
	temperaturaIngresada = document.getElementById('txtIdTemperatura').value;
    temperaturaIngresada = parseInt(temperaturaIngresada);

    cambioDeUnidad = (temperaturaIngresada * 1.8) + 32;

    alert(temperaturaIngresada + " grados centígrados equivalen a " + cambioDeUnidad + " grados fahrenheit");
}

// txtIdTemperatura