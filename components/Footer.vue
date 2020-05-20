<template>
  <footer class="footer" id="footer">
  <section class="footer__wrapper section__wrapper">
    <span class="footer__text">Developed by Steven Wu with &lt;3</span>
    <span class="footer__text">Built with
      <a class="footer__link" href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>,
      <a class="footer__link" href="https://www.datocms.com/" target="_blank">DatoCMS</a> &amp;
      <a class="footer__link" href="https://github.com/nuxt-community/apollo-module" target="_blank">Apollo</a>
    </span>
  </section>
</footer>
</template>
<style lang="scss" scoped>
.footer {  
  width: 100%;
  background-color: $c-primary;
  margin-top: 5rem;

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__text {
    display: inline-block;
    padding: 1.5rem 0;
    color: white;
  }

  &__link {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.logo {
  &--personal {
    path {
      fill: white;
    }
  }
}
</style>