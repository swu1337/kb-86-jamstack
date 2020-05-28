<template>
  <section class="intro_hero__section section__wrapper">
    <div class="vertical-bar">
      <div class="vertical-bar__line"></div>
      <p class="vertical-bar__text">{{ section.courseCode }}</p>
    </div>
    <div class="intro_hero__description">
      <div v-html="section.description"></div>
      <a :href="section.jumperToId" class="button--intro"><Icons class-name="button__svg" type="arrow-down" /></a>
    </div>
    <div class="image_hero__image">
      <figure class="image_hero__figure">
        <img :src="section.imageHero.url" :alt="section.imageHero.alt" class="image_hero__media" />
      </figure>
    </div>
  </section>
</template>
<script>
import Icons from '~/components/Icons.vue';

export default {
  components: {
    Icons,
  },
  props: {
    section: Object
  }
}
</script>
<style lang="scss">
.intro_hero__section {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 4rem; 
  margin-bottom: 4rem;
}

.intro_hero__description {
  padding-left: 6rem;
  max-width: 40%;
  flex: 1 0 40%;
}

.intro_hero__description h1 {
  margin-top: 0;
  font-size: 4rem;
}

.intro_hero__description p {
  font-size: 1.375rem;
  line-height: 2rem;
}

.intro_hero__image {
  max-width: 50%;
  flex: 1 0 50%;
}

.vertical-bar {
  display: flex;
  width: 300px;
  align-items: center;
  position: absolute;
  transform: rotate(-90deg) translate(-100%, 0px);
  top: 0%;
  left: 0;
  transform-origin: 0% 50%;

  &__line {
    height: 2px;
    background-color: $c-secondary;
    flex: 1;
    margin-right: 1rem;
  }

  &__text {
    text-transform: uppercase;
    font-size: 1.5rem;
    white-space: nowrap;
    font-weight: bold;
  }
}
</style>