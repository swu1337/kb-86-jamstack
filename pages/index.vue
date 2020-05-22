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
</style>