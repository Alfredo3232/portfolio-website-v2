<template>
  <aside class="site-sidebar">
    <div class="site-sidebar-inner h-card">
      <router-link to="/" class="person u-url">
        <div class="person-avatar u-photo">
          <img
            src="https://avatars.githubusercontent.com/u/61888719?v=4"
            alt="An image of myself"
            class="avatar"
          />
        </div>

        <div class="person-content">
          <h1 class="person-title p-name">Alfredo</h1>
          <h2 class="person-subtitle p-job-title p-note">
            Full-Stack Web Developer
          </h2>
        </div>
      </router-link>

      <nav class="block main-navigation">
        <div class="navigation-extend-bar">
          <div class="social-icons">
            <a
              rel="me"
              class="button button-icon u-email"
              title="mail: Alfredo3232@pm.me"
            >
              <i class="fa fa-envelope" />
            </a>
            <a
              rel="me"
              href="https://www.linkedin.com/in/alfredor1/"
              class="button button-icon"
              title="linkedin: "
            >
              <i class="fa fa-linkedin-square" />
            </a>
            <a
              rel="me"
              href="https://github.com/Alfredo3232"
              class="button button-icon"
              title="github: Alfredo3232"
            >
              <i class="fa fa-github-square" />
            </a>
          </div>
          <a
            href="#"
            class="navigation-extend-button js-extend-main-navigation"
          >
            <i class="fa fa-bars" />
          </a>
        </div>

        <div class="navigation-extendable">
          <ul>
            <li class="">
              <router-link to="/skills" active-class="current">
                Skills
              </router-link>
            </li>
            <li class="">
              <router-link to="/portfolio" active-class="current">
                Portfolio
              </router-link>
            </li>
            <li class="">
              <router-link to="/contact" active-class="current">
                Contact me
              </router-link>
            </li>
          </ul>
          <ul>
            <li class="">
              <a href="./Alfredo Rojas.pdf" target="_blank">Resume</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="block block-social">
        <div class="block-title">Get in touch</div>

        <div class="block-content">
          <div class="social-icons">
            <a
              rel="me"
              class="button button-icon u-email"
              title="mail: Alfredo3232@pm.me"
            >
              <i class="fa fa-envelope" />
            </a>
            <a
              rel="me"
              href="https://www.linkedin.com/in/alfredor1/"
              class="button button-icon"
              title="linkedin: Alfredo R"
            >
              <i class="fa fa-linkedin-square" />
            </a>
            <a
              rel="me"
              href="https://github.com/Alfredo3232"
              class="button button-icon"
              title="github: Alfredo3232"
            >
              <i class="fa fa-github-square" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
  .site-sidebar {
    overflow: hidden;
  }

  .site-sidebar .site-sidebar-inner {
    position: relative;
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    padding: 45px 40px;
  }

  .site-sidebar .site-sidebar-inner::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    .site-sidebar .site-sidebar-inner {
      overflow: initial;
      height: auto;
      padding: 0 40px;
    }
  }

  .site-sidebar .block .block-title,
  h1,
  h2,
  h5 {
    text-transform: uppercase;
  }
</style>
