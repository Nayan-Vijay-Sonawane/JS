// Browser events
// event
// respond
// data stored
// stop
// lifecycle


// Events
// Events are nothing but the actions or occurrences happen in the browser.
// eg. click, key press, scroll, etc.

// for eg
{/*
    we have a page in that page we have a button, when we click on the button some video is playing

    event = 'click'
    event-target = 'button'
    video run/play = 'action/behaviour'
    we write this in the event-listener

    To handle the events what actions need to take that we can write in the event-listener.

*/}

// elements
// addEventListener()     removeEventListener()

// syntax
// <event-target>(dot)addEventListener(<event-type>, <function->action>)

function changeText(){
    let fpara = document.getElementById('fpara');
    fpara.textContent = "Nayan Sonawane";
}

let fpara = document.getElementById('fpara');
fpara.addEventListener('click', changeText);

// note: the function of addEventListener and removeEventListener should be same
// otherwise it is not working (because the entity/object should be same)

// Phases of events
// 1. Capturing phase
// In this phase the event goes through HTML DOM and searches for the target element.

// 2. Target phase
// In this phase where the event reaches the target element- the element on which the event 
// was originally triggered.  

// 3. Bubbling phase  
// Following the target phase, the event bubbles up from the target element through its parent.