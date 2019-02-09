/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var dividendo;
	var divisor;
	var dividir;

	dividendo=numeroUno.value;
	divisor=numeroDos.value;

	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	dividir=dividendo/divisor;

	alert ("el resto es: "+dividir);

}
