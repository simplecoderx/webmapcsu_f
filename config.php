<?php
//development connection
/* $hostname = "localhost";
$username = "root";
$password = "";
$database = "webmapcsu_f"; */

//remote db connection
$hostname = "remotemysql.com";
$username = "WX88vkLzcD";
$password = "sb0XNzxxgH";
$database = "WX88vkLzcD";

$conn = mysqli_connect($hostname, $username, $password, $database) or die("Database connection failed");

$base_url = "http://localhost/webmapcsu_f/";
$my_email = "villacortalynn8@gmail.com";

?>