// https://vitepress.dev/guide/custom-theme
import "./style.css";

import { injectSpeedInsights } from "@vercel/speed-insights";
import Theme from "vitepress/theme";
import { h } from "vue";

import Bazaar from "../components/bazaar.vue";

export default {
    ...Theme,
    Layout: () => {
        return h(Theme.Layout);
    },
    enhanceApp(ctx) {
        ctx.app.component("Bazaar", Bazaar);
        injectSpeedInsights();
        Theme.enhanceApp(ctx);
        // ...
    },
};
