import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white p-4">
      <img className="w-full h-48 object-cover" src={book.image} alt={book.title} />
      <div className="px-2 py-4">
        <h2 className="text-lg font-bold mb-1">{book.title}</h2>
        <p className="text-gray-700 text-sm">by {book.author}</p>
      </div>
    </div>
  );
};

export default BookCard;
