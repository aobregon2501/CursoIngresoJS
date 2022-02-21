/*
Obregón Alex DIV I
Ej While 07
Al presionar el botón pedir números hasta que el USUARIO QUIERA
e informar la suma acumulada y el promedio.
*/
// txtIdSuma , txtIdPromedio

function mostrar()
{
	var contador;
	var numerosIngresados;
	var suma;
	var promedio;
	var condicion;
	var respuesta;
	

	contador = 0;
	suma = 0;
	promedio = 0;
	condicion = 1;
	respuesta = "si";

	while(respuesta == "si")
	{
		numerosIngresados = prompt("Ingrese el un número.");
		numerosIngresados = parseInt(numerosIngresados);
		suma += numerosIngresados;
		contador++;
		respuesta = prompt("¿Quiere ingresar más números? si/no.");
		while(condicion)
		{
			switch(respuesta)
			{
				case "si":
				case "no":
					condicion = 0;
				break;
				default:
					respuesta = prompt("ERROR: Responda si ó no.");
			}
		}
		condicion = 1;
	}
	promedio = suma / contador;

	document.getElementById('txtIdSuma').value = suma;
	document.getElementById('txtIdPromedio').value = promedio;
}