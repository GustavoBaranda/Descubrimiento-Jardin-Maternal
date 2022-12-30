<?php
    var_dump($POST);
    
    if($_SERVER['REQUEST_METHOD'] !== 'POST') {
        header("Location: index.html");
    }
    
    $destino= "jmdescubriendo@gmail.com";
    $nombre= $_POST ["nombre"];
    $correo= $_POST ["correo"];
    $telefono= $_POST ["telefono"];
    $comentario= $_POST ["comentario"];
    
    var_dump($nombre);

    if( empty(trim($nombre))) $nombre="anonimo";
    
    $body = <<<HTML
        <h1>Contacto desde de la web</h1>
        <h3>De: $nombre<br>Correo: $correo </h3>
        <h2>Mensaje</h2>
        <h3>$comentario</h3>
    HTML;

    $headers = "MIME-Version: 1.0 \r\n";
    $headers.= "Content-Type: text/html; charset=utf-8 \r\n"; 
    $headers.= "From: $nombre <$correo> \r\n"; 
    //$headers.= "To: Sitio web <jmdescubriendo@gmail.com> \r\n";
    
    $respuesta = mail( $destino, "Mensaje desde la web", $body, $headers );

    var_dump($respuesta);
     
?>