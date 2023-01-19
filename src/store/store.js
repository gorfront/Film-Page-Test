import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { categoriesReducer } from "./slices/categories/categoriesSlice"
import { currentProductReducer } from "./slices/currentProduct/currentProductSlice"
import { pagesReducer } from "./slices/pages/PagesSlice"
import { productsReducer } from "./slices/product/productSlice"
import { searchWordReducer } from "./slices/searchWord/searchWordSlice"
import { bestFilmsReducer } from "./slices/bestFilms/bestFilmsSlice"



import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { likeUniqReducer } from "./slices/likeUniq/likeUniqSlice"


const rootReducer = combineReducers({
  products: productsReducer,
  currentProduct: currentProductReducer,
  searchWord: searchWordReducer,
  categories: categoriesReducer,
  pages: pagesReducer,
  bestFilms: bestFilmsReducer,
  likeUniq: likeUniqReducer,
})

const persistConfig = {
  key: 'shopKey',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)


// export const store = configureStore({
//   reducer: {
//     products: productsReducer,
//         currentProduct: currentProductReducer,
//         searchWord: searchWordReducer,
//         categories: categoriesReducer,
//         pages: pagesReducer,
//         bestFilms: bestFilmsReducer,
//         likeUniq: likeUniqReducer,
//   }
// })