<?php

session_start();

error_reporting(0);

if (!isset($_SESSION["user_id"])) {
    header("Location: index.php");
}

include 'config.php';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Driver 14 | WebMapCSU</title>

    <meta name="author" content="Codeconvey" />
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css'>

    <!--Only for demo purpose - no need to add.-->
    <link rel="stylesheet" href="css.tricycle/demo.css" />
	  <link rel="stylesheet" href="css.tricycle/styles.css">

    <!-- Favicons -->
    <link href="../assets/img/csu-icon.png" rel="icon">
    <link href="../assets/img/csu-icon.png" rel="apple-touch-icon">
</head>
<body>

<header class="ScriptHeader">
    <div class="rt-container">
    	<div class="col-rt-12">
        	<div class="rt-heading">
            	<h1>Tricycle Driver Profile</h1>
                <p>"It's an honor to take you in your destination safe and sound."</p>
            </div>
        </div>
    </div>
</header>

<section>
    <div class="rt-container">
          <div class="col-rt-12">
              <div class="Scriptcontent">
              
<!-- Drivers Profile -->
<div class="student-profile py-4">
  <div class="container">
    <div class="row">
      <div class="col-lg-4">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent text-center">
            <img class="profile_img" src="driver.png" alt="student dp">
            <h3>Mr. Matthew Hista</h3>
          </div>
          <div class="card-body">
            <p class="mb-0"><strong class="pr-1">Drivers' ID:</strong>114-114-114</p>
            <p class="mb-0"><strong class="pr-1">Schedule:</strong>7:00 A.M. - 8:30 P.M.</p>
            <p class="mb-0"><strong class="pr-1">Contact Number:</strong>+639895699934</p>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>General Information</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="30%">Experience</th>
                <td width="2%">:</td>
                <td>Driver since 2017 - Present</td>
              </tr>
              <tr>
                <th width="30%">Address	</th>
                <td width="2%">:</td>
                <td>Baan KM3, Butuan City</td>
              </tr>
              <tr>
                <th width="30%">Gender</th>
                <td width="2%">:</td>
                <td>Male</td>
              </tr>
              <tr>
                <th width="30%">Religion</th>
                <td width="2%">:</td>
                <td>Roman Catholic</td>
              </tr>
              <tr>
                <th width="30%">Plate Number</th>
                <td width="2%">:</td>
                <td>JKL 1234</td>
              </tr>
            </table>
          </div>
        </div>
          <div style="height: 26px"></div>
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0"><i class="far fa-clone pr-1"></i>Testimonial</h3>
          </div>
          <div class="card-body pt-0">
              <p>Wag po kayung mahihiyang magtanong ng direksyon. Maari ko rin po kayung ihatid sa lokasyon.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
	
</body>
</html>