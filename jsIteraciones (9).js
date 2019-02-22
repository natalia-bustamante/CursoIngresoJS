function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;

	//maximo=-999;
	//minimo=999;
	var respuesta='si';
	bandera="es la primera";

	while(respuesta=='si')
	{
		contador=contador+1;
		numero=prompt("ingrese el numero " +contador+"# : " );
		numero=parseInt(numero);

		if (bandera=="es la primera") 
		{
			maximo=numero;
			minimo=numero;
			bandera="lalala";
		}else
		{
			if(numero>maximo)
				{
					maximo=numero;
				}
			if (numero<minimo) 
				{
					minimo=numero;
				}
	  	}

		//acumulador=acumulador+ numero;
		
		respuesta= prompt(" =>si , para continuar");
		
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN