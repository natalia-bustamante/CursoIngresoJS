function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;

	
	var respuesta='si';
	while(1)
	{
		contador=contador+1;
		numero=prompt("ingrese el numero " +contador+"# : " );
		numero=parseInt(numero);

		//acumulador=acumulador+ numero;
		
		respuesta= prompt(" =>si , para continuar");
		if(respuesta!="si")
		{
			break;
		}
		if (numero>0) 
		{
				positivo=positivo+numero;
		}
		else
		{
				negativo=negativo*numero;
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN