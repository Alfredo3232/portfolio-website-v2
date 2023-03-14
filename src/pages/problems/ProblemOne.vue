<template>
  <nav-bar />

  <div class="site-main">
    <div class="site-main-inner">
      <div class="main-section portfolio-section">
        <div class="toyPage">
          <div id="content">
            <h2>Average of an Array</h2>
            <h3>Problem 1</h3>
          </div>
          <hr>
          <div class="problem_content" role="problem">
            <p>
              It is the end of the academic year, fateful moment of your school report. Averages must be
              calculated.
              All the students come to you and beg you to calculate the average for them.
              Returns the average of the given array rounded down to the nearest integer.
              The array will never be empty.
              <br>
              Use this Function <br>
              <table>
                &emsp;function obtainTheMedian(grades) {<br>
                &emsp;}<br>
              </table>
            </p>
            <p>
              Try these inputs to test your problem out:
              <br>
              &emsp; [2,2,2,2] should equal to 2<br>
              &emsp; [1,2,3,4,5,] should equal to 3<br>
              &emsp; [7,8,14,17,14,16] should equal to 12<br>
            </p>
            <button id="button" style="background-color: #2a4555;" @click="showSolution">
              Show Solution
            </button>
            <div id="newpost" :class="show ? '' : 'hidden'">
              <p>
                function obtainTheMedian(grades) {<br>
                &emsp; let len = grades.length;<br>
                &emsp; let num = 0;<br>
                &emsp; let total;<br>
                &emsp; for (var i = 0; i &lt; grades.length; i++) {<br>
                &emsp; &emsp; num += grades[i]<br>
                &emsp; }<br>
                &emsp; total = num / len<br>
                &emsp; return Math.floor(total)<br>
                }
              </p>
            </div>
          </div><br>
          <br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  methods: {
    showSolution() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
:root {
  --color-white: rgb(255, 255, 255);
  --color-orange: #2a4555;
  --color-dark-orange: #2a4555;
  --color-red: #d00;
  --color-light-red: #e44;
  --color-green: #090;
  --color-blue: #009;
  --color-light-blue: #07f;
  --color-lighter-blue: #6bf;
  --color-brown: #6b4e3d;
  --color-light-brown: #b69481;
  --color-black: rgb(255, 255, 255);
  --color-dark-grey: #333;
  --color-light-grey: rgb(161, 161, 161);
  --color-pale-pink: #ffc7c7;
  --color-dark-green: #060;
}

#toyPage {
  color: #ffffff;
  padding-top: 5%;
}

a:hover {
  color: var(--color-text-link-hover);
  text-decoration: underline;
}

.problem_content {
  background-color: var(--color-background-default);
  font-size: 110%;
  border: solid 1px var(--color-border-default);
  box-shadow: 5px 5px 5px var(--color-border-default);
  padding: 10px;
}

#content {
  padding: 10px;
  background-color: #333333;
}

#problems_table_page #problems_table {
  margin-top: 30px;
}

.hidden {
  display: none;
}
</style>