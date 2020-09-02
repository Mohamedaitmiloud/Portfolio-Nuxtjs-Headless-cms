<template>
    <!-- contact section -->
    <section class="yb-section yb-border-top" id="contact">
      <div class="yb-section-point-wrapper">
        <div class="uk-container">
          <div class="yb-section-point ">
            <sup>06</sup>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div class="uk-container">
        <div data-uk-grid class=" uk-grid-divider">
          <div class="yb-section-padding yb-contact-left uk-width-3-4@m">
            <div>
              <h2 class="yb-section-title uk-heading-line ">
                <span>Get in touch</span>
              </h2>
              <p class="uk-text-bold">Feel free to contact me</p>
              <div id="contact-form-alert"></div>
              <form name="contact" id="contact-form" class="uk-form-stacked" data-netlify="true">
                <div class="uk-grid uk-grid-small uk-child-width-1-2@s">
                  <div>
                    <div class="uk-margin">
                      <label for="f_email" class="uk-form-label">Email*</label>
                      <div class="uk-form-controls uk-inline uk-width-1-1">
                        <span class="uk-form-icon" data-uk-icon="icon: user"></span>
                        <input class="yb-input uk-input  uk-border-rounded" type="email" name="email" id="f_email" placeholder=" Your email here . . ." />
                      </div>
                      <small class="uk-text-danger err-msg" id="f_email_error"></small>
                    </div>
                  </div>
                  <div>
                    <div class="uk-margin">
                      <label for="f_phone" class="uk-form-label">Phone*</label>
                      <div class="uk-form-controls uk-inline uk-width-1-1">
                        <span class="uk-form-icon" data-uk-icon="icon: phone"></span>
                        <input class="yb-input uk-input uk-border-rounded" type="text" name="phone" id="f_phone" placeholder=" Your phone here . . ." />
                      </div>
                      <small class="uk-text-danger err-msg" id="f_phone_error"></small>
                    </div>
                  </div>
                </div>
                <div class="uk-margin ">
                  <label for="f_message" class="uk-form-label">Message*</label>
                  <div class="uk-form-controls">
                    <textarea class="yb-input  uk-textarea uk-border-rounded" rows="7" name="message" id="f_message" placeholder="Your message here . . ."></textarea>
                  </div>
                  <small class="uk-text-danger err-msg" id="f_message_error"></small>
                </div>
                <div class="uk-margin-top">
                  <button class="uk-button uk-button-primary uk-button-large  yb-btn" type="submit" id="btn-contact-form" data-textreset="Send Now">
                    <span class="uk-margin-small-right btn-text-wrap">Send Now</span>
                    <span data-uk-icon="arrow-right" class="uk-icon"> </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class=" uk-width-1-4@m yb-section-padding yb-contact-right">
            <p class="uk-margin-medium-bottom uk-visible@m">
              <img src="/img/empty.png" data-src="/img/profile2.jpg" width="500" height="500" data-uk-img alt="" class="uk-border-circle" />
            </p>
            <ul class="uk-list uk-list-divider uk-text-small yb-contact-mini">
              <li class="uk-flex uk-flex-middle">
                <span data-uk-icon="mail" class="uk-flex-none uk-text-primary "></span>
                <span>my.email@gmail.com</span>
              </li>
              <li class="uk-flex uk-flex-middle">
                <span data-uk-icon="phone" class="uk-flex-none uk-text-primary"></span>
                <span> +62-123-123-213</span>
              </li>
              <li class="uk-flex uk-flex-middle">
                <span data-uk-icon="location" class="uk-flex-none uk-text-primary "></span>
                <span>Lamda Street West Cibinong 8027 Bogor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- end contact section -->
</template>

<style>

</style>
