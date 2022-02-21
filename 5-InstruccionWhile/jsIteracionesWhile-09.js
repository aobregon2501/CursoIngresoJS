/*
Obregón Alex DIV I
Ej While 09
Al presionar el botón pedir números hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
*/
// txtIdMaximo , txtIdMinimo

function mostrar()
{
	var numerosIngresados;
	var numeroMaximo;
	var numeroMinimo;
	var condicion;
	var respuesta;
	

	numeroMaximo = 0;
	numeroMinimo = 0;
	condicion = 1;
	respuesta = "si";

	while(respuesta == "si")
	{
		numerosIngresados = prompt("Ingrese el un número.");
		numerosIngresados = parseInt(numerosIngresados);

		if(numerosIngresados > numeroMaximo)
		{
			numeroMaximo = numerosIngresados;
		}
		else
		{
			if(numerosIngresados < numeroMinimo)
			{
				numeroMinimo = numerosIngresados;
			}
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

	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;
}