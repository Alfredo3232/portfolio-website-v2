<template>
  <nav-bar />

  <main>
    <div class="site-main">
      <div class="site-main-inner">
        <div class="main-section portfolio-section">
          <header>
            <h1>TITLE HOOK</h1>
          </header>
          <article>
            <figure class="titleimg">
              <img
                src=""
                title="Image Description"
              >
              <figcaption>Image Header</figcaption>
            </figure>

            <p>Hook.</p>
            <p>Hook transition to topic</p>
            <h2>Title Question?</h2>
            <p>Reasons if criticizing or praising:</p>
            <ol>
              <li>reason1</li>
              <li>reason2</li>
              <li>reason2</li>
              <li>reason3</li>
            </ol>
            <p>doubts of reasons?</p>
            <p>describe your experience with topic</p>
            <h3>Question?</h3>
            <p>Answer</p>
            <h2>Title Reason 1</h2>
            <h3>main answer one liner</h3>
            <p>Explanation 1</p>
            <p>Explanation 2, culprit?</p>
            <h3>Statement why?</h3>
            <h4>Reason</h4>
            <p>
              reason/history
            </p>
            <p />
            <p>Note</p>
            <h4>Specific topic or thing</h4>
            <p>talk about what good or bad</p>
            <h3> bigger specific topic or thing</h3>
            <p>make the reader think with a question that strengthens your point</p>
            <p>mock the topic or make light of it</p>
            <p>main explanation</p>
            <p>how can you resolve it or provide another point</p>
            <h2>why the solution?</h2>
            <p>question why do people like this solution?</p>
            <p>point 1</p>
            <p>point 2</p>
            <h3>how good is one of your point to your solution</h3>
            <p>your experience with the opposite</p>
            <p>point 1</p>
            <p>example to prove point</p>
            <p>why solution is better than normal</p>
          </article>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
:root {
  --bg: #ccc;
  --fg: #222;
  --behind: #123;
  --h1: #008;
  --red: #400;
  --yellow: #440;
  --blue: #004;
  --link: #037;
  --linksec: #059;
  --border: #333;
  --box: #444;
  --lime: #070;
}

body {
  background: var(--behind);
}

.lw,
p img,
li img,
h1 img,
h2 img,
h3 img,
h4 img,
dt img,
td img,
button img {
  max-height: .8em;
  max-width: 1em;
  vertical-align: middle;
}

img {
  max-width: 90%;
}

main {
  max-width: 1000px;
  margin: auto;
}

header h1 {
  color: rgb(119, 215, 247);
  border-style: solid;
  border-width: 0px 0px 2px 0px;
  border-color: #88c8ff;
  text-align: center;
  font-size: xx-large;
  font-family: "Fira Sans", sans;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-align: center;
}

.titleimg {
  align: center;
}

.titleimg img {
  margin: auto;
  max-width: 90%;
  max-height: 400px;
  display: block;
}

figcaption {
  text-align: center;
  display: block;
}
</style>