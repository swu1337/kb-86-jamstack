<template>
  <section class=" section__wrapper">
    <pre>{{ section }}</pre>
    <div class="process-line">
      <div class="process-line__processes">
        <div class="process-line__wrapper" v-for="(process, index) in section.processes" :key="process.id">
          <p class="process-line__process">{{ process.processName }}</p>
          <span class="process-line__arrow" v-if="index !== section.processes.length - 1">
            <Icons class-name="process-line__svg" type="arrow-right" />
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import Icons from '~/components/Icons.vue';

export default {
  components: {
    Icons
  },
  props: {
    section: Object
  }
}
</script>
<style lang="scss">
.process-line {
  margin-top: 3rem;

  &__processes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  &__process {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 1rem 0;
  }

  &__arrow {
    display: inline-block;
    margin: 1rem 3rem;
  }

  &__svg {
    width: 26px;
    height: auto;
    vertical-align: middle;
  }
}
</style>