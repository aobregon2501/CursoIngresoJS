/*
Obregón Alex DIV I
TP-FC 02
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

var largoDelTerreno;
var anchoDelTerreno;
var radioDelTerreno;

function Rectangulo () 
{
    var perimetroDelTerreno;
    var metrosDeAlambre;
    largoDelTerreno = document.getElementById('txtIdLargo').value;
    anchoDelTerreno = document.getElementById('txtIdAncho').value;
    
    perimetroDelTerreno = 2*parseInt(largoDelTerreno) + 2*parseInt(anchoDelTerreno);
    metrosDeAlambre = 3*perimetroDelTerreno;

    alert("Se deben comprar " + metrosDeAlambre + "m de alambre.");
}
function Circulo () 
{
    var circunferenciaDelTerreno;
    var metrosDeAlambre;
	radioDelTerreno = document.getElementById('txtIdRadio').value;  

    circunferenciaDelTerreno = 3.14 * 2*radioDelTerreno;
    metrosDeAlambre = 3*circunferenciaDelTerreno;

    alert("Se deben comprar " + metrosDeAlambre + "m de alambre.");
}
function Materiales () 
{
    var areaDelTerreno;
    var bolsasDeCemento;
    var bolsasDeCal;
	largoDelTerreno = document.getElementById('txtIdLargo').value;
    anchoDelTerreno = document.getElementById('txtIdAncho').value;
    
    areaDelTerreno = parseInt(largoDelTerreno) * parseInt(anchoDelTerreno);
    bolsasDeCemento = 2*areaDelTerreno;
    bolsasDeCal = 3*areaDelTerreno;

    alert("Se necesitan " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal."); 
}

// txtIdLargo , txtIdAncho , txtIdRadio