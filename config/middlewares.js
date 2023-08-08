module.exports = [
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      header: "*",
      origin: [
        "http://localhost:8080",
        "http://localhost:3000",
        "http://localhost:3000/category",
        "http://127.0.0.1:3000/category",
        "http://127.0.0.1:3000",
      ],
    },
  },
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
