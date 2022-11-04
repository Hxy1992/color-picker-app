import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setWindowPosition, listenWindowMove } from './utils/index'

const hasLoaded = sessionStorage.getItem('has-loaded')

listenWindowMove()
if (!hasLoaded) setWindowPosition()
createApp(App).mount("#app")

sessionStorage.setItem('has-loaded', 1)