
import axios from 'axios';
const API_URL = 'https://graphql.datocms.com/';

const dynamicRoutes = async () => {
  const resForPosts = await axios.post(
    API_URL,
    { 
      headers: {
        'Authorization': `Bearer 3c4da4f5da27569548c2b450bdd05c`
      },
      data: {
        query: `
          query getPostsSlug {
            allPosts {
              slug
            }
          }
        `
      }
    }
  );

  const resForAuthors = await axios.post(
    API_URL,
    { 
      headers: {
        'Authorization': `Bearer 3c4da4f5da27569548c2b450bdd05c`
      },
      data: {
        query: `
          query getAuthorsSlug {
            allAuthors {
              id
            }
          }
        `
      }
    }
  );

  const routesForPosts = resForPosts.data.allPosts.map(post =>{
    return {
      route: `/blogs/${post.slug}`
    }
  });

  const routesForAuthors = resForPosts.data.allAuthors.map(author =>{
    return {
      route: `/blogs/author/${author.id}`
    }
  });

  const routes = routesForPosts.concat(routesForAuthors);
  return routes;
}




export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@500;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap' },
    ],
    script: [{
      src: '/scripts/header.js', body: true
    }],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/vendors/normalize.css',
    '@/assets/styles/global.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/apollo'
  ],
  apollo: {
    clientConfigs: {
      default: '~/apollo/config.js'
    }
  },
  styleResources: {
    scss: [
      '@/assets/styles/**/*.scss',
    ]
  },
  generate: {
    routes: dynamicRoutes
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
