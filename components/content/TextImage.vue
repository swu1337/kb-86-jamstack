<template>
  <section class="section__wrapper">
    <div class="text-and-image" :class="[{'text-and-image--reverse': section.flipHorizontally}, section.verticalAlignment.properties]">
      <div class="text-and-image__description description" v-html="section.text">
      </div>
      <figure class="text-and-image__figure">
        <datocms-image class="text-and-image__media" :data="section.image.responsiveImage" />
      </figure>
    </div>
  </section>
</template>
<script>
import { Image } from 'vue-datocms';

export default {
  components: {
    'datocms-image': Image
  },
  props: {
    section: Object
  }
}
</script>
<style lang="scss">
.text-and-image {
  padding-top: 8rem;
  display: flex;
  justify-content: space-between;

  &__figure {
    flex: 1 0 45%;
    max-width: 45%;
  }

  &__media {
    width: 100%;
    height: auto;
  }

  &__description {
    flex: 1 0 45%;
    max-width: 45%;
  }

  &--reverse {
    flex-direction: row-reverse;
  }

  &--flex-start {
    align-items: flex-start;
  }

  &--center {
    align-items: center;
  }

  &--flex-end {
    align-items: flex-end;
  }
}
</style>
