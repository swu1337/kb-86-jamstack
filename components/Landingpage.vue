<template>
  <div>
    <div v-if="landingPage">
      <div v-for="content in landingPage.content" :key="content.id">
        <IntroHero :section="content.introHero" v-if="content.introHero" />
        <IntroTitleSubTitleText :section="content.introWithSubtitleTitleAndText" v-if="content.introWithSubtitleTitleAndText" />
        <TextImage :section="content.textAndImage" v-if="content.textAndImage" />
        <TeasePost :section="content.teasePost" v-if="content.teasePost" />
        <TextSmallTextBlock :section="content.textAndSmallTextBlock" v-if="content.textAndSmallTextBlock" />
        <ProcessLine :section="content.processLine" v-if="content.processLine" />
      </div>
    </div>
</div>
</template>
<script>
import IntroHero from '~/components/content/IntroHero.vue';
import IntroTitleSubTitleText from '~/components/content/IntroTitleSubTitleText.vue';
import TextImage from '~/components/content/TextImage.vue';
import TeasePost from '~/components/content/TeasePost.vue';
import TextSmallTextBlock from '~/components/content/TextSmallTextBlock.vue';
import ProcessLine from '~/components/content/ProcessLine.vue';

import gql from 'graphql-tag';

export default {
  components: {
    IntroHero,
    IntroTitleSubTitleText,
    TextImage,
    TeasePost,
    TextSmallTextBlock,
    ProcessLine
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
                  responsiveImage(imgixParams: { fit: crop, w: 565, h: 376, auto: format }) {
                    srcSet
                    webpSrcSet
                    sizes
                    src
                    width
                    aspectRatio
                    alt
                    title
                    base64
                  }
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
                  responsiveImage(imgixParams: { fit: crop, w: 550, h: 334, auto: format }) {
                    srcSet
                    webpSrcSet
                    sizes
                    src
                    width
                    aspectRatio
                    alt
                    title
                    base64
                  }
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
                  id
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
                  id
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

