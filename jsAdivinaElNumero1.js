/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var mensaje;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto=Math.floor(Math.random()*100)+1;
	alert(numeroSecreto);
	contadorIntentos=0+1;
	intentos.value=contadorIntentos;

}

function verificar()
{
	var numeroIngresado;
	contadorIntentos=parseInt(contadorIntentos+1);
	numeroIngresado=numero.value;
	
	//alert(numeroIngresado);
	if (numeroIngresado==numeroSecreto)
	{
		mensaje="Sos un genio;"
	}
	else
	{
		if (numeroIngresado<numeroSecreto) 
		{
			mensaje="Te falta";
		}else
		{ 
			if (numeroIngresado>numeroSecreto)
				{
				mensaje="Te pasaste";
				}

		}
	}
	
	alert(mensaje);
}