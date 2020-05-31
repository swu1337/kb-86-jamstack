<template>
 <section>
    <Header />
    <section class="section__wrapper">
      <article class="article" v-if="post">
        <figure class="article__feature-figure" v-if="post.featuredImage">
            <!-- <img class="article__feature-media" :src="post.featuredImage.url" :alt="post.featuredImage.alt" /> -->
            <datocms-image class="article__feature-media" :data="post.featuredImage.responsiveImage" />
        </figure>
        <section class="article__content entry-content">
          <h1 class="article__title">{{ post.title }}</h1>
          <div class="article__author">
            <div class="article__byline">
              <span class="article__byline-icon"><Icons class-name="article__byline-svg" type="user" /></span>
              <span class="article__byline-text">By<nuxt-link :to="`/blogs/author/${post.author.id}`" class="post-preview__byline-link article__byline-link">{{ post.author.name }}</nuxt-link></span>
            </div>
            <div class="article__byline">
              <span class="article__byline-icon"><Icons class-name="article__byline-svg" type="calender" /></span>
              <span class="article__byline-text"><time :datetime="post.publicationDate">{{ formatDate(post.publicationDate) }}</time></span>
            </div>
          </div>
          <div class="article__body">
            <div class="article__body-content" v-for="model in post.content" :key="model.id">
              <div class="article__source-text" v-if="model.textSource" v-html="model.textSource"></div>
              <div class="article__source-image" v-if="model.imageSource">
                <figure class="article__source-figure" >
                  <!-- <img :src="model.imageSource.url" :alt="model.imageSource.alt" /> -->
                  <datocms-image class="article__source-image-media" :data="model.imageSource.responsiveImage" />
                </figure>
              </div>
              <div class="article__source-video" v-if="model.videoSource">
                <figure>
                  <video :src="model.videoSource.url" controls></video>
                </figure>
              </div>
              <div class="article__source-video--embed" v-if="model.videoEmbedSource">
                <figure class="article__source-figure">
                  <iframe
                    width="560" 
                    height="315" 
                    :src="getEmbededLink(model.videoEmbedSource)"
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                  </iframe>
                </figure>
              </div>
            </div>
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
import { Image } from 'vue-datocms';

import gql from 'graphql-tag';

export default {
  apollo: {
    post: {
      query: gql`query getSinglePost($slug: String) {
        post(filter: {slug: {eq: $slug}}) {
          content {
            ... on WysiwygEditorRecord {
              id
              textSource
              _modelApiKey
            }
            ... on ImageRecord {
              id
              imageSource {
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
              _modelApiKey
            }
            ... on VideoRecord {
              id
              videoSource {
                url
              }
              _modelApiKey
            }
            ... on VideoEmbedRecord {
              id
              videoEmbedSource {
                url
                provider
                providerUid
              }
              _modelApiKey
            }
          }
          publicationDate: _firstPublishedAt
          summary
          slug
          title
          featuredImage {
            responsiveImage(imgixParams: { fit: crop, w: 1011, h: 350, auto: format }) {
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
          author {
            id
            name
          }
        }
      }`,
      prefetch: ({ route }) => ({ slug: route.params.slug }),
      variables() {
        return {
          slug: this.$route.params.slug
        }
      },
      fetchPolicy: 'no-cache'
    }
  },
  components: {
    Header,
    Footer,
    Icons,
    'datocms-image': Image
  },
  methods: {
    formatDate(date) {
      return format(parseISO(date), 'PPP');
    },
    getEmbededLink(source) {
      if(source.provider === 'vimeo') {
        return `https://player.vimeo.com/video/${source.providerUid}`
      }

      if(source.provider === 'youtube') {
        return `https://www.youtube.com/embed/${source.providerUid}`
      }
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
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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

    h1, h2, h3, h4, h5, h6 {
      padding-bottom: 2rem;
    }

    p {
      padding-bottom: 2rem;
    }

    ol, ul {
      margin-bottom: 2rem;
      li {
        padding-bottom: .2rem;
      }

      ol, ul {
        padding-bottom: 0;

        li {
          padding-bottom: 0;
        }
      }
    }

    blockquote {
      border-left: 2px solid $c-secondary;
      padding: .6rem 0rem .6rem 1.3rem;
      margin-bottom: 2rem;

      p {
        padding: 0;
        font-size: 2rem;
      }
    }

    table {
      margin-bottom: 2rem;
    }

    video {
      max-width: 75%;
      height: auto;
      margin-bottom: 2rem;
    }
  }

  &__source {

    &-figure {
      margin-bottom: 2rem;
    }

    &-image {
      &-media {
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
    margin-right: 2rem;

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

    &-link {
      font-size: .9rem;
      padding-left: .3rem;
    }
  }
}
</style>
