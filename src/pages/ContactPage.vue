<template>
  <nav-bar />

  <div class="site-main">
    <div class="site-main-inner">
      <div class="main-section">
        <h1 class="main-title">
          Contact me
        </h1>

        <p>I am open to hire, want another person to help you out on your project? Contact me. Info below</p>

        <div class="vcard">
          <dl class="dl dl-vertical">
            <dt>E-mail:</dt>
            <dd>
              <i class="icon fa fa-envelope red" />
              <span class="__cf_email__ red">Alfredo3232@pm.me</span>
            </dd>

            <dt>&nbsp;</dt>
            <dd />

            <dt>LinkedIn:</dt>
            <dd>
              <a href="https://www.linkedin.com/in/alfredor1/"><i class="icon fa fa-linkedin" /> Alfredo</a>
            </dd>

            <dt>Github:</dt>
            <dd>
              <a href="https://github.com/Alfredo3232"><i class="icon fa fa-github" />Alfredo3232</a>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dl-vertical dd,
.dl-vertical dt,
.main-navigation .navigation-extend-bar .social-icons,
.pull-left {
    float: left
}

.dl-vertical {
    overflow: hidden
}

.dl-vertical dt {
    display: block;
    clear: both;
    width: 150px
}

.dl-vertical dd {
    display: block;
    margin: 0
}

.dl-vertical.dl-long dt {
    width: 350px
}
</style>