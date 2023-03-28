<?php 

if($_SERVER['REQUEST_METOD'] != 'POST'){
    header("Location: index.html");
}

require 'phpmailer/PHPMailer.php';
require 'phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$nombre = $_POST['name'];
$mail = $_POST['mail'];
$asunto = $_POST['asunto'];
$empresa = $_POST['message'];
$foto = $_FILES['foto']; // $foto['tmp_name'];

if(empty(trim($nombre))) $nombre = 'anonimo';

// $header = 'from: '.$mail."\r\n";
// $header .= "X-Mailer:PHP/".phpversion()."\r\n";
// $header .= "Mime-Version:1.0 \r\n";
// $header .= "content-Type:text/plain";

// $message = "este message fue enviado por: ".$name."\r\n";
// $message .= "Su e-mail es: ".$mail."\r\n";
// $message .= "Asunto: ".$asunto."\r\n";
// $message .= "message: ".$_POST['message']."\r\n";
// $message .= "enviado el: ".date('d/m/Y',time());


// $para = 'walterchavez12@gmail.com';
// $asunto = 'message de mi web';

// if(mail($para,$asunto,utf8_decode($message),$header))
// echo "<script type='text/javascript'>alert('Tu message ha sido enviado exitosamente');</script>";
// echo "<script type='text/javascript'>window.location.href='http://servitecflhuaraz.com';</script>";

$body = <<<html
        <h1>Contacto desde la Web</h1>
        <p>De: $nombre / $mail</p>
        <h2>Mensaje</h2>
    html;

$mailer = new PHPMailer();
$mailer->setFrom($mail, "$nombre" );
$mailer->addAddress('emailejemplo@ejemplo.com', 'Sitio web');
$mailer->Subject = "Mensaje web: $asunto";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';

if( $foto['size'] > 0){
    $mailer->addAttachment( $foto['tmp_name'], $foto['name']);
}

$rta = $mailer->send( );

var_dump($rta);


?>