"use client";

import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";
import { toast } from "react-toastify";

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
const ReadButton = ({ book }: { book: Book }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);
  const handleReadBook = () => {
    setReadBooks([...readBooks, book]);
    toast.success("Book added to read list!");
  };
  return (
    <button
      className="px-6 py-3 border border-[#c8c8c8] rounded-lg text-[15px] font-semibold text-[#333] hover:bg-gray-50 transition cursor-pointer"
      onClick={() => {
        handleReadBook();
      }}
    >
      Read
    </button>
  );
};

export default ReadButton;
