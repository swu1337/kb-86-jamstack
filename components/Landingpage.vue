<template>
  <div>
    <div v-if="landingPage">
      <div v-for="content in landingPage.content" :key="content.id">
        <IntroHero :section="content.introHero" v-if="content.introHero" />
        <IntroTitleSubTitleText :section="content.introWithSubtitleTitleAndText" v-if="content.introWithSubtitleTitleAndText" />
        <TextImage :section="content.textAndImage" v-if="content.textAndImage" />
        <TeasePost :section="content.teasePost" v-if="content.teasePost" />
        <TextSmallTextBlock :section="content.textAndSmallTextBlock" v-if="content.textAndSmallTextBlock" />
      </div>
    </div>
  <pre v-if="landingPage">{{ landingPage.content }}</pre>
</div>
</template>
<script>
import IntroHero from '~/components/content/IntroHero.vue';
import IntroTitleSubTitleText from '~/components/content/IntroTitleSubTitleText.vue';
import TextImage from '~/components/content/TextImage.vue';
import TeasePost from '~/components/content/TeasePost.vue';
import TextSmallTextBlock from '~/components/content/TextSmallTextBlock.vue';

import gql from 'graphql-tag';

export default {
  components: {
    IntroHero,
    IntroTitleSubTitleText,
    TextImage,
    TeasePost,
    TextSmallTextBlock
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
                  url(imgixParams: {h: "356", w: "585", fit:crop})
                }
                text
                verticalAlignment {
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

