
function ocultar(){
	var valor =	document.getElementById("btn2");
		if(valor.value==0){
		document.getElementById("videos").style.display = "none";
		document.getElementById("contenedor").style.display = "none";
		document.getElementById("info").style.display = "none";
		document.getElementById("proyectos").style.display = "block";
			
			valor.value=1;
		}
		else{
			document.getElementById("proyectos").style.display = "none";
			document.getElementById("videos").style.display = "block";
		    document.getElementById("contenedor").style.display = "block";
			valor.value=0;
		}
}
function mostrar(){
	var valor =	document.getElementById("btn3");
		if(valor.value==0){
		document.getElementById("videos").style.display = "none";
		document.getElementById("contenedor").style.display = "none";
		document.getElementById("info").style.display = "block";
		document.getElementById("proyectos").style.display = "none";
			
			valor.value=1;
		}
		else{
			document.getElementById("info").style.display = "none";
			document.getElementById("videos").style.display = "block";
		    document.getElementById("contenedor").style.display = "block";
			valor.value=0;
		}
}

function inicio(){
	var valor =	document.getElementById("btn3");
		if(valor.value==0){
		document.getElementById("videos").style.display = "block";
		document.getElementById("contenedor").style.display = "block";
		document.getElementById("info").style.display = "none";
		document.getElementById("proyectos").style.display = "none";
			
			
		}
		
}