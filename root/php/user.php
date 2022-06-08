<?php 
if(isset($_POST['username'])){
	$string = "admin";
	$un = htmlspecialchars($_POST['username']);
	if(stripos($string,$un)==true) echo trim("false");
		else echo trim("true");
}
else die
?>
