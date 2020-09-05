<template>
  <header class="yb-main-header" id="main-header">
    <!-- home section -->
    <div class="yb-full-height " id="home">



      <section class="yb-profile-desc">
        <div class="yb-section-point-wrapper" data-uk-parallax="opacity: 1, 0;">
          <div class="uk-container">
            <div class="yb-section-point">
              <sup>01</sup>
              <span>welcome</span>
            </div>
          </div>
        </div>
        <div class="yb-graphics">
          <div class="yb-graphic-1" data-uk-parallax="blur: 0,30;"></div>
          <div class="yb-graphic-2" data-uk-parallax="blur: 0,30;"></div>
        </div>
        <div class="uk-container uk-text-center yb-profile-desc-wrap uk-position-relative">
          <img src="img/x1.png" alt="" width="60" />
          <h1 class="uk-text-bold yb-gradient-text"><span>Mohamed</span> <span>Aitmiloud</span></h1>
          <div class="uk-text-bold yb-myjob">
            Im a <span id="typed" class="typed"></span>
          </div>
        </div>
      </section>

    </div><!-- end home section -->

    <!-- main menu -->
    <nav class="yb-main-menu " id="main-menu">
      <div class="uk-container" data-uk-navbar>
        <div class="uk-navbar-left">
          <a class="yb-logo uk-navbar-item uk-logo" href="#"><span>Aitmiloud</span></a>
        </div>
        <div class="uk-navbar-right uk-hidden@m">
          <a class="uk-navbar-toggle" href="#" id="btn-menu-toggle">
            <span data-uk-navbar-toggle-icon class="yb-icon-menu"></span>
            <span data-uk-icon="close" class="yb-icon-close"></span>
          </a>
        </div>
        <div class="yb-menu-toggle-wrapper" id="menucollapse">
          <div class="uk-navbar-center">
            <ul class="uk-navbar-nav" data-uk-scrollspy-nav="closest: li; scroll: false; offset: 79 ">
              <li>
                <a class="yb-inner-link" href="#home"> Home </a>
              </li>
              <li>
                <a class="yb-inner-link" href="#portfolio"> Portfolio </a>
              </li>
              <li>
                <a class="yb-inner-link" href="#about"> About </a>
              </li>
              <li>
                <a class="yb-inner-link" href="#resume"> Resume </a>
              </li>
              <li>
                <a class="yb-inner-link" href="#contact"> Contact </a>
              </li>
            </ul>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav yb-social-icons">
              <li>
                <a href="https://www.linkedin.com/in/mohammed-aitmiloud/">
                  <span class="uk-icon" data-uk-icon="icon: linkedin"></span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Mohamedaitmiloud">
                  <span class="uk-icon" data-uk-icon="icon: github"></span>
                </a>
              </li>


              <li>
                <a href="#">
                  <span class="uk-icon">Dark Mode</span>
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </nav><!-- end main menu -->
  </header><!-- end main header -->
</template>

<style>

</style>
