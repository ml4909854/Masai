import React from "react";
// import Counter from './counterRedux/Counter'
import { Provider } from "react-redux";
import { store } from "./bookRedux/Store.js";
import Book from "./bookRedux/Book";
const App = () => {
  return (
    <Provider store={store}>
      <Book />
    </Provider>
  );
};

export default App;
