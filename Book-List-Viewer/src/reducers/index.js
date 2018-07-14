import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import BookDetailReducer from './reducer_book_detail';


const rootReducer = combineReducers({
  books: BooksReducer,
  selectedBook: BookDetailReducer,
});

export default rootReducer;
