class events {
  constructor() {
    this.events = {};
  }

  on(event, handler) {
    // add array to events object if does not exist
    this.events[event] = this.events[event] || [];
    // or could do (this.events[eventName] || this.events[eventName] = []).push(handler);
    // add handler to events object
    this.events[event].push(handler);
  }

  trigger(event) {
    
  }
}