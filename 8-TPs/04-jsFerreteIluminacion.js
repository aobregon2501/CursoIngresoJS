/*
Obregón Alex DIV I
TP Ferrette Iluminación
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */
// txtIdCantidad , Marca , txtIdprecioDescuento

function CalcularPrecio () 
{
    var precioUnidad;
    var precioFinal;
    var cantidadDeLamparitas;
    var marcaSeleccionada;
    var descuentoAplicado;
    var iIBB;
    var mensaje;

    marcaSeleccionada = document.getElementById('Marca').value;
    cantidadDeLamparitas = document.getElementById('txtIdCantidad').value;
    cantidadDeLamparitas = parseInt(cantidadDeLamparitas);

    precioUnidad = 35;
    precioFinal = precioUnidad * cantidadDeLamparitas;

    if(cantidadDeLamparitas < 1)
    {
        mensaje = "Ingrese una cantidad existente de lamparitas";
    }
    else
    {
        switch(cantidadDeLamparitas)
        {
            case 1:
            case 2:
                descuentoAplicado = 0;
            break;
            case 3:
                switch(marcaSeleccionada)
                {
                    case "ArgentinaLuz":
                        descuentoAplicado = 15;
                    break;
                    case "FelipeLamparas":
                        descuentoAplicado = 10;
                    break;
                    default:
                        descuentoAplicado = 5;
                }
            break;
            case 4:
                switch(marcaSeleccionada)
                {
                    case "ArgentinaLuz":
                    case "FelipeLamparas":
                        descuentoAplicado = 25;
                    break;
                    default:
                        descuentoAplicado = 20;
                }
            break;
            case 5:
                switch(marcaSeleccionada)
                {
                    case "ArgentinaLuz":
                        descuentoAplicado = 40;
                    break;
                    default:
                        descuentoAplicado = 30;
                }
            break;
            default:
                descuentoAplicado = 50;
        }

        precioFinal -= precioFinal * descuentoAplicado / 100;
        mensaje = precioFinal;

        if(precioFinal > 120)
        {
            iIBB = 10 * precioFinal / 100;
            precioFinal += iIBB;
            alert("Usted pago " + iIBB + " de IIBB");
        }
    }
    
    document.getElementById('txtIdprecioDescuento').value = mensaje;
}
