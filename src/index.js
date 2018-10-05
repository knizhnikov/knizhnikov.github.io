import "./scss/styles.scss";
import "font-awesome/fonts/fontawesome-webfont.woff";

import "particles.js/particles.js";
import "./js/scripts";

function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../assets', true, /\.(png|jpe?g|svg)$/));

//import "bootstrap";

import vueApp from "./app/app.js";


