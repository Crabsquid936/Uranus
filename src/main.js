import { Renderer } from './renderer.js';
import { setupUI } from './ui.js';

const renderer = new Renderer();
renderer.init();
setupUI(renderer);
