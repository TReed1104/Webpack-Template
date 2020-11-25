// Testing core packages
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import router from '../router/index.js';
import Vuex from 'vuex';

// Components
import App from '../components/App.vue';
import Home from '../components/Home.vue';
import JavascriptTemplate from '../components/TemplateJavascript.vue';
import TypescriptTemplate from "../components/TemplateTypescript.vue";

// Configure the vue instance
const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const store = new Vuex.Store();

// Default rendering test for the App core components
it('renders without crashing', () => {
    const wrapper = mount(App, {
        localVue,
        router,
        store,
    });
});

// Test examples for testing the default rendering behaviour of the vue components
it('renders without crashing', () => {
    const wrapper = mount(Home);
});

it('renders without crashing', () => {
    const wrapper = mount(JavascriptTemplate);
});

it('renders without crashing', () => {
    const wrapper = mount(TypescriptTemplate);
});
