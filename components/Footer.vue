<template>
  <footer class="footer" id="footer">
  <AuthorList :posts="allPosts" :authors="allAuthors" />
  <section class="footer__wrapper section__wrapper">
    <span class="footer__text">Ontwikkeld door Steven Wu met &hearts;</span>
    <span class="footer__text">Gemaakt met
      <a class="footer__link" href="https://nuxtjs.org/" target="_blank" rel="noreferrer">Nuxt.js</a>,
      <a class="footer__link" href="https://www.datocms.com/" target="_blank" rel="noreferrer">DatoCMS</a> &amp;
      <a class="footer__link" href="https://github.com/nuxt-community/apollo-module" target="_blank" rel="noreferrer">Apollo</a>
    </span>
  </section>
</footer>
</template>
<script>
  import PostPreview from '~/components/PostPreview.vue';
  import AuthorList from '~/components/AuthorList.vue';

  import gql from 'graphql-tag';

  export default {
    components: {
      AuthorList
    },
    apollo: {
      allPosts: gql`query MyQuery {
        allPosts {
          author {
            id
          }
        }
      }`,
      allAuthors: gql`query getAllAuthors {
        allAuthors {
          id
          name
        }
      }`
    }
  }
</script>
<style lang="scss" scoped>
.footer {  
  width: 100%;
  background-color: $c-primary;
  margin-top: 5rem;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  &__text {
    display: inline-block;
    padding: 1.5rem 0;
    color: white;
  }

  &__link {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.logo {
  &--personal {
    path {
      fill: white;
    }
  }
}
</style>