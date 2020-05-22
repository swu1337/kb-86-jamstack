<template>
  <article class="post-preview">
    <figure class="post-preview__figure">
        <!-- <img src="{{ post.thumbnail.src }}" alt="" class="post-preview__media" /> -->
        <div class="post-preview__media post-preview__media--placeholder">
          <Icons class-name="post-preview__svg" type="blog" />
        </div>
    </figure>
    <div class="post-preview__excerpt">
      <div class="post-preview__excerpt-content">
        <h3 class="post-preview__title">Title here</h3>
        <div class="post-preview__byline">
          <span class="post-preview__byline-icon">
            <Icons class-name="post-preview__byline-svg" type="user" />
          </span>
          <span>By <a href="" class="post-preview__byline-link">Test</a></span>
        </div>
        <p class="post-preview__text">Some summary here</p>
        <a href="{" class="post-preview__button">Lees verder<span class="post-preview__icon">
          <Icons class-name="post-preview__icon-svg" type="arrow-right" />
          </span>
        </a>
      </div>
    </div>
  </article>
</template>
<script>
import Icons from '~/components/Icons.vue';

export default {
  props: {
    post: Object
  },
  components: {
    Icons
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
}

.post-preview:hover {
  cursor: pointer;
}

.post-preview__link{
  text-decoration: none;
  color: var(--c-primary);
}

.post-preview:hover .post-preview__media {
  width: 100%;
  height: 100%;
  box-shadow: none;
}

.post-preview__figure {
  display: flex;
  background-color: #F7F7F7;
  height: 250px;
  justify-content: center;
  align-items: flex-end;
  border-radius: 6px 6px 0 0;
  box-shadow: inset 8px 8px 16px rgba(0, 0, 0, .02);
}

.post-preview__media {
  width: 75%;
  height: 75%;
  object-fit: cover;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, .16);
  border-radius: 6px 6px 0 0;
  transition: all .1s ease-in-out;
}

.post-preview__media--placeholder {
  background-color: var(--c-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

.post-preview__svg {
  width: 30%;
  height: auto;
  fill: white;
}

.post-preview__excerpt-content {
  padding: 2rem;
}

.post-preview__title {
  font-size: 1.2rem;
  color: black;
  padding-bottom: .4rem;
}

.post-preview__text {
  padding: 1rem 0 2rem 0;
  line-height: 1.5rem;
}

.post-preview__byline {
  display: flex;
  align-items: center;
}

.post-preview__byline-icon {
  display: block;
  margin-right: .4rem;
}

.post-preview__byline-svg {
  width: 1.2rem;
}

.post-preview__byline, .post-preview__byline-link {
  font-size: .7rem;
  text-transform: uppercase;
  font-weight: 700;
}

.post-preview__button {
  text-decoration: none;
  padding: 1rem 2rem;
  background-color: var(--c-primary);
  color: white;
  display: inline-block;
  border-radius: 6px;
}

.post-preview__button:hover {
  background-color: var(--c-secondary);
  color: var(--c-primary);
}

.post-preview__button--view-all {
  margin-top: 3rem;
  font-size: 1.1rem;
  margin: 4rem auto 0 auto;
}

.post-preview__icon {
  display: inline-block; 
  padding-left: .6rem;
}

.post-preview__icon-svg {
  vertical-align: middle;
}
</style>