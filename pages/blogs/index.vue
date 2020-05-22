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
    allPosts: gql`query getAllPosts {
      allPosts {
      id
      slug
      title
      author {
        name
      }
      summary
    }
    }`,
    blogOverview: gql`query getSectionBlogOverView {
      blogOverview {
        description
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