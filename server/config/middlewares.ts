export default [
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: [
        'https://motheotravelblog.netlify.app',
        'https://strapi-travel-blog-production.up.railway.app',
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:1337',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: '*',
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];