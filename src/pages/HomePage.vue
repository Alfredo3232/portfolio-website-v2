<template>
  <div class="site-main">
    <div class="site-main-inner">
      <div class="home-section">
        <div class="home-section-inner">
          <div class="home-heading">
            Welcome to my page, <br>I am Alfredo Rojas
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
              href="https://github.com/arojas32"
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