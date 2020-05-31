<template>
  <client-only>
    <section>
      <Header />
      <section class="author__section section__wrapper" v-if="author">
        <p class="author__subtitle">Auteur:</p>
        <h1 class="author__title">{{ author.name }}</h1>
        <div class="author__description">
          <figure class="author__figure" v-if="author.photo">
            <!-- <img class="author__media" v-if="author" :src="author.photo.url" :alt="author.photo.alt" /> -->
            <datocms-image class="author__media" :data="author.photo.responsiveImage" />
          </figure>
          <div class="author__figure" v-else>
            <Icons class-name="author__svg" type="user" />
          </div>
          <div class="author__about">
            <h2 class="author__description-title">Over mij</h2>
            <p class="author__description-text">{{ author.description }}</p>
          </div>
        </div>
        <h3 class="author__title--blogposts">Gerelateerde blogs</h3>
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
import { Image } from 'vue-datocms';

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
            responsiveImage(imgixParams: { fit: crop, w: 569, h: 427, auto: format }) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              aspectRatio
              alt
              title
              base64
            }
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
            responsiveImage(imgixParams: { fit: crop, w: 128, h: 128, auto: format }) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              aspectRatio
              alt
              title
              base64
            }
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
    Icons,
    'datocms-image': Image
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