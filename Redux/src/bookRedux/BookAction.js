export const checkBookAvailable = (bookName) => {
  return {
    type: "BOOK_AVAILABLE",
    payload: bookName
  };
};
