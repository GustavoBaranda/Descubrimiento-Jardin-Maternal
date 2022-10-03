<?php
    $destino= "baranda.gustavo@gmail.com";
    $nombre= $_POST ["nombre"];
    $correo= $_POST ["correo"];
    $telefono= $_POST ["telefono"];
    $comentario= $_POST ["comentario"];
    $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nComemtario: " . $comentario;
    mail($destino,"Contacto",$contenido);
    header("<location:gracias.html
    "); 
?>