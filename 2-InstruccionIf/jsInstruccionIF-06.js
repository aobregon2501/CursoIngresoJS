/*
Obregón Alex DIV I
Ins/IF 06
Al ingresar una edad debemos informar
si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById('txtIdEdad').value;

	if(edadIngresada < 0){
		alert("Ingrese una edad existente");
	}
	else if((edadIngresada >= 0) && (edadIngresada < 13)){
		alert("Esta persona es un niño, tiene " + edadIngresada);
	}
	else if((edadIngresada >= 13) && (edadIngresada <= 17)){
		alert("Esta persona es un adolescente, tiene " + edadIngresada);
	}
	else{
		alert("Esta persona es un adulto, tiene "+ edadIngresada);
	}
}
// txtIdEdad