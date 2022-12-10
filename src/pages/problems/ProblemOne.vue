<template>
  <nav-bar />
      
  <div class="site-main">
    <div
      id="navigation"
      class="nav noprint"
    >
      <a
        id="current"
        href="archives.html"
        title="Toy Problems"
        accesskey="1"
      >Toy Problems</a>
      <div class="bar" />
      <div class="bar" />
      <div class="bar" />
    </div>


    <div id="content">
      <h2>Average of an Array</h2>
      <h3>Problem 1</h3>
    </div>
    <hr>
    <div
      class="problem_content"
      role="problem"
    >
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
      <button
        id="button"
        onclick="showhide()"
        style="background-color: #2a4555;"
      >
        Solution
      </button>
      <div
        id="newpost"
        class="hidden"
      >
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
</template>

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

body {
    color: #ffffff;
    padding-top: 5%;
}

a:hover {
    color: var(--color-text-link-hover);
    text-decoration: underline;
}

a.no_hover {
    color: var(--color-text-link);
    text-decoration: none;
}

.center {
    text-align: center !important;
}

.grid {
    border-collapse: collapse;
}

.grid tr {
    background-color: var(--color-background-default);
}

.grid .shade {
    background-color: var(--color-pale-pink);
}

.grid th {
    color: var(--color-text-variation-1);
    text-align: center;
    font-weight: bold;
}

.grid td,
.grid th {
    background-color: inherit;
    padding: 2px;
    border: 1px solid var(--color-border-default);
}

.no_border {
    border-collapse: collapse;
}

td.no_border,
th.no_border,
.no_border td,
.no_border th {
    padding: 1px;
    border: none;
}

.no_border tr {
    background-color: inherit;
}

.problem_content {
    background-color: var(--color-background-default);
    font-size: 110%;
    border: solid 1px var(--color-border-default);
    box-shadow: 5px 5px 5px var(--color-border-default);
    padding: 10px;
}

.jump_to {
    width: 30px !important;
}

.pagination {
    font-size: 80%;
    height: 1%;
    text-align: center;
    margin: 20px 0;
}

.pagination a,
.pagination a:link,
.pagination a:visited,
.pagination a:active {
    display: block;
    float: left;
    font-weight: bold;
    text-decoration: none;
    color: var(--color-text-variation-1);
    margin: 2px 5px 2px 0;
    padding: 3px;
    background-color: var(--color-background-variation-1);
    width: 2em;
    border: 1px solid var(--color-border-default);
}

.pagination a.current {
    background-color: var(--color-orange);
    color: var(--color-background-default);
    font-weight: bold;
    border-radius: 5px;
}

.pagination span {
    float: left;
    font-weight: bold;
}

.pagination input[type="text"] {
    width: 20px;
    color: black;
}

.pagination:after {
    content: "";
    display: table;
    clear: both;
}

#content {
    padding: 10px;
    background-color: #333333;
}

.nav {
    overflow: hidden;
    background-color: var(--color-background-variation-1);
    border-top: 1px solid var(--color-border-default);
    border-bottom: 1px solid var(--color-border-default);
}

.nav a {
    float: left;
    display: block;
    color: var(--color-text-variation-1);
    font-weight: bold;
    text-align: center;
    padding: 10px 12px;
    text-decoration: none;
    border-radius: 5px;
}

.nav #current {
    background-color: var(--color-orange);
    color: var(--color-background-default);
}

#problems_table_page #problems_table {
    margin-top: 30px;
}

#problems_table_page #problems_table th.id_column {
    width: 50px;
}

#problems_table_page #problems_table td.id_column {
    height: 30px;
    text-align: center;
    font-weight: bold;
}

#problems_table_page #problems_table th.title_column {
    width: 250px;
    max-width: 250px;
    word-wrap: break-word;
}

#problems_table_page #problems_table th.solved_by_column {
    width: 80px;
}

#problems_table_page #problems_table th.difficulty_column {
    width: 80px;
}

.hidden {
    display: none;
}
</style>