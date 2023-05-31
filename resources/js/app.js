import "./bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

import {
    faTwitter,
    faFacebook,
    faStackOverflow,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter, faFacebook, faStackOverflow, faGithub);

import { createApp } from "vue";

import app from "./components/app.vue";
import router from "./router/index.js";

createApp(app)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
