import { EventEmitter } from 'events';


const event = new EventEmitter();

class Events {

  static on = (eventName, cb) => {
    event.on(eventName, cb)
  }

  static emit = (eventName, data = {}) => {
    event.emit(eventName, data)
  }

  static remove = (eventName, cb) => {
    event.removeListener(eventName, cb)
  }
}

export default Events;
