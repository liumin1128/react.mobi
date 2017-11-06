import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { reducer as reduxFormReducer } from 'redux-form';
import withRedux from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import effect from 'redux-effect';
import reducers from './reducers';
import effects from './effects';

const reducer = combineReducers({
  ...reducers,
  // form: reduxFormReducer,
});

export const store = (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(effect(effects))),
  );
};

export const reduxPage = comp => withRedux(store)(comp);
