import { createStore } from 'redux';

function loading(state = 0, action) {
  switch (action.type) {
  case 'LOADING':
    return state = 1
  case 'HIDE':
    return state = 2
  case 'NOLOADING':
    return state = 0
  default:
    return state
  }
}

export default createStore(loading);
