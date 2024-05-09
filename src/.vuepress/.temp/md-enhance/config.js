import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-md-enhance/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import { useHintContainers } from "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Tabs from "/Users/Janesen/工作/space_webstorm/fastchar-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
