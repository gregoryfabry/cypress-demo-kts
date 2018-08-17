import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState = {}) {
  const enhancedMiddleware =
    compose(
      applyMiddleware(
      ), window.devToolsExtension ? window.devToolsExtension() : (f) => { return f; },
    );

  const store = createStore(
    rootReducer,
    initialState,
    enhancedMiddleware,
  );

  if (module.hot) {
    module.hot.accept(rootReducer, () => {
      return store.replaceReducer(rootReducer);
    });
  }

  return store;
}
