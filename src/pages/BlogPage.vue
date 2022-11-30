<template>
  <router-view />

  <nav-bar />

  <div
    id="__nuxt"
    data-server-rendered="true"
    class="site-main"
  >
    <div id="__layout">
      <div class="wrapper">
        <header>
          <h1>Blogs</h1>
        </header>
        <main>
          <div>
            <div class="tags mb-6">
              <hr size="30">
              <button class="tag tag--active">
                All
                <span class="number">?</span>
              </button>
              <button class="tag">
                Beginner
                <span class="number">?</span>
              </button>
              <button class="tag">
                Web Development
                <span class="number">?</span>
              </button>
              <button class="tag">
                Computer Science
                <span class="number">?</span>
              </button>
              <button class="tag">
                Programming
                <span class="number">?</span>
              </button>
              <button class="tag">
                HTML
                <span class="number">?</span>
              </button>
              <button class="tag">
                Python
                <span class="number">?</span>
              </button>
              <button class="tag">
                JavaScript
                <span class="number">?</span>
              </button>
              <button class="tag">
                TypeScript
                <span class="number">?</span>
              </button>
              <button class="tag">
                CSS
                <span class="number">?</span>
              </button>
              <button class="tag">
                GitHub
                <span class="number">?</span>
              </button>
              <button class="tag">
                Git
                <span class="number">?</span>
              </button>
              <button class="tag">
                TDD
                <span class="number">?</span>
              </button>
              <button class="tag">
                Algorithms
                <span class="number">?</span>
              </button>
              <button class="tag">
                Software Development
                <span class="number">?</span>
              </button>
              <button class="tag">
                Open Source
                <span class="number">?</span>
              </button>


              <hr size="30">
              <button class="tag">
                Front End
                <span class="number">?</span>
              </button>
              <button class="tag">
                JQuery
                <span class="number">?</span>
              </button>
              <button class="tag">
                Transpilation
                <span class="number">?</span>
              </button>
              <button class="tag">
                React
                <span class="number">?</span>
              </button>
              <button class="tag">
                Vue
                <span class="number">?</span>
              </button>
              <button class="tag">
                Angular
                <span class="number">?</span>
              </button>
              <button class="tag">
                Clean Code
                <span class="number">?</span>
              </button>
              <button class="tag">
                SCSS
                <span class="number">?</span>
              </button>
              <button class="tag">
                Tech
                <span class="number">?</span>
              </button>
              <button class="tag">
                React Native
                <span class="number">?</span>
              </button>
              <button class="tag">
                Linux
                <span class="number">?</span>
              </button>
              <button class="tag">
                Node.js
                <span class="number">?</span>
              </button>

              <hr size="30">
              <button class="tag">
                Backend
                <span class="number">?</span>
              </button>
              <button class="tag">
                Productivity
                <span class="number">?</span>
              </button>
              <button class="tag">
                MySQL
                <span class="number">?</span>
              </button>
              <button class="tag">
                MongoDB
                <span class="number">?</span>
              </button>
              <button class="tag">
                Fullstack
                <span class="number">?</span>
              </button>
              <button class="tag">
                Project Management
                <span class="number">?</span>
              </button>
              <button class="tag">
                Cloud
                <span class="number">?</span>
              </button>
              <button class="tag">
                APIs
                <span class="number">?</span>
              </button>
              <button class="tag">
                AWS
                <span class="number">?</span>
              </button>



              <hr size="30">
              <button class="tag">
                Software Engineering
                <span class="number">?</span>
              </button>
              <button class="tag">
                Freelancing
                <span class="number">?</span>
              </button>
              <button class="tag">
                Docker
                <span class="number">?</span>
              </button>
              <button class="tag">
                DevOps
                <span class="number">?</span>
              </button>
              <button class="tag">
                Career
                <span class="number">?</span>
              </button>
              <button class="tag">
                SEO
                <span class="number">?</span>
              </button>
              <button class="tag">
                Software Architecture
                <span class="number">?</span>
              </button>
            </div>

            <div class="blogs mb-6">
              <div class="blog tag">
                <div class="blog-header">
                  <router-link
                    to="/blog/ExampleBlog"
                    class="ml-3 blog-link text-2xl"
                  >
                    How is Authentication done in most websites?
                  </router-link>
                </div>

                <div class="blog-content">
                  <div class="blog-description">
                    Most of us just log in our favorite website and never really question how is it done in the backend?
                    How can I still be logged in even if I close the browser?
                  </div>
                  <ul class="blog-tags">
                    <li class="tag tag--small">
                      Backend
                    </li>
                    <li class="tag tag--small">
                      Cloud
                    </li>
                    <li class="tag tag--small">
                      Fullstack
                    </li>
                    <li class="tag tag--small">
                      Front End
                    </li>
                  </ul>
                </div>

                <div class="blog-footer">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    links...
                  </a>
                </div>
              </div>

              <div class="blog tag">
                <div class="blog-header">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                    class="ml-3 blog-link text-2xl"
                  >
                    Title of Blog
                  </a>
                </div>
                <div class="blog-content">
                  <div class="blog-description">
                    Blog Description
                  </div>
                  <ul class="blog-tags">
                    <li class="tag tag--small">
                      Topics Talked About?
                    </li>
                  </ul>
                </div>
                <div class="blog-footer">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    links...
                  </a>
                </div>
              </div>

              <div class="blog tag">
                <div class="blog-header">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                    class="ml-3 blog-link text-2xl"
                  >
                    Title of Blog
                  </a>
                </div>
                <div class="blog-content">
                  <div class="blog-description">
                    Blog Description
                  </div>
                  <ul class="blog-tags">
                    <li class="tag tag--small">
                      Topics Talked About?
                    </li>
                  </ul>
                </div>
                <div class="blog-footer">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener"
                  >
                    links...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer class="text-center">
          <p>
            Made by <a href="https://portfolio-website-arojas32.herokuapp.com/">Alfredo Rojas</a>
          </p>

          <p>Code on <a href="https://github.com/arojas32/Portfolio-Website">GitHub</a>.</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0
}

.text-center {
  text-align: center
}

.text-2xl {
  font-size: 1.5rem
}

.mb-6 {
  margin-bottom: 2rem
}

.ml-3 {
  margin-left: 1rem
}

html {
  --black: #0e141b;
  --orange: #ff8a00;
  --green: #4fc08d;
  --pink: #a84fc0;
  --rose: #ff0a78;
  --purple: #7928ca;
  --blue: #6ac;
  --grey: #2a4555;
  --dark-grey: #1e262f;
  scroll-behavior: smooth;
  color: #fff
}

html .wrapper {
  padding: 2rem 2rem 0;
  background-color: #333333;
}

html footer a {
  text-decoration: underline
}

html .tag {
  background-color: #333333;
  background-color: var(--grey);
  opacity: .8;
  transform-origin: center center;
  margin-right: 8px;
  margin-bottom: 8px;
  border: 0;
  color: #fff;
  cursor: pointer;
  transition: all .4s;
  padding: 5px;
  border-radius: 5px;
  font-size: 1.1rem;
  outline: 0
}

html .tag:hover {
  opacity: 1;
  transform: scale(1.05)
}

html .tag--active {
  background: #4fc08d;
  background: var(--green)
}

html .tag--small {
  cursor: default;
  font-size: 1rem
}

html .tag--small:hover {
  opacity: .8;
  transform: none
}

html .tag .number {
  background-color: #0e141b;
  background-color: var(--black);
  font-size: 1rem;
  padding: 1px 3px;
  border-radius: 2px
}

html .blogs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 2rem;
  gap: 2rem
}

html .blog {
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #333333;
  background-color: var(--dark-grey);
  box-shadow: inset 0 1px 0 0 hsla(0, 0%, 100%, .1)
}

html .blog-header {
  display: flex;
  align-items: center;
  padding: 15px
}

html .blog-content {
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column
}

html .blog-description {
  font-size: 1.2rem;
  line-height: 1.8rem;
  flex: 1
}

html .blog-tags {
  list-style-type: none;
  padding: 0
}

html .blog-tags li {
  display: inline-block
}

html .blog-footer {
  display: flex;
  border-top: 1px solid #2a4555;
  border-top: 1px solid var(--grey)
}

html .blog-footer a {
  width: 50%;
  padding: 15px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}
</style>