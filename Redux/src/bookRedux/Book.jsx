import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkBookAvailable } from "./BookAction";

const Book = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state); // 👈 NOW YOU WILL SEE BOOKS

  return (
    <>
      <button onClick={() => dispatch(checkBookAvailable("Qran"))}>
        Check Ramayan
      </button>

      {state.available !== undefined && (
        <h2>{state.available ? "Yes Available" : "Not Available"}</h2>
      )}
    </>
  );
};

export default Book;
