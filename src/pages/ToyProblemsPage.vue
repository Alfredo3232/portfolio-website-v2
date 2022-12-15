<template>
  <router-view />

  <nav-bar />

  <div class="site-main">
    <div class="main-section portfolio-section">
      <div class="toyPage">
        <div id="content">
          <div id="problems_table_page">
            <h2>Toy Problems</h2>
            <hr>

            <p>These are Toy Problems test my skills</p>
            <div class="pagination noprint">
              <a
                href="archives.html"
                class="current"
              >1</a>
              <a
                href="archives;page=2.html"
                title="Go to page 2"
              >2</a>
              <span id="go_to">&nbsp;&nbsp;&nbsp;Go to Problem:
                <input
                  type="text"
                  maxlength="3"
                  class="jump_to"
                >
              </span>
            </div>


            <table
              id="problems_table"
              class="grid"
            >
              <tr>
                <th class="id_column">
                  <br><strong><span class="sortby">ID</span></strong><br><br>
                </th>
                <th class="title_column">
                  Description / Title
                </th>
                <th class="solved_by_column">
                  Difficulty
                </th>
              </tr>
              <tr>
                <td class="id_column">
                  1
                </td>
                <td>
                  <router-link
                    to="/toyProblems/problem-1"
                    title="Published on Friday, 5th October 2022, 06:00 pm"
                  >
                    AVERAGE OF AN ARRAY
                  </router-link>
                </td>
                <td>
                  <div class="center">
                    Beginner
                  </div>
                </td>
              </tr>
              <tr>
                <td class="id_column">
                  2
                </td>
                <td>
                  <a
                    href="problem=2.html"
                    title="Published on Friday, 19th October 2001, 06:00 pm"
                  >
                    ToyProblem2
                  </a>
                </td>
                <td>
                  <div class="center">
                    Difficulty
                  </div>
                </td>
              </tr>
              <tr>
                <td class="id_column">
                  3
                </td>
                <td>
                  <a
                    href="problem=3.html"
                    title="Published on Friday, 2nd November 2001, 06:00 pm"
                  >
                    ToyProblem3
                  </a>
                </td>
                <td>
                  <div class="center">
                    Difficulty
                  </div>
                </td>
              </tr>
              <tr>
                <td class="id_column">
                  4
                </td>
                <td>
                  <a
                    href="problem=4.html"
                    title="Published on Friday, 16th November 2001, 06:00 pm"
                  >
                    ToyProblem4
                  </a>
                </td>
                <td>
                  <div class="center">
                    Difficulty
                  </div>
                </td>
              </tr>
              <tr>
                <td class="id_column">
                  5
                </td>
                <td>
                  <a
                    href="problem=5.html"
                    title="Published on Friday, 30th November 2001, 06:00 pm"
                  >
                    ToyProblem5
                  </a>
                </td>
                <td>
                  <div class="center">
                    Difficulty
                  </div>
                </td>
              </tr>
            </table>
            <br>
            <div class="pagination noprint">
              <a
                href="archives.html"
                class="current"
              >1</a>
              <a
                href="archives;page=2.html"
                title="Go to page 2"
              >2</a>
              <span id="go_to">&nbsp;&nbsp;&nbsp;Go to Problem:
                <input
                  type="text"
                  maxlength="3"
                  class="jump_to"
                >
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr>
    </div>
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

#toyPage {
  color: #ffffff;
  padding-top: 5%;
}

a:hover {
  color: var(--color-text-link-hover);
  text-decoration: underline;
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
</style>