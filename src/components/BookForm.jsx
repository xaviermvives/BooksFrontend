// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { createBook } from "../api/bookApi";

const BookForm = ({ onBookAdded }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    pages: 0,
    publishedYear: 0,
    isbn: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBook(book);
      onBookAdded();
      setBook({ title: "", author: "", pages: 0, publishedYear: 0, isbn: "" });
    } catch (error) {
      console.error("Error creating book:", error);
    }
  };

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={book.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="author"
        value={book.author}
        onChange={handleChange}
        placeholder="Author"
        required
      />
      <input
        type="number"
        name="pages"
        value={book.pages}
        onChange={handleChange}
        placeholder="Pages"
        required
      />
      <input
        type="number"
        name="publishedYear"
        value={book.publishedYear}
        onChange={handleChange}
        placeholder="Published Year"
        required
      />
      <input
        type="text"
        name="isbn"
        value={book.isbn}
        onChange={handleChange}
        placeholder="ISBN"
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;