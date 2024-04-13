import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/@vueuse/core/index.mjs";
import Badge from "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_1142863_b6e77r7s7ug.css");
`);
  },
  rootComponents: [

  ],
});
