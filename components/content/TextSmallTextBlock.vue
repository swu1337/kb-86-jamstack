<template>
  <section class="section__wrapper">
    <div class="text-and-blocks">
      <div class="text-and-blocks__description description" v-html="section.text"></div>
      <div class="text-and-blocks__blocks">
        <div class="text-and-blocks__block" v-for="block in section.blocks" :key="block.id">
          <div class="text-and-blocks__block-content">
            <p class="text-and-blocks__block-subtitle">{{ block.blockSubtitle }}</p>
            <h4 class="text-and-blocks__block-title">{{ block.blockTitle }}</h4>
          </div>
        </div>
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
.text-and-blocks {
  margin-top: 8rem;
  display: flex;
  justify-content: space-between;

  &__description {
    flex: 1 0 45%;
    max-width: 45%;
  }

  &__blocks {
    display: flex;
    flex: 1 0 45%;
    max-width: 45%;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  &__block {
    flex: 1 0 47%;
    max-width: 47%;
    margin-bottom: 2rem;
    border-radius: 6px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, .16);

    &-content {
      padding: 1.5rem;
    }

    &-subtitle {
      text-transform: uppercase;
      font-family: $f-heading;
      font-size: .8rem;
    }

    &-title {
      font-family: $f-body;
      font-size: 1.8rem;
      padding-top: .3rem;
      font-weight: 700;
    }
  }
}
</style>