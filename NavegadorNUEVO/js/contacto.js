$(document).ready(inicio);

function inicio(){
	// $(".help-block").hide();

	$("#btnvalidar").on("click",enviarDatos);
	$("#btborrar").on("click",borrar);
}

function borrar(){
     $(".glyphicon-ok").removeClass("glyphicon-ok");
     $(".glyphicon-remove").removeClass("glyphicon-remove");
     $(".has-error").removeClass("has-error");
     $("has-success").removeClass("has-success");
     $(".help-block").text("");


}
//var valido=true;
function validar(){
	
	var valido = true;

	console.log(valido);

	var valor= document.getElementById("texto").value;
	
	if (valor==null || valor.length==0 || !/^[a-zA-Z ]+$/.test(valor)){
	    $("#texto").parent().addClass("has-error");
	    $("#texto").parent().find(".help-block").text("Ingrese un nombre");
	    $("#iconotexto").removeClass("glyphicon-ok");
		$("#iconotexto").addClass("glyphicon-remove");
		valido=false;
	} else {
		$("#texto").parent().removeClass("has-error");
		$("#texto").parent().addClass("has-success");
		$("#iconotexto").removeClass("glyphicon-remove");
		$("#iconotexto").addClass("glyphicon-ok");
	}

	var telefono= document.getElementById("numero").value;
	
	if(isNaN(telefono)|| telefono==null || telefono.length==0 ){
		$("#numero").parent().addClass("has-error");
		$("#numero").parent().find(".help-block").text("Ingrese un telefono");
		$("#icononumero").removeClass("glyphicon-ok");
		$("#icononumero").addClass("glyphicon-remove");

		valido=false;

    }else {
     	$("#numero").parent().removeClass("has-error");
		$("#numero").parent().addClass("has-success");
		$("#icononumero").removeClass("glyphicon-remove");
		$("#icononumero").addClass("glyphicon-ok");
		

	}
    var correo= document.getElementById("mail").value;
	if (correo==null || correo.length==0 || !/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo)) {
	    $("#mail").parent().addClass("has-error");
	    $("#mail").parent().find(".help-block").text("Ingrese un mail");
	    $("#iconomail").removeClass("glyphicon-ok");
		$("#iconomail").addClass("glyphicon-remove");
		valido=false;
	} else {
		$("#mail").parent().removeClass("has-error");
		$("#mail").parent().addClass("has-success");
		$("#iconomail").removeClass("glyphicon-remove");
		$("#iconomail").addClass("glyphicon-ok");
	}
    

    var titulo= document.getElementById("asunto").value;
	
	if (titulo==null || titulo.length==0 || /^\s+$/.test(titulo)){
	    $("#asunto").parent().addClass("has-error");
	    $("#asunto").parent().find(".help-block").text("Ingrese un asunto");
	    $("#iconoasunto").removeClass("glyphicon-ok");
		$("#iconoasunto").addClass("glyphicon-remove");
		valido=false;
	} else {
		$("#asunto").parent().removeClass("has-error");
		$("#asunto").parent().addClass("has-success");
		$("#iconoasunto").removeClass("glyphicon-remove");
		$("#iconoasunto").addClass("glyphicon-ok");
	}
    
    var info= document.getElementById("mensaje").value;
	
	if (info==null || info.length==0 || /^\s+$/.test(info)){
	    $("#mensaje").parent().addClass("has-error");
	    $("#mensaje").parent().find(".help-block").text("Ingrese un mensaje");
	    $("#iconomensaje").removeClass("glyphicon-ok");
		$("#iconomensaje").addClass("glyphicon-remove");
		valido=false;
	} else {
		$("#mensaje").parent().removeClass("has-error");
		$("#mensaje").parent().addClass("has-success");
		$("#iconomensaje").removeClass("glyphicon-remove");
		$("#iconomensaje").addClass("glyphicon-ok");
	}

    
    return valido;

}


function enviarDatos(){
 	

	if(validar() == true){

	    var jdatos= {
	    	"nombre": $("#texto").val(),
	    	"telefono": $("#numero").val(),
	    	"Mail": $("#mail").val(),
		    "Localidad": $("#localidad").val(),
		    "Asunto": $("#asunto").val(),
		    "Mensaje": $("#mensaje").val()
		};
	    
	    var jdatosjson = JSON.stringify(jdatos);

	    console.log(jdatos);
	    console.log(jdatosjson);

	    /*$.ajax({
	    	url: "./",
	    	type: "post",
	    	data:jdatosjason ,
	    	success: function (response) {
	    		if(response != false) { 
	    			alert(response); 
	    		}else{
		
	    		}
	    	}
		});*/
    } else {
    	console.log("no esta validado");
    }
}    

