import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import { categorySaga, gamesSaga } from "../sagas";
import rootReducer from "../reducers";

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? compose(
                  applyMiddleware(sagaMiddleware),
                  window.__REDUX_DEVTOOLS_EXTENSION__(),
              )
            : applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(categorySaga);
    sagaMiddleware.run(gamesSaga);
    return store;
};

export default configureStore;
