import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import favicon from "lume/plugins/favicon.ts";
import feed from "lume/plugins/feed.ts";
import sitemap from "lume/plugins/sitemap.ts";
import resolveUrls from "lume/plugins/resolve_urls.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import date from "lume/plugins/date.ts";
import readInfo from "lume/plugins/reading_info.ts";

import shiki from "./plugins/shiki.ts";

const site = lume({
  location: new URL("https://aeshus.com"),
});

site.ignore("README.md")
  .copy("static")
  .use(metas())
  .use(favicon())
  .use(feed({
    output: ["/feed.rss", "/feed.xml", "/feed.json"],
    query: "type=post",
    info: {
      title: "=site.metas.title",
      description: "=site.metas.description",
    },
    items: {
      title: "=metas.title",
      description: "=metas.description",
    },
  }))
  .use(sitemap())
  .use(resolveUrls())
  .use(lightningCss())
  .use(date())
  .use(readInfo())
  .use(shiki({ theme: "css-variables" }));

export default site;
