import { defineUserConfig, defaultTheme } from "vuepress";
import { navbarEn, navbarRu } from "./configs";

export default defineUserConfig({
  locales: {
    "/": {
      lang: "en-US",
      title: "Sketchunez RTFM",
      description: "Sketchunez Developer Docs",
    },
    "/ru/": {
      lang: "ru-RU",
      title: "Sketchunez RTFM",
      description: "Документация разработчика Sketchunez",
    },
  },

  theme: defaultTheme({
    repo: "sketchunez",
    docsDir: "docs",
    editLink: false,
    docsRepo: "sketchunez/sketchunez-docs",

    locales: {
      "/": {
        selectLanguageName: "English",
        selectLanguageText: "Language",
        navbar: navbarEn,
      },
      "/ru/": {
        selectLanguageName: "Русский",
        selectLanguageText: "Язык",
        navbar: navbarRu,
      },
    },
  }),
});
