<template>
  <section>
    <Header />
    <section id="content" role="main" class="content-wrapper">
      <Landingpage />
    </section>
    <Footer />
  </section>
</template>

<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Landingpage from '~/components/Landingpage.vue';

export default {
  components: {
    Header,
    Footer,
    Landingpage
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  font-family: 'Karla', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: $f-heading;
}

p {
  font-family: $f-body;
}

a {
  color: $c-secondary;
}

h1 {
  color: yellow;
}
</style>