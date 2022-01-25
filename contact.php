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
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Contact | WebMapCSU</title>
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
</head>
<body>
    
 <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="home.php">WebMapCSU</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a  href="home.php">Home</a></li>
          <li><a href="about.php">About Us</a></li>
          <li><a class="active" href="contact.php">Contact Us</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

      <a href="logout.php" class="get-started-btn">Sign Out</a>

    </div>
  </header><!-- End Header -->

  <main id="main">

    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container" >
        <h2>Contact Us</h2>
        <p>Thank you for using our page. We hope we give you a good service and use it without error. If you have any concerns or suggestion about our page we are happy to hear it. Please message us using what provided below. </p>
      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
     
      <br>
<div class="container">
  <div class="row">
        <div class="col-lg-6 col-md-12">
            <div>
              <br>
          
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Caraga State University, Ampayon</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
               
                <p>Uzzhielangellynn@gmail.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
              </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
             <div data-aos="fade-up">
        <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.1471020691747!2d125.59356911427618!3d8.95858999255568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301eac565a4abe5%3A0x87859279e2e3f66a!2sCaraga%20State%20University!5e0!3m2!1sen!2sph!4v1634109815463!5m2!1sen!2sph" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>

  </div>
</div>
         </section><!-- End Contact Section -->
       </main><!-- End #main -->

           <section id="popular-courses" class="courses">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Creator</h2>
          <p>Part of this project</p>
        </div>
      </div>
    </section>
       <section id="trainers" class="trainers" style="margin-top: -100px;">
      <div class="container" data-aos="fade-up" >

        <div class="row" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/me.jpg" class="img-fluid" alt="">
              <div class="member-content">
                <h4>Uzzhiel Cebrian</h4>
                <span>Web Development</span>
                <p>
                </p>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href="https://www.facebook.com/uzzhiel.cebrian"><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4  d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/angelica.jpg" class="img-fluid" alt="">
              <div class="member-content">
                <h4>Angelica Sotis</h4>
                <span>Web Development</span>
                <p>
                </p>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-4 col-sm-4 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/lynn.jpg" class="img-fluid" alt="">
              <div class="member-content">
                <h4>Lynn Villacorta</h4>
                <span>Web Development</span>
                <p>
                
                </p>
                <div class="social">
                  <a href="https://mobile.twitter.com/Lyn63196969"><i class="bi bi-twitter"></i></a>
                  <a href="https://www.facebook.com/ambivert.alien"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/lovely.agst/"><i class="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section

<!-- ======= Footer ======= -->
  <footer id="footer">


    <div class="container d-md-flex py-4">

          <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
   
         <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 footer-contact">
            <h4>CSU</h4>
            <p>
              Caraga State University-Main Campus <br>
              Ampayon, Butuan City<br>
              Philippines <br><br>
              <strong>Phone:</strong> +1 1234 1234<br>
              <strong>Email:</strong>Uzzhielanglelynn@gmail.com<br>
            </p>
          </div>
    </div>
    </div>
        </div>
      </div>
      <div class="social-links text-center align-items-center text-md-right pt-3 pt-md-5">
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
        </div>


      </div>
    </div>
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

</body>

</html>