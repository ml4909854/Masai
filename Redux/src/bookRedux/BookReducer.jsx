const initialState = {
  books: ["Ramayan", "BhavadGita", "MahaBharata"]
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_AVAILABLE":
      return {
        ...state,
        available: state.books.includes(action.payload)
      };

    default:
      return state;
  }
};

export default BookReducer;
