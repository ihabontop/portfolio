<?php
    if(isset($_POST['submit'])) {
        $to = "ihab.ben78@gmail.com";
        $subject = "Nouveau message de votre portfolio";
        $message = "Nom: ".$_POST['nom']."\nEmail: ".$_POST['email']."\nMessage: ".$_POST['message'];
        $headers = "From: noreply@example.com" . "\r\n" .
        "Reply-To: noreply@example.com" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

        mail($to, $subject, $message, $headers);
    }
?>
