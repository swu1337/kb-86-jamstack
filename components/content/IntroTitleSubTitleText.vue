<template>
  <section class="section__wrapper">
    <div :id="section.introductionWithSubtitleTitleAndTextId" class="intro_text">
      <p class="intro_text__sub">{{ section.subtitle }}</p>
      <div class="intro_text__description" v-html="section.description">
      </div>
    </div>
  </section>
</template>
<script>

export default {
  props: {
    section: Object
  }    
}
</script>
<style lang="scss">
.intro_text {
  padding-top: 12rem;

  &__sub {
    font-family: $f-heading;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  &__description {
    h2 {
      font-size: 3.5rem;
      max-width: 42rem;
      margin: 0 auto;
      padding-top: 2rem;
    }

    p {
      font-size: 1.1rem;
      padding: 2rem 0;
      line-height: 1.8rem;
    }
  }
}
</style>