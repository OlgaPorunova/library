import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import publisherSlice from './publisherSlice';
import bookSlice from './bookSlice';
import infoReducer from './reducers/infoSlice';
import authorReducer from './reducers/authorSlice';
import inputSlice from './inputSlice';
import booksesReducer from './reducers/booksesSlice';
import orderReducer from './reducers/orderSlice';
import priceReducer from './reducers/priceSlice';
import personalAreaReducer from './reducers/personalAreaSlice';
import authorInfoReducer from './reducers/authorInfoSlice';
import mailerReducer from './reducers/mailerReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    publisher: publisherSlice,
    myBooks: bookSlice,
    info: infoReducer,
    author: authorReducer,
    input: inputSlice,
    bookses: booksesReducer,
    books: bookSlice,
    order: orderReducer,
    price: priceReducer,
    cabinet: personalAreaReducer,
    authorInfo: authorInfoReducer,
    mailer: mailerReducer,
  },
});

export default store;
