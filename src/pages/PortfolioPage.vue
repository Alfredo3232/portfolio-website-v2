<template>
  <nav-bar />

  <div class="site-main">
    <div class="site-main-inner">
      <div class="main-section portfolio-section">
        <h1 class="main-title">
          Portfolio
        </h1>

        <div class="timeline portfolio-timeline">
          <ul>
            <li class="timeline_element project">
              <div class="timeline_element-date">
                <time class="timeline_element-date-text">2021-2023</time>
              </div>

              <div class="timeline_element-contents">
                <div class="project-text">
                  <a
                    href="https://www.freecodecamp.org/Alfredo3232"
                    class="project-link"
                  >
                    <div class="project-title">Self-Studying & FreeCodeCamp</div>
                    <div class="project-subtitle">I completed various curriculums at FreeCodeCamp</div>
                  </a>
                  <div class="project-description">
                    <p>
                      FreeCodeCamp was a starter in my full-stack web development that allowed me to ge started on a lot of things that I know now
                      and the rest of the studying was looking at documentation and a lot of reading. Technologies like neo4j, vue, react, express
                      node.js was from self studying.
                    </p>
                  </div>

                  <div class="project-image">
                    <img
                      src="../images/FreeCodeCamp.png"
                      alt="FreeCodeCamp Logo"
                    >
                  </div>
                </div>
              </div>
            </li>
            <li class="timeline_element project">
              <div class="timeline_element-date">
                <time class="timeline_element-date-text">2019 - 2020</time>
              </div>

              <div class="timeline_element-contents">
                <div class="project-text">
                  <a
                    href="https://www.calstatela.edu/"
                    class="project-link"
                  >
                    <div class="project-title">Studied at California State University</div>
                    <div class="project-subtitle">Studied at Cal State LA for a almost 2 years for a Major in Computer
                      Science</div>
                  </a>
                  <div class="project-description">
                    <p>
                      I didn't complete my degree, due to some circumstances at the time, this allowed me to learn the multiple things in life
                      as well as the different types of technologies and paths that I can take in software development.
                    </p>
                  </div>

                  <div class="project-image">
                    <img
                      src="../images/logo.png"
                      alt="Cal State LA Logo"
                    >
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>