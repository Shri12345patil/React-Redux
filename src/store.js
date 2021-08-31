  // create store for store the state object call reducers for that 
import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";
function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer,state);
}
export default configureStore;