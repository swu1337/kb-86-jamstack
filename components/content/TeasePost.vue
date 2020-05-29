<template>
  <section class="section__wrapper">
      <div class="tease-posts">
        <div class="tease-posts__description description" v-html="section.text">
        </div>
        <div class="tease-posts__collections">
          <PostPreview :button-text="buttonText" :post="post" v-for="post in allPosts" :key="post.id" />
          <nuxt-link to="/blogs" class="post-preview__button post-preview__button--view-all">{{ section.viewAllButtonText }}</nuxt-link>
        </div>
      </div>
  </section>
</template>
<script>

import PostPreview from '~/components/PostPreview.vue';
import gql from 'graphql-tag';

export default {
  apollo: {
    allPosts: gql`query getAllPosts {
      allPosts(first: "3") {
        id
        slug
        title
        author {
          name
          id
        }
        summary
        featuredImage {
          url
          alt
        }
      }
    }`
  },
  components: {
    PostPreview
  },
  props: {
    section: Object
  },
  computed: {
    buttonText() {
      return {
        buttonText: this.section.singlePostButtonText
      }
    }
  }
}
</script>
<style lang="scss">
.tease-posts {
  margin-top: 8rem;

  &__collections {
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>