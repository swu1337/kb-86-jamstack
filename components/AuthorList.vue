<template>
  <div class="author-list__section">
    <div class="section__wrapper">
      <h3 class="author-list__heading">Our students</h3>
      <ul class="author-list__list">
        <li class="author-list__item" v-for="author in authors" :key="author.id">
          <nuxt-link class="author-list__link" :to="`/blogs/author/${author.id}`">{{ author.name }}</nuxt-link>
          <span class="author-list__amount">({{ amountPosts(author) }})</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    authors: Array,
    posts: Array
  },
  methods: {
    amountPosts(a) {
      let filtered = this.posts.filter((post) => post.author.id == a.id);
      return filtered.length;
    },
  }
}
</script>
<style lang="scss">
  .author-list {
    &__section {
      padding-top: 4rem;
    }

    &__heading {
      color: white;
      font-size: 1.5rem;
      padding-bottom: 1rem;
    }

    &__list {
      list-style-type: none;
      display: flex;
      flex-wrap: wrap;
      padding: 0;
    }

    &__item {
      flex: 1 0 23%;
      max-width: 23%;
      font-size: 1.2rem;
    }

    &__link {
      display: inline-block;
      text-decoration: none;
      padding-bottom: .8rem;

      &:hover {
        text-decoration: underline;
      }
    }

    &__amount {
      color: white;
    }
  }
</style>