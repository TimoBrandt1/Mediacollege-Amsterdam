<?php
  $firstname = $_GET['firstname'];
  $lastname = $_GET['lastname'];
  $age = $_GET['age'];
  $email = $_GET['email'];
  echo "<h3>Response Demo Form</h3><h4> ";
  echo "You submitted the following information<br><ul>";
  echo "<li>Name: <strong> $firstname $lastname</strong></li>";
  echo "<li>Age: <strong> $age</strong></li>";
  echo "<li>E-mail: <strong> $email</strong></li>";
  echo "</li></ul></h4>";
?>

<?php
date_default_timezone_set('Europe/Amsterdam');

$timestamp = time();
$date_time = date("d-m-Y (D) H:i:s", $timestamp);
echo "The time is $date_time";
?>
