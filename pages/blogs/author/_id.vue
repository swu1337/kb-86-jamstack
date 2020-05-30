<template>
  <client-only>
    <section>
      <Header />
      <section class="author__section section__wrapper" v-if="author">
        <p class="author__subtitle">Author:</p>
        <h1 class="author__title">{{ author.name }}</h1>
        <div class="author__description">
          <figure class="author__figure" v-if="author.photo">
            <img class="author__media" v-if="author" :src="author.photo.url" :alt="author.photo.alt" />
          </figure>
          <div class="author__figure" v-else>
            <Icons class-name="author__svg" type="user" />
          </div>
          <div class="author__about">
            <h2 class="author__description-title">About me</h2>
            <p class="author__description-text">{{ author.description }}</p>
          </div>
        </div>
        <h3 class="author__title--blogposts">Related blogposts</h3>
        <div class="tease-posts__collections">
          <PostPreview :button-text="button" :post="post" v-for="post in allPosts" :key="post.id" />
        </div>
      </section>
      <Footer />
    </section>
  </client-only>
</template>
<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import PostPreview from '~/components/PostPreview.vue';
import Icons from '~/components/Icons.vue';

import gql from 'graphql-tag';

export default {
  data() {
    return {
      button: {
        buttonText: 'Lees verder'
      }
    }
  },
  apollo: {
    allPosts: {
      query: gql`query getAllPosts($authorId: ItemId) {
        allPosts(filter: {author: {eq: $authorId}}) {
          id
          slug
          title
          author {
            id
            name
            slug
            description
            photo {
              url
              alt
            }
          }
          summary
          featuredImage {
            url
            alt
          }
        }
      }`,
      variables() {
        return {
          authorId: this.$route.params.id
        }
      }
    },
    author: {
      query:gql`query getAuthorById($id: ItemId!) {
        author(filter: {id: {eq: $id}}) {
          id
          name
          slug
          description
          photo {
            url
            alt
          }
        }
      }`,
      variables() {
        return {
          id: this.$route.params.id
        }
      }
    }
  },
  components: {
    Header,
    Footer,
    PostPreview,
    Icons
  }
  
}
</script>
<style lang="scss">
  .author {
    &__section {
      padding-bottom: 5rem;
    }

    &__subtitle {
      padding-top: 3rem;
      font-size: 1.3rem;
      font-weight: bold;
    }

    &__title {
      font-size: 2rem;
      margin-top: 0;
      margin-bottom: 3rem;

      &--blogposts {
        padding-top: 3rem;
        font-size: 2rem;
      }
    }

    &__description {
      display: flex;
      align-items: center;
      padding-bottom: 3rem;
      border-bottom: 1px solid $c-primary;

      &-title {
        margin-bottom: .5rem;
        font-size: 1.6rem;
      }

      &-text {
        font-size: 1.2rem;
        line-height: 1.5rem;
      }
    }

    &__figure {
      flex: 1 0 8rem;
      max-width: 8rem;
      height: 8rem;
      border-radius: 50%;
      background-color: $c-primary;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 3rem;
      overflow: hidden;
    }

    &__media {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }

    &__svg {
      width: 40%;
      height: auto;
      stroke: $c-secondary;
    }
  }
</style>