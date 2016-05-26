// JavaScript Document
function Resolver(operador)
{
	
	var NU1=0;
	var NU2=0;
	var R=0;
	
	
	
	NU1=document.getElementById("N1").value;
	NU2=document.getElementById("N2").value;
	
   
	switch (operador)
	{
		case'+':
		         document.getElementById("operador").src="imagenes/suma.PNG"
				 R=parseFloat(NU1)+parseFloat(NU2);
				 
				  	    break;
	     case'-':
		         document.getElementById("operador").src="imagenes/resta.PNG"
				R=parseFloat(NU1)-parseFloat(NU2);
				  	    break;
	     case'*':
		         document.getElementById("operador").src="imagenes/multi.PNG"
				R=parseFloat(NU1)*parseFloat(NU2);
				   	    break;
 	     case'/':
		         document.getElementById("operador").src="imagenes/divi.PNG"
				 R=parseFloat(NU1)/parseFloat(NU2);
				   	    break;
case'b':
		         document.getElementById("operador").src="imagenes/borra.PNG"
				 document.getElementById("N1").value="";
     			 document.getElementById("N2").value="";
				 R="";
				 
				 
				   	    break;

    }
	document.getElementById("RES").value=R
	
	
}