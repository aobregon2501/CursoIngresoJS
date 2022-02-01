/*Obregón Alex DIV I
E/S 05

Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var suNombre;
	var suEdad;

	suNombre = document.getElementById('txtIdNombre').value;
	suEdad = document.getElementById('txtIdEdad').value;

	alert("Su nombre es " + String(suNombre) + " y tiene " + String(suEdad) + " años.");
}

//nombre: txtIdNombre , edad: txtIdEdad