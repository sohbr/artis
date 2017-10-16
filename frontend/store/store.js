import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import { persistStore, autoRehydrate } from "redux-persist";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";

export const configureStore = () => {
  const initialState = {
    entities: {},
    session: { currentUser: -1 },
    errors: {}
  };
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, logger), autoRehydrate())
  );
  persistStore(store, { storage: AsyncStorage });
  return store;
};
