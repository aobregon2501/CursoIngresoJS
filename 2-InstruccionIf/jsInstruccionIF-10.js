/*
Obregón Alex DIV I
Ins/IF 10
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4.
*/

function mostrar()
{
	var notaRandom;
	notaRandom = Math.floor(Math.random() * 10) + 1;

	if(notaRandom >= 4)
	{
		if(notaRandom >= 9)
		{
			alert("EXCELENTE");
		}
		alert("APROBÓ");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
}