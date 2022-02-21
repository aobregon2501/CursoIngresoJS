/*
Obregón Alex DIV I
Ej While 08
Al presionar el botón pedir números hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
*/
// txtIdSuma , txtIdProducto

function mostrar()
{
	var numerosIngresados;
	var suma;
	var producto;
	var condicion;
	var respuesta;
	

	suma = 0;
	producto = 1;
	condicion = 1;
	respuesta = "si";

	while(respuesta == "si")
	{
		numerosIngresados = prompt("Ingrese el un número.");
		numerosIngresados = parseInt(numerosIngresados);
		
		if(numerosIngresados < 0)
		{
			producto = producto * numerosIngresados;
		}
		else
		{
			suma += numerosIngresados;
		}

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

	document.getElementById('txtIdSuma').value = suma;
	document.getElementById('txtIdProducto').value = producto;
}