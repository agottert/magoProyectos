<?php 

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

header('Content-Type: application/json');

if(!empty($_POST)){

	if($_POST["Localidad"]){

		$mensaje = "Tu consulta se ha procesado con exito.";

		$resultado = array('status'=>"Ok",'mensaje'=>$mensaje);
	
	}else{

		$resultado = array('status'=>"error",'mensaje'=>"Lo lamentamos pero no podemos procesar su consulta.");
		
	}	

}else{

	$resultado = array('status'=>"error",'mensaje'=>"Lo lamentamos pero no podemos procesar su consulta.");
}

print(json_encode($resultado));