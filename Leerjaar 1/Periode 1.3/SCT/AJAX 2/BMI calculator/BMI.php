<?php
  $gewicht = $_GET['gewicht'];
  $lengte =  $_GET['lengte_cm'];
  BMIcalc($gewicht,$lengte);

function BMIcalc($gewicht,$lengte){
  $lM = $lengte / 100;
  $BMI = $gewicht / ($lM*$lM);
  echo "Jouw BMI is: " . round($BMI) . "<br>";
  echo "Je lengte is: " . $lengte . "<br>";
  echo "Je gewicht is: " . $gewicht . "<br>";
  if ($BMI < 18.5){echo "Je bent onder gewicht";}
  if ($BMI >= 18.5 && $BMI < 25){echo "Je bent normaal gewicht";}
  if ($BMI >= 25 && $BMI < 30){echo "Je bent over gewicht";}
  if ($BMI >= 30 && $BMI < 34.9){echo "Je bent Obese (Class 1)";}
  if ($BMI >= 35 && $BMI < 39.9){echo "Je bent Obese (Class 2)";}
  if ($BMI > 40) {echo "Je bent Obese (Class 3)";}
}
?>
