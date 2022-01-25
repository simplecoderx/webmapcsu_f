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

  <title>About | WebMapCSU</title>
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
<style>
::-webkit-scrollbar {
      width: 0px;
      background-color: green;
  }

</style>

<body>

 <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="home.php">WebMapCSU</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="active" href="home.php">Home</a></li>
          <li><a href="aboutc.php">About Us</a></li>
         <li><a href="viewmap.php">Map</a></li>
         <li class="dropdown"><a href="#"><span>Buildings</span> <i class="bi bi-chevron-down"></i></a>
            <ul class="scroll">
              <li><a href="#">Agro - Workshop TESDA</a></li>
              <li><a href="#">Annex 2</a></li>
              <li><a href="#">Annex 3</a></li>
              <li><a href="#">Arcade</a></li>
              <li><a href="#">ATM Machine</a></li>
              <li><a href="#">BasketballVolleyball Court</a></li>
              <li><a href="#">Bio Diagnostic Lab</a></li>
              <li><a href="#">Bodega</a></li>
              <li><a href="#">Bookstore</a></li>
              <li><a href="#">CAA Building</a></li>
              <li><a href="#">CAA Canteen</a></li>
              <li><a href="#">CAA Diagnostic Lab.</a></li>
              <li><a href="#">CAA Restroom</a></li>
              <li><a href="#">Cafeteria</a></li>
              <li><a href="#">CAS Building</a></li>
              <li><a href="#">CAS Canteen</a></li>
              <li><a href="#">CAS Covered Court</a></li>
              <li><a href="#">CAS New Building</a></li>
              <li><a href="#">CAS Student Center</a></li>
              <li><a href="#">CED Building</a></li>
              <li><a href="#">CED Canteen</a></li>
              <li><a href="#">CED Restroom</a></li>
              <li><a href="#">CED Student Center</a></li>
              <li><a href="#">CEIT Complex</a></li>
              <li><a href="#">CEGS Building</a></li>
              <li><a href="#">CEGS Canteen</a></li>
              <li><a href="#">CEGS Restroom</a></li>
              <li><a href="#">CEGS Student Center</a></li>
              <li><a href="#">CHED</a></li>
              <li><a href="#">Church</a></li>
              <li><a href="#">COFES Classroom-Hostel</a></li>
              <li><a href="#">COFES</a></li>
              <li><a href="#">Covered Walk</a></li>
              <li><a href="#">Dairy</a></li>
              <li><a href="#">DOST</a></li>
              <li><a href="#">ECOlodge</a></li>
              <li><a href="#">ECO Park</a></li>
              <li><a href="#">EMB Machine</a></li>
              <li><a href="#">Executive House</a></li>
              <li><a href="#">Farm Mechanization Center</a></li>
              <li><a href="#">Food Innovation Center</a></li>
              <li><a href="#">Food Tech Bldg.</a></li>
              <li><a href="#">Gasoline Station</a></li>
              <li><a href="#">Gent's Dorm</a></li>
              <li><a href="#">Gents' Dorm (undercons)</a></li>
              <li><a href="#">Green House</a></li>
              <li><a href="#">Guard House (Main Gate)</a></li>
              <li><a href="#">Guard House-Green Gate</a></li>
              <li><a href="#">Hardenning Area</a></li>
              <li><a href="#">Harrison Statue</a></li>
              <li><a href="#">Mechanical Dyer</a></li>
              <li><a href="#">Mechatronic Bldg.</a></li>
              <li><a href="#">Microriza Green House</a></li>
              <li><a href="#">Micoriza Office</a></li>
              <li><a href="#">Native Chicken House</a></li>
              <li><a href="#">New Admin Office</a></li>
              <li><a href="#">New State of the Art Library</a></li>
              <li><a href="#">Nursery</a></li>
              <li><a href="#">OATC</a></li>
              <li><a href="#">Ochoa Statue</a></li>
              <li><a href="#">Old Admin Office</a></li>
              <li><a href="#">OLD CCARD BUILDING</a></li>
              <li><a href="#">Old Farm Mechanization Center</a></li>
              <li><a href="#">Old ROTC - Gen. Service Office</a></li>
              <li><a href="#">ORGSM OFFICE</a></li>
              <li><a href="#">Oval</a></li>
              <li><a href="#">Overpass</a></li>
              <li><a href="#">PE Office</a></li>
              <li><a href="#">Pigpens</a></li>
              <li><a href="#">Power House (New Admin Bldg.)</a></li>
              <li><a href="#">Power House (Mecha)</a></li>
              <li><a href="#">Reservior</a></li>
              <li><a href="#">Rooting/ Recovery</a></li>
              <li><a href="#">S & T Bldg.</a></li>
              <li><a href="#">Solar Dyer</a></li>
              <li><a href="#">Tissue Culture Lab.</a></li>
              <li><a href="#">Tricycle Area</a></li>
              <li><a href="#">University Gymanasium</a></li>
              <li><a href="#">Vermi House</a></li>
              <li><a href="#">Villares BLDG.</a></li>
              <li><a href="#">Waiting Shed</a></li>
            </ul>
          </li>
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

  <main id="main">
    <!-- ======= Breadcrumbs ======= -->
    <div class="breadcrumbs" data-aos="fade-in">
      <div class="container">
        <h2>About Us</h2>
        <p>The team establish the factors that would have leads to success and how such success factors can help people in the university. Proposing a new project idea in the university is a sharing of responsibility as a member of campus. To achieve a common objective, excellent leadership and collaboration among members are vital, having the same outlook and working toward it under the guidance of a committed, active, and loyal team. Engaged members and leaders are critical to the success of any organization.. </p>
      </div>
    </div><!-- End Breadcrumbs -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/course-3.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>What motivates our team?</h3>
            <p class="fst-italic">
             The Caraga State University is a broad area. Every year it always has new people like students, teachers, and staff who confuse ways and buildings or offices in the university. Inside the campus, it has motor vehicles since it's too far to walk from and walk to the entrance gate. However, there are times that it is unreachable when the location of a person is too far from the vehicle's area or entrance gate. 
            <p class="fst-italic">
              This project attempts to find the solution to one of the struggles of every people in the university

            </p>

          </div>
        </div>

      </div>
    </section><!-- End About Section -->

    <!-- ======= Counts Section ======= -->
   <section id="counts" class="counts section-bg">
      <div class="container">

        <div class="row counters">

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="6000" data-purecounter-duration="1" class="purecounter"></span>
            <p>Students</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="1" class="purecounter"></span>
            <p>Department</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="81" data-purecounter-duration="1" class="purecounter"></span>
            <p>Buildings</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="20" data-purecounter-duration="1" class="purecounter"></span>
            <p>Tricycle Drivers</p>
          </div>

        </div>

      </div>
    </section><!-- End Counts Section -->

    <!-- ======= Testimonials Section ======= -->
    <section id="testimonials" class="testimonials">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Testimonials</h2>
          <p>What is our saying</p>
        </div>

        <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div class="swiper-wrapper">

        <!-- End testimonial item -->

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="css/img/11.jpg" class="testimonial-img" alt="">
                  <h3>Uzzhiel Cebrian</h3>
                  <h4>Designer and Programmer</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    “If we could first know where we are, and whither we are tending, we could better judge what to do, and how to do it.” 
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div>

            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/lynn.jpg" class="testimonial-img" alt="">
                  <h3>Lynn Villacorta</h3>
                  <h4>Designer and programmer</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                   Never be afraid of discovering new things, we all have spaces for growth and progress.
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->


            <div class="swiper-slide">
              <div class="testimonial-wrap">
                <div class="testimonial-item">
                  <img src="assets/img/angelica.jpg" class="testimonial-img" alt="">
                  <h3>Angelica Sotis</h3>
                  <h4>Designer and Programmer</h4>
                  <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                   "We only live once, thus every moment is a gift and from everyday we learn from it." 
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                  </p>
                </div>
              </div>
            </div><!-- End testimonial item -->

          </div>
          <div class="swiper-pagination"></div>
        </div>

      </div>
    </section><!-- End Testimonials Section -->

  </main><!-- End #main -->

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