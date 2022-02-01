/* 
Obregón Alex DIV I
E/S 04
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreUtilizado;

	nombreUtilizado = prompt("Ingrese su nombre: ");

	document.getElementById('txtIdNombre').value = nombreUtilizado;
}

//txtIdNombre