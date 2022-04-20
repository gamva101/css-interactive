import Transition from '../components/Transition.svelte'
import Home from '../components/Home.svelte';
import About from '../components/About.svelte';
import Animation from '../components/Animation.svelte';
import Animation1 from '../components/animation/1.svelte';
import Animation2 from '../components/animation/2.svelte';
import CSS3D from '../components/CSS-3D.svelte';
import CSS3D_1 from '../components/css-3d/1.svelte';
import Flex from '../components/Flex-test.svelte'
import Event from '../components/Event.svelte';
import ThreeDoors from '../components/ThreeDoors.svelte';

export default {
    '/': Home,
    '/transition': Transition,
    '/animation': Animation,
    '/animation/1': Animation1,
    '/animation/2': Animation2,
    '/css-3d': CSS3D,
    '/css-3d/1': CSS3D_1,
    '/flex': Flex,
    '/event': Event,
    '/three-doors': ThreeDoors,
    '/about': About
}