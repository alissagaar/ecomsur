import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';

const persistConfig = {
   key: 'main-cart',
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers =
   (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

const Persistor = persistStore(store)

export { Persistor }
export default store;