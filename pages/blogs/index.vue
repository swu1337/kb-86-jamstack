<template>
  <section>
    <Header />
    <SectionBlogOverview />
    <Footer />
  </section>
</template>
<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Icons from '~/components/Icons.vue';
import SectionBlogOverview from '~/layouts/SectionBlogOverView.vue';

import gql from 'graphql-tag';

export default {
  apollo: {
    blogOverview: gql`query getSectionBlogOverView {
      blogOverview {
        description
        buttonText
      }
    }`
  },
  components: {
    Header,
    Footer,
    Icons,
    SectionBlogOverview
  }
}
</script>
<style lang="scss">
</style>