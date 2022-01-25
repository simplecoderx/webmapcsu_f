<?php

include 'config.php';

session_start();

error_reporting(0);

if (!isset($_SESSION["user_id"])) {
    header("Location: index.php");
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Map | WebMapCSU</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/csu-icon.png" rel="icon">
  <link href="assets/img/csu-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Mentor - v4.5.0
  * Template URL: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->

  <!-- Map Stylesheets -->
  <link rel="stylesheet" href="map.css"/>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
       
</head>
<body>
    <div>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="home.php">WebMapCSU</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a href="home.php">Home</a></li>
          <li><a href="about.php">About Us</a></li>
         <li><a class="active" href="viewmap.php">Map</a></li>
          <li class="dropdown"><a href="#"><span>Departments</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="http://caa.carsu.edu.ph/">CAA</a></li>
              <li><a href="https://www.carsu.edu.ph/?q=content/college-arts-and-sciences">CAS</a></li>
              <li><a href="https://ccis.carsu.edu.ph/">CCIS</a></li>
              <li><a href="http://ced.carsu.edu.ph/">CED</a></li>
              <li><a href="http://cegs.carsu.edu.ph/">CEGS</a></li>
              <li><a href="http://cofes.carsu.edu.ph/">COFES</a></li>
              <li><a href="http://chass.carsu.edu.ph/">CHaSS</a></li>
              <li><a href="http://cmns.carsu.edu.ph/">CMNS</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Tricycle</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="scroll">
              <li><a href="tricycle\tri1.php">Mr. John Kyle Padilla</a></li>
              <li><a href="tricycle\tri2.php">Mr. Eric Delos Reyes</a></li>
              <li><a href="tricycle\tri3.php">Mr. Ian Dela Cruz</a></li>
              <li><a href="tricycle\tri4.php">Mr. Benedict Atenta</a></li>
              <li><a href="tricycle\tri5.php">Mr. Rian Asunta</a></li>
              <li><a href="tricycle\tri6.php">Mr. Niall Carriedo</a></li>
              <li><a href="tricycle\tri7.php">Mr. Randy Santiago</a></li>
              <li><a href="tricycle\tri8.php">Mr. Garry Montecalo</a></li>
              <li><a href="tricycle\tri9.php">Mr. Anthony Castilla</a></li>
              <li><a href="tricycle\tri10.php">Mr. Jenio Granza</a></li>
              <li><a href="tricycle\tri11.php">Mr. Roy Pintor</a></li>
              <li><a href="tricycle\tri12.php">Mr. Brian Connor</a></li>
              <li><a href="tricycle\tri13.php">Mr. Ian Raplh Mateo</a></li>
              <li><a href="tricycle\tri14.php">Mr. Matthew Hista</a></li>
              <li><a href="tricycle\tri15.php">Mr. Eliezer Daal</a></li>
              <li><a href="tricycle\tri16.php">Mr. Dave Santos</a></li>
              <li><a href="tricycle\tri17.php">Mr. Ranz Samaranos</a></li>
              <li><a href="tricycle\tri18.php">Mr. Donald Paraiso</a></li>
              <li><a href="tricycle\tri19.php">Mr. Christian Pintor</a></li>
              <li><a href="tricycle\tri20.php">Mr. Arvel Tion</a></li>
            </ul>
          </li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

      <a href="logout.php" class="get-started-btn">Sign Out</a>

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <main id="main">

            <div id="map"> 
            
            </div>

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">


    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
   
         <div class="container">
        <div class="row">

          <div class="col-lg-12 col-md-1 footer-contact">
            <h4>CSU</h4>
            <p>
              Caraga State University-Main Campus <br>
              Ampayon, Butuan City<br>
              Philippines <br><br>
              <strong>Phone:</strong> +1 1234 1234<br>
              <strong>Email:</strong> qwert@gmail.com<br>
            </p>
          </div>
    </div>
    </div>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-5">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="https://www.facebook.com/uzzhiel.cebrian" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        <br><br>
         <div class="copyright">
                  &copy; Copyright <strong><span>ThisTeam</span></strong>. All Rights Reserved
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ -->
          Designed by ThisGroup
  </footer><!-- End Footer -->

  <div id="preloader"></div>
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>
  <script src="assets/vendor/purecounter/purecounter.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

  <!-- MAP MAIN JS FILES -->
  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
  <script src="main.js"></script>

</body>
</html>
