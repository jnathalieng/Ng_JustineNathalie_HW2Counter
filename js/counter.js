// no need for const because it is within a class 

export class Counter {
    constructor(selector) {
        this.count = 0; 
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.button = document.createElement("button");

        //Add Buttons, decrement, reset
        //this.decrement
        //this.reset

        //set button text 
        this.button.textContent = "Increment"; 

        //set new button text
        //this. decrement....
        //this.reset...


        //Append display and button into the container 
        container.appendChild(this.display);
        container.appendChild(this.button); 
        
        // append new buttons
        //container.appenChild()

        //Add Event Listener
        this.button.addEventListener("click",()=> this.increment());  
        //Add new eventListeners

        //when this first gets mounted update the display
        this.update();
    }

    //state methods 
    increment() {
        this.count++;
        this.update(); 
    }

    //decrement() {
       // this.count
       //this.update();
    //}

    //reset() {
      // this.count=0;
    //}

    update () {
        //set initial display content 
        this.display.textContent = `Count:${this.count}`;

        //classList.toggle() this.count===0 
    }
}

//Counter is super class
//StepCounter is sub class 

class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        //add step property
        //this.step = step; 
    }
    //increment(){}
    //decrement(){}
}