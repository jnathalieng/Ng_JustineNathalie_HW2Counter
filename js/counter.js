// no need for const because it is within a class 

export class Counter {
    constructor(selector, initialValue = 0) {
        this.count = initialValue; 
        this.selector = selector;
        this.mount();
    }

    mount() {
        const container = document.querySelector(this.selector);

        this.display = document.createElement("div");
        this.button = document.createElement("button");

        //Add Buttons, decrement, reset
        this.decrementButton = document.createElement("button");
        this.resetButton = document.createElement("button");


        //set button text 
        this.button.textContent = "Increment";
        this.decrementButton.textContent = "Decrement"; 
        this.resetButton.textContent = "Reset";


        //Append display and button into the container 
        container.appendChild(this.display);
        container.appendChild(this.button); 
        
        // append new buttons
        container.appendChild(this.decrementButton);
        container.appendChild(this.resetButton);


        //Add Event Listener
        this.button.addEventListener("click",()=> this.increment());  
        //Add new eventListeners
        this.decrementButton.addEventListener("click", () => this.decrement());
        this.resetButton.addEventListener("click", () => this.reset());

        //when this first gets mounted update the display
        this.update();
    }

    //state methods 
    increment() {
        this.count++;
        this.update(); 
    }

    decrement() {
        if (this.count > 0) {
            this.count--;
            this.update();
        }
    }

    reset() {
      this.count=0;
      this.update();
    }

    update () {
        //set initial display content 
        this.display.textContent = `Count:${this.count}`;

        //classList.toggle() this.count===0 
        this.decrementButton.classList.toggle("inactive", this.count === 0);
        this.resetButton.classList.toggle("inactive", this.count === 0)
    }
}

//Counter is super class
//StepCounter is sub class 

export class StepCounter extends Counter {
    constructor(selector, initialValue = 0, step = 1) {
        super(selector, initialValue);
        this.step = step; 
    }
    //increment(){}
    increment() {
        this.count += this.step;
        this.update();
    }

    //decrement(){}
    decrement() {
        if (this.count - this.step >= 0) {
            this.count -= this.step;
        } else {
            this.count = 0;
        }

        this.update();
    }
}