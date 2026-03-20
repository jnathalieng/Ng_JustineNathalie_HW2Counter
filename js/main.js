import { Counter,StepCounter } from './counter.js';
import { gsapAnimations } from "./gsapanimation.js";

const counter1 = new Counter("#counter-container1", 0);
const counter2 = new Counter("#counter-container2", 10);
const counter3 = new StepCounter ("#counter-container3", 100, 100);
const counter4 = new StepCounter ("#counter-container3", 1000, 1000);
 
