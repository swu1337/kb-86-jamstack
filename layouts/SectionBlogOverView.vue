<template>
  <client-only>
  	<section class="section__wrapper">
      <div class="blog-overview__description" v-if="blogOverview" v-html="blogOverview.description">
      </div>
      <div class="tease-posts__collections">
        <PostPreview :button-text="blogOverview" :post="post" v-for="post in allPosts" :key="post.id" />
      </div>
      <div class="blog-overview__authors">

      </div>
    </section>
  </client-only>
</template>
<script>
  import PostPreview from '~/components/PostPreview.vue';
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
            id
          }
          summary
          featuredImage {
            url
            alt
          }
        }
      }`,
      blogOverview: gql`query getSectionBlogOverView {
        blogOverview {
          description
          buttonText
        }
      }`,
      allAuthors: gql`query getAllAuthors {
        allAuthors {
          id
          name
        }
      }`
    },
    components: {
      PostPreview
    }
  }
</script>
<style lang="scss">
  .blog-overview {
    &__description {
      font-size: 1.1rem;
      padding: 2rem 0;
      line-height: 1.8rem;

      h1 {
        font-size: 3.5rem;
      }

      p {
        font-size: 1.1rem;
        padding: 2rem 0;
        line-height: 1.8rem;
      }
    }
  }

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