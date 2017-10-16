import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import { persistStore, autoRehydrate } from "redux-persist";
import rootReducer from "../reducers/root_reducer";
import logger from "redux-logger";

export const configureStore = () => {
  const initialState = {
    entities: {},
    session: { currentUser: null },
    errors: {}
  };

  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    // must use 'require' (import only allowed at top of file)
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares), autoRehydrate())
  );
  persistStore(store, { storage: AsyncStorage });
  return store;
};
