import Transition from '../components/Transition.svelte'
import Home from '../components/Home.svelte';
import About from '../components/About.svelte';
import Animation from '../components/Animation.svelte';
export default {
    '/': Home,
    '/transition': Transition,
    '/animation': Animation,
    '/about': About
}