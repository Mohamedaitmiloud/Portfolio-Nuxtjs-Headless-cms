<template>
    <!-- resume section -->
    <section class="yb-section " id="resume">
      <div class="yb-section-point-wrapper">
        <div class="uk-container">
          <div class="yb-section-point">
            <sup>03</sup>
            <span>Resume</span>
          </div>
        </div>
      </div>
      <div class="uk-container">
        <div data-uk-grid class="uk-grid-divider">
          <div class="uk-width-1-4@s uk-visible@s uk-margin-large-bottom yb-section-padding-top " id="resume-nav-wrapper">
            <div data-uk-sticky="bottom: #resume-nav-wrapper; offset: 100; media: 650">
              <ul class="yb-nav-left uk-tab-left uk-tab" data-uk-scrollspy-nav="closest: li; scroll: false; offset: 120">
                <li class="uk-active">
                  <a href="#education" class="yb-inner-link" data-offset="120">
                    <span data-uk-icon="minus"></span>
                    Education
                  </a>
                </li>
                <li>
                  <a href="#experience" class="yb-inner-link" data-offset="120">
                    <span data-uk-icon="minus"></span>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#skills" class="yb-inner-link" data-offset="120">
                    <span data-uk-icon="minus"></span>
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#awwwards" class="yb-inner-link" data-offset="120">
                    <span data-uk-icon="minus"></span>
                    Awards
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="uk-width-expand@s yb-section-padding-top">
            <div>
              <h2 class="yb-section-title uk-heading-line" id="education">
                <span>Education</span>
              </h2>
              <div class="yb-resume-list">
                <ul class="uk-list uk-list-large uk-list-divider">



                  <li v-for="(education, index) in allEducations" :key="index">
                    <div class="yb-resume-item">
                      <div class="yb-resume-item-date">
                        <div class="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                        <div class="yb-resume-item-date-text"><span>{{ education.period }}</span></div>
                      </div>
                      <h4 class="yb-section-title">{{ education.title }}</h4>
                      <strong>{{ education.school }}</strong>
                      <div class="uk-text-small">
                        <p>{{ education.body }}</p>
                      </div>
                    </div>
                  </li>


                </ul>
              </div>
            </div>
            <div>
              <h2 class="yb-section-title  uk-heading-line " id="experience">
                <span>Experience</span>
              </h2>
              <div class="yb-resume-list">
                <ul class="uk-list uk-list-large uk-list-divider">

                  <li v-for="(experience, index) in allExperiences" :key="index">
                    <div class="yb-resume-item">
                      <div class="yb-resume-item-date">
                        <div class="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                        <div class="yb-resume-item-date-text"><span>{{ experience.period }}</span></div>
                      </div>
                      <h4 class="yb-section-title">{{ experience.title }}</h4>
                      <strong>{{ experience.place }}</strong>
                      <div class="uk-text-small">
                        <p>{{ experience.body }}</p>
                      </div>
                    </div>
                  </li>


                </ul>
              </div>
            </div>
            <div>
              <h2 class="yb-section-title  uk-heading-line " id="skills">
                <span>My Tech Stack</span>
              </h2>
              <div class="yb-margin-top-1 yb-margin-bottom-2">
                <div class="uk-grid-collapse  uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-text-center" data-uk-grid>

                  <div v-for="(stack, index) in allStacks" :key="index">
                    <div class="yb-box-circle">
                     
                        <img :src="stack.logo.url" width="100" height="100" class="lazyload">
      
                      <h5 class="yb-box-circle-title">{{ stack.name }}</h5>
                    </div>
                  </div>

                </div>
                <div data-uk-grid class="uk-child-width-1-2">
                  <div>
                    <h4 class="yb-section-title">Soft Skills</h4>
                    <ul class="uk-list uk-list-large  uk-list-divider">
                      <li>
                        <div class="yb-resume-skill-item">
                          <h5>
                            Problem Solving <small class="uk-float-right uk-text-bold uk-visible@s">100%</small>
                          </h5>
                          <progress class="uk-progress" value="100" max="100"></progress>
                        </div>
                      </li>
                      <li>
                        <div class="yb-resume-skill-item">
                          <h5>
                            Creativity <small class="uk-float-right uk-text-bold uk-visible@s">90%</small>
                          </h5>
                          <progress class="uk-progress" value="90" max="100"></progress>
                        </div>
                      </li>
                      <li>
                        <div class="yb-resume-skill-item">
                          <h5>
                            Time Management <small class="uk-float-right uk-text-bold uk-visible@s">80%</small>
                          </h5>
                          <progress class="uk-progress" value="80" max="100"></progress>
                        </div>
                      </li>
                      <li>
                        <div class="yb-resume-skill-item">
                          <h5>
                            Team Work <small class="uk-float-right uk-text-bold uk-visible@s">90%</small>
                          </h5>
                          <progress class="uk-progress" value="90" max="100"></progress>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="yb-section-title">Language </h4>
                    <ul class="uk-list uk-list-large uk-list-divider">
                      <li>
                        <div class="yb-resume-skill-item">
                          <h5>
                            English <small class="uk-float-right uk-text-bold uk-visible@s">100%</small>
                          </h5>
                          <progress class="uk-progress" value="100" max="100"></progress>
                        </div>
                      </li>
                      <li>
                        <div class="yb-resume-skill-item">
                          <h5>
                            French <small class="uk-float-right uk-text-bold uk-visible@s">70%</small>
                          </h5>
                          <progress class="uk-progress" value="70" max="100"></progress>
                        </div>
                      </li>
                      <li>
                        <div class="yb-resume-skill-item">
                          <h5>
                            Chinese <small class="uk-float-right uk-text-bold uk-visible@s">80%</small>
                          </h5>
                          <progress class="uk-progress" value="80" max="100"></progress>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 class="yb-section-title  uk-heading-line " id="awwwards">
                <span>Awards</span>
              </h2>
              <div class="yb-resume-list">
                <ul class="uk-list uk-list-large uk-list-divider">

                  <li v-for="(award, index) in allAwards" :key="index">
                    <div class="yb-resume-item">
                      <div class="yb-resume-item-date">
                        <div class="yb-resume-item-date-icon"> <span data-uk-icon="calendar"></span></div>
                        <div class="yb-resume-item-date-text"><span>{{ award.period }}</span></div>
                      </div>
                      <h4 class="yb-section-title">{{ award.title }}</h4>
                      <strong>{{ award.place }}</strong>
                      <div class="uk-text-small">
                        <p>{{ award.body }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="yb-section yb-section-padding uk-background-cover uk-background-fixed " data-uk-parallax="bgy: -200" data-src="/img/bg/bg2.jpg" data-uk-img>
        <div class="yb-overlay-primary uk-position-cover"></div>
        <div class="uk-container uk-text-center uk-position-relative">
          <div data-uk-grid class="uk-grid-small  uk-flex-center">
            <div>
              <a href="#" class=" yb-btn uk-button uk-button-primary uk-button-large">Download CV</a>
            </div>
            <div>
              <a href="#contact" class="yb-inner-link yb-btn uk-button uk-button-danger  uk-button-large">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </section><!-- end resume section -->
</template>

<script>

  export default{
      props: ['allEducations','allExperiences','allAwards','allStacks'],

  }


</script>

<style>

</style>
