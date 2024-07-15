import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { UsersReducer } from "../users/reducers";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  users: UsersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default function createStore() {
  return reduxCreateStore(rootReducer, applyMiddleware(thunk));
}
