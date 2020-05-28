<template>
  <div>
    <div v-if="landingPage">
      <div v-for="content in landingPage.content" :key="content.id">
        <IntroHero :section="content.introHero" v-if="content.introHero" />
        <IntroTitleSubTitleText :section="content.introWithSubtitleTitleAndText" v-if="content.introWithSubtitleTitleAndText" />
      </div>
    </div>
  <pre v-if="landingPage">{{ landingPage.content }}</pre>
</div>
</template>
<script>
import IntroHero from '~/components/content/IntroHero.vue';
import IntroTitleSubTitleText from '~/components/content/IntroTitleSubTitleText.vue';

import gql from 'graphql-tag';

export default {
  components: {
    IntroHero,
    IntroTitleSubTitleText
  },
  apollo: {
    landingPage: {
      query: gql`query MyQuery {
        landingPage {
          content {
            ... on IntroHeroContentRecord {
              id
              introHero {
                description
                imageHero {
                  url(imgixParams: {h: "376", w: "570"})
                  alt
                }
                jumperToId
                courseCode
              }
            }
            ... on IntroWithSubtitleTitleAndTextContentRecord {
              id
              introWithSubtitleTitleAndText {
                description
                subtitle
                introductionWithSubtitleTitleAndTextId
              }
            }
            ... on TextImageContentRecord {
              id
              textAndImage {
                image {
                  alt
                  url
                }
                text
                verticalAlignment {
                  aligment
                  properties
                }
                flipHorizontally
              }
            }
            ... on TextAndSmallTextBlockContentRecord {
              id
              textAndSmallTextBlock {
                blocks {
                  blockTitle
                  blockSubtitle
                }
                text
              }
            }
            ... on TeasePostsContentRecord {
              id
              teasePost {
                singlePostButtonText
                text
                viewAllButtonText
              }
            }
            ... on ProcessLineContentRecord {
              id
              processLine {
                processes {
                  processName
                }
              }
            }
          }
        }
      }`,
      fetchPolicy: 'no-cache'
    }
  }
}
</script>

