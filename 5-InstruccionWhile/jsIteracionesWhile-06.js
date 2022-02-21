/*
Obregón Alex DIV I
Ej While 06
Al presionar el botón pedir 5 números
e informar la suma acumulada y el promedio.
*/
// txtIdSuma , txtIdPromedio

function mostrar()
{
	var contador;
	var numerosIngresados;
	var suma;
	var promedio;

	contador = 0;
	suma = 0;
	promedio = 0;

	alert("Se le van a pedir 5 números.");

	while(contador < 5)
	{
		numerosIngresados = prompt("Ingrese el "+ (contador + 1) + "° número.");
		numerosIngresados = parseInt(numerosIngresados);
		suma += numerosIngresados;
		contador++;
	}
	promedio = suma / contador;

	document.getElementById('txtIdSuma').value = suma;
	document.getElementById('txtIdPromedio').value = promedio;
}