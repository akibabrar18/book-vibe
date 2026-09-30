"use client";

import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

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

interface BooksContextType {
  readBooks: Book[];
  setReadBooks: Dispatch<SetStateAction<Book[]>>;
  wishlist: Book[];
  setWishlist: Dispatch<SetStateAction<Book[]>>;
}

export const BooksContext = createContext<BooksContextType | undefined>(
  undefined
);

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [wishlist, setWishlist] = useState<Book[]>([]);

  const sharedData: BooksContextType = {
    readBooks,
    setReadBooks,
    wishlist,
    setWishlist,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;