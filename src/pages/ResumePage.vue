<template>
  <div class="cv-page h-resume">
    <div class="cv-page-inner">
      <div class="cv-section cv-header p-contact h-card">
        <div class="cv-header-avatar">
          <img src="../images/self.jpg">
        </div>
        <div class="cv-header-text">
          <h1 class="cv-header-name p-name">
            Alfredo
          </h1>
          <h2 class="cv-header-subname p-title">
            Full-Stack Web Developer
          </h2>
          <div class="cv-header-lead p-note">
            2 years of experience in the front-end and back-end of web development.<br>
          </div>
        </div>
        <div class="cv-header-meta">
          <div class="cv-header-meta-right">
            <div class="cv-header-meta-row">
              <a
                href="https://portfolio-website-Alfredo3232.herokuapp.com/"
                rel="me"
                class="u-url"
              >https://portfolio-website-Alfredo3232.herokuapp.com/</a>
            </div>
            <div class="cv-header-meta-row">
              <p class="red">
                Alfredo3232@pm.me
              </p>
            </div>
            <!-- <div class="cv-header-meta-row">
              +48 792 290 484
            </div> -->
            <div class="cv-header-meta-row">
              <a href="https://www.linkedin.com/in/alfredor1/">Alfredo</a>
            </div>
          </div>
        </div>
      </div>

      <div class="cv-section">
        <h3 class="cv-section-title">
          Skills
        </h3>
        <div class="cv-section-content cv-section-content--indented">
          <ul style="margin-top: 0">
            <li>
              Back-end: node.js, SQL databases, and NoSQL databases.
            </li>
            <li>
              Front-end: JavaScript, React (with Hooks), JQuery, Underscore.
            </li>
            <li>
              DevOps: configured and maintained web servers through AWS, Firebase, and Heroku.
            </li>
            <li>
              Open to evolving in: Java, Python and many else.
            </li>
          </ul>
        </div>
      </div>

      <div class="cv-section">
        <h3 class="cv-section-title">
          Experience
        </h3>
        <div class="cv-section-content">
          <div class="cv-timeline">
            <div class="cv-timeline-row p-experience h-event">
              <div class="cv-timeline-side">
                <div class="cv-timeline-company">
                  Project Title
                </div>
                <div class="cv-timeline-date">
                  Date
                </div>
                <a
                  href=""
                  target="_blank"
                  class="cv-timeline-website"
                >Here goes a link to that project.</a>
              </div>
              <div class="cv-timeline-body p-summary">
                <h4 class="cv-timeline-position p-name">
                  Position
                </h4>
                <p>
                  What did your project achieve?
                </p>
                <ul>
                  <li>
                    Discuss the different Technologies used.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div class="cv-section">
          <h3 class="cv-section-title">
            Education
          </h3>
          <div class="cv-section-content">
            <div class="cv-timeline">
              <div class="cv-timeline-row p-education h-event">
                <div class="cv-timeline-side">
                  <div class="cv-timeline-company">
                    California State University of Los Angeles
                  </div>
                  <div class="cv-timeline-date">
                    2019 - 2020 (unfinished)
                  </div>
                  <a
                    href="https://www.calstatela.edu/"
                    target="_blank"
                    class="cv-timeline-website"
                  >Cal State LA</a>
                </div>
                <div class="cv-timeline-body p-summary">
                  <div class="cv-timeline-position p-name">
                    Computer Science
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="cv-section">
          <h3 class="cv-section-title">
            Other perks
          </h3>
          <div class="cv-section-content cv-section-content--indented">
            <ul>
              <li>
                Knowledge of algorithms and data structures.
              </li>
              <li>
                I can speak, write and read both English and Spanish fluently
              </li>
              <li>
                In my free time I like to research about new upcoming Technologies, play video games and visit new
                places.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.red, a {
  color: black;
}

.cv-timeline-position {
    font-weight: 400;
    font-size: 18px;
    color: #333;
    line-height: 1.3
}

.cv-timeline-company {
    text-transform: uppercase
}

@media screen and (min-width:768px) {
    .cv-timeline-company {
        background-color: #eee;
        padding: 3px 7px;
        margin-bottom: 5px;
        border-radius: 2px
    }
}

@media print {
    .cv-timeline-company {
        background: 0 0;
        padding: 0;
        font-size: 14px;
        margin-bottom: 0
    }
}

.cv-timeline-body {
    float: left;
    width: 77%
}

.cv-timeline-body p,
.cv-timeline-body ul {
    margin-top: 5px;
    margin-bottom: 5px
}


.cv-timeline-side {
    float: left;
    width: 23%;
    text-align: right;
    padding-right: 15px;
    color: #777;
    font-size: 13px
}

@media screen and (max-width:767px) {
    .cv-timeline-side {
        float: none;
        width: auto;
        text-align: center;
        margin-bottom: 10px;
        overflow: hidden
    }
}


.cv-section-content ol,
.cv-section-content ul:not(.tech-tags) {
    padding-left: 20px
}

.cv-timeline-row {
    page-break-inside: avoid
}

.cv-timeline-row+.cv-timeline-row {
    margin-top: 15px
}

.cv-section-content.cv-section-content--indented {
    padding-left: 21.5%
}

@media screen and (max-width:767px) {
    .cv-section-content.cv-section-content--indented {
        padding-left: 0
    }

    .cv-timeline-row+.cv-timeline-row {
        padding-top: 15px;
        border-top: 1px solid #eee
    }
}

.cv-section+.cv-section {
    margin-top: 1.5em
}

.cv-section-title {
    color: #BB1E1E;
    font-size: 24px;
    font-weight: 300;
    padding-left: 21.5%;
    margin-bottom: 15px;
    page-break-after: avoid
}

@media screen and (max-width:767px) {
    .cv-section+.cv-section {
        margin-top: 15px
    }

    .cv-section-title {
        padding-left: 0
    }
}

@media screen and (max-width:767px) {
    .cv-timeline-body {
        float: none;
        width: auto
    }

    .cv-timeline-company {
        float: left
    }

    .cv-timeline-website {
        display: none
    }

    .cv-timeline-date {
        float: right
    }
}

.cv-header-meta-right {
    float: right;
    border-left: 1px solid #e0e0e0;
    padding-left: 15px;
    text-align: left
}

.cv-header-name {
    display: block;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 30px;
    line-height: 1;
    margin-bottom: 5px;
    color: #BB1E1E
}

.cv-header-subname {
    display: block;
    text-transform: none;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 5px;
    color: #777
}

.cv-header-meta {
    font-size: 14px;
    color: #777;
    white-space: nowrap
}

@media screen and (max-width:1000px) {
    .cv-header-text {
        padding: 0
    }

    .cv-header-meta {
        white-space: normal;
        margin-top: 5px
    }
}

@media screen and (max-width:1000px) {
    .cv-header-meta-right {
        float: none;
        padding: 0;
        text-align: center;
        border-left: none
    }

    .cv-header-meta-row {
        display: inline
    }

    .cv-header-meta-row+.cv-header-meta-row:before {
        content: ' / '
    }
}

.cv-header-text {
    -webkit-box-flex: 1;
    flex: 1;
    padding: 0 15px
}

.cv-header {
    display: -webkit-box;
    display: flex
}

.cv-header-avatar {
    float: left
}

.cv-header-avatar img {
    border-radius: 2px;
    height: 150px
}

@media screen and (max-width:1000px) {
    .cv-page {
        width: auto;
        margin: 0 auto;
        padding: 20px
    }

    .cv-header {
        display: block;
        text-align: center
    }

    .cv-header-avatar {
        float: none;
        margin-bottom: 15px
    }

    .cv-header-avatar img {
        border-radius: 6px
    }
}
</style>