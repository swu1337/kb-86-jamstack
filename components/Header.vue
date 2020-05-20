<template>
  <header class="section__wrapper">
    <section class="header__section">
      <a class="hdr-logo-link" href="/" rel="home">
        <Logo />
      </a>
      <nav id="nav-main" class="nav--main" role="navigation">
        <ul class="nav__list--main">
          <li class="nav__list-item">
            <a class="nav__link"  href="">Home</a>
          </li>
          <li class="nav__list-item">
            <a class="nav__link"  href="">Blogs</a>
          </li>
          <li>
            <a class="nav__link nav__button">Login</a>
          </li>
        </ul>
      </nav><!-- #nav -->
    </section>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
}
</script>
<style lang="scss" scoped>
.nav {
  &__list {

    &-item {
      margin-right: 2rem;
    }

    &--main {
      list-style-type: none;
      display: flex;
      align-items: center;
    }
  }

  &__link {
    font-size: 1.4rem;
    text-decoration: none; 
    color: $c-primary;
    display: block;

    &:hover {
      color: $c-secondary;
    }
  }

  &__button {
    padding: .7rem 2rem;
    font-size: 1.2rem;
    border-radius: .3rem;
    background-color: $c-primary;
    color: white;

    &:hover {
      color: white;
      background-color: $c-secondary;
      cursor: pointer;
    }
  }
}

.header__section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120px;
}
</style>