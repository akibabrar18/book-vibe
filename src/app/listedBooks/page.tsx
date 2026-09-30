"use client";
import React, { useContext, useState } from "react";
import { BooksContext } from "../../context/BooksContext";
import ListedBookCard from "@/components/listedBooks/ListedBookCard";
interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

const ListedBooksPage = () => {
  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("Component must be used inside BooksProvider");
  }
  const { readBooks, wishlist } = context;
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortedReadBooks = [...readBooks].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "pages") {
      return b.totalPages - a.totalPages;
    } else if (sortBy === "year") {
      return b.yearOfPublishing - a.yearOfPublishing;
    }
    return 0;
  });

  const sortedWishlist = [...wishlist].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "pages") {
      return b.totalPages - a.totalPages;
    } else if (sortBy === "year") {
      return b.yearOfPublishing - a.yearOfPublishing;
    }
    return 0;
  });

  return (
    <div className="container mx-auto ">
      <h1 className="bg-[#F3F3F3] text-center align-center py-4 text-4xl font-bold rounded-2xl my-4">
        Books
      </h1>
      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "rating" | "pages" | "year")}
          defaultValue="Sort by"
          className="select appearance-none mb-2 bg-green-500 border-none text-white rounded-4xl px-4 py-2"
        >
          <option disabled={true}>Sorted by</option>
          <option value="rating">Rating</option>
          <option value="pages">No of Pages</option>
          <option value="year">Publish Year</option>
        </select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Read Books ${sortedReadBooks.length > 0 ? sortedReadBooks.length : ""}`}
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedReadBooks.length > 0 ? (
            sortedReadBooks.map((book: Book) => (
              <ListedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p>No books found!</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label={`Wish List ${sortedWishlist.length > 0 ? sortedWishlist.length : ""}`}
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {sortedWishlist.length > 0 ? (
            sortedWishlist.map((book: Book) => (
              <ListedBookCard key={book.bookId} book={book} />
            ))
          ) : (
            <p>No books found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;
