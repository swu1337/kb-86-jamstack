<template>
 <section>
    <Header />
    <section class="section__wrapper">
      <article class="article" v-if="post">
        <figure class="article__feature-figure section__wrapper" v-if="post.featuredImage">
            <img class="article__feature-media" :src="post.featuredImage.url" :alt="post.featuredImage.alt" />
        </figure>
        <section class="article__content entry-content">
          <h1 class="article__title">{{ post.title }}</h1>
          <div class="article__author">
            <div class="article__byline">
              <span class="article__byline-icon"><Icons class-name="article__byline-svg" type="user" /></span>
              <span class="article__byline-text">By<nuxt-link :to="`/blogs/author/${post.author.id}`" class="post-preview__byline-link post-preview__byline-link--article">{{ post.author.name }}</nuxt-link></span>
            </div>
            <div class="article__byline">
              <span class="article__byline-icon"><Icons class-name="article__byline-svg" type="calender" /></span>
              <span class="article__byline-text"><time :datetime="post.publicationDate">{{ formatDate(post.publicationDate) }}</time></span>
            </div>
          </div>
          <div class="article__body" v-html="post.content">
          </div>
        </section>
      </article>
    </section>
    <Footer /> 
 </section>
</template>
<script>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
import Icons from '~/components/Icons.vue';

import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import gql from 'graphql-tag';

export default {
  apollo: {
    post: {
      query: gql`query getSinglePost($slug: String) {
        post(filter: {slug: {eq: $slug}}) {
          title
          author {
            id
            name
            slug
        }
        publicationDate: _firstPublishedAt
        content
        featuredImage {
          alt
          url
        }
        }
    }`,
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  },
  components: {
    Header,
    Footer,
    Icons
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP');
    }
  }
}
</script>
<style lang="scss">
.entry-content {
  line-height: 1.5;
}

.article {
  &__feature {
    &-figure {
        width: 100%;
    }

    &-media {
      width: 100%;
      height: 350px;
      object-fit: cover;
      object-position: center;
    }
  }

  &__author {
    display: flex;
  }

  &__content .article__title {
    margin-top: 2rem;
    font-size: 3.5rem;
    margin-bottom: 0;
  }

  &__body {
    padding-top: 2rem;
    font-size: 1.2rem;

    * {
        padding-bottom: 1.1rem;
     }

    ol, ul {
      li {
        padding-bottom: .2rem;
      }
    }

    blockquote {
      border-left: 2px solid $c-secondary;
      padding: .6rem 0rem .6rem 1.3rem;
      margin-bottom: 1.1rem;

      p {
        padding: 0;
        font-size: 1.1rem;
      }
    }

    table {
      margin-bottom: 1.1rem;
    }

    p {
      img {
        display: block;
        width: 75%;
        height: auto;
      }
    }
  }

  &__content {
    width: 75%;
    margin: 0 auto;
    max-width: 60rem;
  }

  &__byline {
    display: flex;
    margin-right: 1.5rem;

    &-svg {
      stroke: $c-primary
    }

    &-icon {
      display: block;
      margin-right: .4rem;
    }

    &-text {
      color: $c-primary;
    }

    &-link--article {
      font-size: .9rem;
      padding-left: .3rem;
    }
  }
}
</style>
