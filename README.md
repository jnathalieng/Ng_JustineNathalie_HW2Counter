# Counter Lab

This project is a JavaScript counter built using object-oriented programming.  
It includes increment, decrement, and reset functionality, along with different starting values.

## Overview

This counter is made using a class so I can reuse the same logic multiple times on the page.  
Instead of rewriting everything, I just create a new instance and pass in a different container and value.

I also created a StepCounter class that extends the main counter.  
It works the same way but changes by a custom step value instead of just 1.

## Features

- Increment button  
- Decrement button (does not go below 0)  
- Reset button (returns to initial value and logs in console)  
- Custom starting values  
- Multiple counters on the same page  
- StepCounter with custom step values  

## Installation

1. Download or clone the repository  
2. Open the folder  
3. Open `index.html` in your browser  

## How To Use

Add a container in HTML:

```html
<div id="counter-container1" class="counter"></div>

Then in JavaScript:

import { Counter, StepCounter } from './counter.js';

new Counter('#counter-container1', 0);
new Counter('#counter-container2', 10);

new StepCounter('#counter-container3', 100, 100);
new StepCounter('#counter-container4', 1000, 1000);

Live Demo

The page includes 4 counters with different starting values.
Each counter works independently.

License

MIT License
Created by Justine Nathalie Ng



