<template>
  <section class="intro_hero__section section__wrapper">
    <div class="vertical-bar">
      <div class="vertical-bar__line"></div>
      <p class="vertical-bar__text">{{ section.courseCode }}</p>
    </div>
    <div class="intro_hero__description">
      <div v-html="section.description"></div>
      <a :href="section.jumperToId" class="button--intro"><span class="screen-reader__text">Lees verder</span><Icons class-name="button__svg" type="arrow-down" /></a>
    </div>
    <div class="intro_hero__image">
      <figure class="intro_hero__figure">
        <datocms-image class="intro_hero__media" :data="section.imageHero.responsiveImage" />
      </figure>
    </div>
  </section>
</template>
<script>
import Icons from '~/components/Icons.vue';
import { Image } from 'vue-datocms';

export default {
  components: {
    Icons,
    'datocms-image': Image
  },
  props: {
    section: Object
  }
}
</script>
<style lang="scss">
.section__wrapper.intro_hero__section {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 4rem; 
  margin-bottom: 4rem;
}

.intro_hero {
  &__description {
    padding-left: 6rem;
    max-width: 45%;
    flex: 1 0 45%;

    h1 {
      margin-top: 0;
      font-size: 4rem;
    }

    p {
      font-size: 1.375rem;
      line-height: 2rem;
    }
  }

  &__link {
    &-text {
      border: 0;
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      word-wrap: normal !important;
    }
  }

  &__image {
    max-width: 45%;
    flex: 1 0 45%;
  }

  &__figure {
    width: 100%;
  }

  &__media {
    width: 100%;
    height: auto;
  }
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