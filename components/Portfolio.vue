<template>
    <!-- portfolio section -->
    <section class="yb-section  uk-overflow-hidden" id="portfolio">
      <div class="yb-section-point-wrapper">
        <div class="uk-container">
          <div class="yb-section-point">
            <sup>02</sup>
            <span>Portfolio</span>
          </div>
        </div>
      </div>
      <div class="uk-container ">
        <div data-uk-grid class="uk-grid-divider">
          <div class="uk-width-1-4@s uk-visible@s uk-margin-large-bottom yb-section-padding-top" id="portfolio-nav-wrapper">
            <div data-uk-sticky="bottom: #portfolio-nav-wrapper; offset: 100; media: 650">
              <ul class="yb-nav-left uk-tab-left uk-tab" data-uk-scrollspy-nav="closest: li; scroll: false; offset: 120">
                <li class="uk-active">
                  <a href="#myworks" class="yb-inner-link" data-offset="120">
                    <span data-uk-icon="minus"></span>
                    My Works
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="uk-width-expand@s yb-section-padding-top">
            <div>
              <h2 class="yb-section-title uk-heading-line " id="myworks"><span>My Works</span></h2>
              <div data-uk-filter="target: .js-filter" class="yb-margin-top-1 yb-margin-bottom-1">
                <ul class="yb-nav-filter uk-subnav uk-subnav-pill ">
                  <li><a data-uk-filter-control>All</a></li>
                  <li><a data-uk-filter-control=".data-Laravel">Laravel</a></li>
                  <li><a data-uk-filter-control=".data-Vue">Vuejs</a></li>
                  <li><a data-uk-filter-control=".data-mobile">Mobile</a></li>
                </ul>
                <ul class="js-filter uk-child-width-1-2  uk-grid-small  " data-uk-grid data-uk-lightbox="animation: fade;  toggle: .yb-lightbox">






                  <li :class="'data-'+work.tech" v-for="(work, index) in allWorks" :key="index">
                    <div class="yb-work-item uk-transition-toggle">
                      <div class="yb-work-item-img-wrap">
                        <div class="yb-work-item-img">
                          <img :src="work.poster.webp" width="383" height="574" :data-src="work.poster.webp" class="uk-transition-scale-up uk-transition-opaque" alt="" data-uk-img />
                        </div>
                        <div class="yb-work-item-overlay uk-transition-fade uk-position-cover uk-position-small uk-overlay  uk-flex uk-flex-center uk-flex-middle">
                          <div>
                            <a :href="work.poster.webp" class="yb-lightbox uk-transition-slide-left" :data-caption="work.title+', '+work.tech">
                              <span data-uk-icon="icon:plus; ratio:1.2"></span>
                            </a>
                            <a :href="work.url" target="_blank" class="uk-transition-slide-right show-portfolio">
                              <span data-uk-icon="icon:link; ratio:1.2"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <a href="project/project-details-02.html" class="show-portfolio">
                        <div class="yb-work-item-title">
                          <h5>{{ work.title }}</h5>
                          <span>{{ work.stack }}</span>
                        </div>
                      </a>
                    </div>
                  </li>







                 
                </ul>
                <div id="show-portofolio-details" class="uk-modal-full" data-uk-modal>
                  <div class="uk-modal-dialog ">
                    <button class="uk-modal-close-full uk-close-large" type="button" data-uk-close></button>
                    <div id="portofolio-details" data-uk-height-viewport class="uk-animation-toggle uk-overflow-hidden">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="yb-border-bottom">
      </div>
    </section><!-- end portfolio section -->
</template>

<script>

  export default{
      props: ['allWorks']
  }


</script>

<style>

</style>
