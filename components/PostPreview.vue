<template>
  <article class="post-preview">
    <nuxt-link :to="`/blogs/${post.slug}`" class="post-preview__link post-preview__link--wrapper">
      <figure class="post-preview__figure" v-if="post.featuredImage">
        <img :src="post.featuredImage.url" :alt="post.featuredImage.alt" class="post-preview__media" />
      </figure>
      <figure class="post-preview__figure" v-else>
        <div class="post-preview__media post-preview__media--placeholder">
          <Icons class-name="post-preview__svg" type="blog" />
        </div>
      </figure>
      <div class="post-preview__excerpt">
        <div class="post-preview__excerpt-content">
          <h3 class="post-preview__title">{{ post.title }}</h3>
          <div class="post-preview__byline">
            <span class="post-preview__byline-icon">
              <Icons class-name="post-preview__byline-svg" type="user" />
            </span>
            <span>
              By <nuxt-link :to="`/blogs/author/${post.author.slug}`" class="post-preview__byline-link">{{ post.author.name }}</nuxt-link>
            </span>
          </div>
          <p class="post-preview__text" v-html="summary"></p>
          <nuxt-link :to="`/blogs/${post.slug}`" class="post-preview__button" v-if="buttonText">
            {{ buttonText.buttonText }}
            <span class="post-preview__icon">
              <Icons class-name="post-preview__icon-svg" type="arrow-right" />
            </span>
          </nuxt-link>
        </div>
      </div>
    </nuxt-link>
  </article>
</template>
<script>
  import Icons from '~/components/Icons.vue';

  export default {
    props: {
      post: Object,
      buttonText: Object
    },
    components: {
      Icons
    },
    computed: {
      summary() {
        return `${this.post.summary.slice(0, this.post.summary.length - 4)}...${this.post.summary.slice(this.post.summary.length - 4, this.post.summary.length)}`;
      }
    }
  }
</script>
<style lang="scss">
  .post-preview {
    flex: 1 0 31%;
    max-width: 31%;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 8px 16px -8px rgba(0, 0, 0, 0.16);
    border-radius: 0 0 6px 6px;
    margin-bottom: 3rem;

    &:hover {
      cursor: pointer;

      .post-preview__media {
        width: 100%;
        height: 100%;
        box-shadow: none;
      }
    }

    &__link {
      text-decoration: none;
      color: $c-primary;

      &--wrapper {
        display: block;
      }
    }

    &__figure {
      display: flex;
      background-color: #F7F7F7;
      height: 250px;
      justify-content: center;
      align-items: flex-end;
      border-radius: 6px 6px 0 0;
      box-shadow: inset 8px 8px 16px rgba(0, 0, 0, .02);
    }

    &__media {
      width: 75%;
      height: 75%;
      object-fit: cover;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, .16);
      border-radius: 6px 6px 0 0;
      transition: all .1s ease-in-out;

      &--placeholder {
        background-color: $c-primary;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    &__svg {
      width: 21%;
      height: auto;
      fill: none;
      stroke: white;
    }

    &__excerpt-content {
      padding: 2rem;
    }

    &__title {
      font-size: 1.2rem;
      color: black;
      padding-bottom: .4rem;
    }

    &__text {
      padding: 1rem 0 2rem 0;
      line-height: 1.5rem;
    }

    &__byline {
      display: flex;
      align-items: center;
      font-size: .7rem;
      text-transform: uppercase;
      font-weight: 700;

      &-icon {
        display: block;
        margin-right: .4rem;
      }

      &-svg {
        width: 1.2rem;
      }

      &-link {
        font-size: .7rem;
        text-transform: uppercase;
        font-weight: 700;
      }
    }

    &__button {
      text-decoration: none;
      padding: 1rem 2rem;
      background-color: $c-primary;
      color: white;
      display: inline-block;
      border-radius: 6px;

      &:hover {
        background-color: $c-secondary;
        color: $c-primary;
      }

      &--view-all {
        margin-top: 3rem;
        font-size: 1.1rem;
        margin: 4rem auto 0 auto;
      }
    }

    &__icon {
      display: inline-block; 
      padding-left: .6rem;

      &-svg {
        vertical-align: middle;
      }
    }
  }
</style>