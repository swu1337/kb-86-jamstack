<template>
  	<section class="section__wrapper">
      <div class="blog-overview__description"v-html="blogOverview.description">
      </div>
      <div class="tease-posts__collections">
        <PostPreview :post="post" v-for="post in allPosts" :key="post.id" />
      </div>
    </section>
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
    PostPreview
  }
}
</script>
<style lang="scss" scoped>
.blog-overview__description {
  font-size: 1.1rem;
  padding: 2rem 0;
  line-height: 1.8rem;
}

.blog-overview__description h1 {
  font-size: 3.5rem;
}

.blog-overview__description p {
  font-size: 1.1rem;
  padding: 2rem 0;
  line-height: 1.8rem;
}

.tease-posts {
  margin-top: 8rem;
}

.tease-posts__collections {
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>