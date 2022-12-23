<template>
  <nav-bar />

  <div class="site-main">
    <div class="site-main-inner">
      <div class="home-section">
        <div class="home-section-inner">
          <div class="home-heading">
            Welcome to my page, <br>I am Alfredo
          </div>
          <h2 class="home-subheading">
            I am a Full-Stack Web Developer<br>
            both <strong>front-end and back-end</strong> of web development.
          </h2>
          <div class="home-buttons">
            <router-link
              to="/skills"
              class="button button-outline button-white"
            >
              Skills
            </router-link>
            <br>
            <router-link
              to="/portfolio"
              class="button button-outline button-white"
            >
              Portfolio
            </router-link>
            <br>
            <a
              href="https://github.com/Alfredo3232"
              target="_blank"
              class="button button-outline button-white"
            >
              My Github
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-section {
  /* HOME SECTION WALLPAPER */
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(../images/home-bg3.ef171b05.jpg) center no-repeat #bababa;
  background-size: cover;

  /* HOME SECTION BOX */
  color: #fff;
  padding-left: 6vw;
  padding-top: 6vh;
  text-shadow:
    0 0 7px #fff,
    0 0 3px rgb(255 0 0),
    0 0 102px rgb(255 255 255),
    0 0 9px rgb(255 0 0);
  font-size: 12px
}

.home-section .home-section-inner {
  margin-left: 25%;
  margin-right: 3%;
  padding: 25px;
  background: rgba(0, 0, 0, 0.5)
}

.home-section .home-heading {
  font-size: 4em;
  font-weight: 500
}

.home-section .home-subheading {
  font-size: 3em;
  font-weight: 300;
  text-transform: none
}

.home-section .home-subheading strong {
  font-weight: 500
}

.home-section .home-location {
  font-size: 2em;
  font-weight: 300;
  margin-top: 1.25em
}

.home-section .home-buttons {
  margin-top: 5.15em;
  font-size: 2em;
  -webkit-animation-name: fadein;
  animation-name: fadein;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out
}

.home-section .home-buttons .button {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-transform: uppercase;
  font-weight: 300;
  text-decoration: none;
  opacity: .8;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, .47);
  margin-bottom: 1em
}

.home-section .home-buttons .button:active,
.home-section .home-buttons .button:focus,
.home-section .home-buttons .button:hover {
  opacity: 1
}

.home-section {
  overflow: hidden
}

.home-section {
  -webkit-font-smoothing: antialiased
}

.home-buttons {
  overflow: hidden
}

.button.button-outline {
  border-width: 1px;
  border-style: solid
}

.button.button-white {
  color: #fff
}

/* HOME SECTION MOBILE  */

@media screen and (max-width:1000px) {
  .home-section {
    padding: 40px 20px;
    background: 0 0;
    font-size: 10px
  }
}

@media screen and (max-width:767px) {
  .home-section {
    font-size: 8px
  }
}

@media screen and (max-width:567px) {
  .home-section {
    font-size: 7px
  }
}

@media screen and (max-width:1000px) {
  .home-section .home-section-inner {
    margin: 0;
    margin-top: 14vh;
  }
}


@media screen and (max-width:767px) {
  .home-section .home-buttons {
    font-size: 18px
  }

  .home-section .home-buttons .button {
    margin: 1em 0 0;
    float: left;
    clear: both
  }
}

@media screen and (max-width:1000px) {
  .home-section .home-buttons {
    margin-top: 1em
  }
}
</style>