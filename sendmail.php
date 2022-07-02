<?php
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $email = $_POST['email'];
  $service = $_POST['service'];
  $message = $_POST['message'];
  $to = "rasuliazamat@gmail.com";
  $subject = "Заявка с 5SHER";
  $headers = "Имя: $name" . "\r\n" .
             "Телефон: $tel ". "\r\n" .
             "E-mail: $email" . "\r\n" .
             "Услуга: $service" . "\r\n" .
             "Сообщение: $message" . "\r\n";
  if (mail($to, $subject, $headers)) {
    echo "Заявка отправлена!";
  } else {
    echo "Заявка не отправлена!";
  }
?>