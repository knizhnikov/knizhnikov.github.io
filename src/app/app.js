import Vue from "vue/dist/vue";

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import Hero from './landing/hero.vue';
import Navigation from './landing/navigation.vue';
import About from './landing/about.vue';
import Projects from './landing/projects.vue';
import Contacts from './landing/contacts.vue';


window.app = new Vue({
    el: '#app',
    data: {
    },
    components: {
      Hero, Navigation, About, Projects, Contacts
    }
  })