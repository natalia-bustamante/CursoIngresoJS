function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje;
switch(mesDelAño) {
  case "Enero":
    // code block
    mensaje="Que comiences bien el año";
    break;
  case "Febrero":
    // code block
   mensaje="...";
   break;
  case "Marzo":
    // code block
   mensaje="A clases";
   break;
  case "Abril":
   break;
  case "Mayo":
  mensaje="..";
   break;
  case "Junio":
   mensaje="...";
   break;
  case "Julio":
   mensaje="";
   break;
  case "Agosto":
   mensaje="...";
   break;
  case "Septiembre":
  mensaje=".mmmm.";
  break;


}

alert(mensaje);

}//FIN DE LA FUNCIÓN