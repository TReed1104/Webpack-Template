// Testing core packages
import { mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import router from '../router/index.js';
import Vuex from 'vuex';

// Components
import App from '../components/App.vue';
import Home from '../components/Home.vue';
import JavascriptTemplate from '../components/TemplateJavascript.vue';
import TypescriptTemplate from "../components/TemplateTypescript.vue";
