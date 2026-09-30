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
const WishListButton = ({ book }: { book: Book }) => {
  const { wishlist, setWishlist } = useContext(BooksContext);
  const handleAddToWishlist = () => {
    setWishlist([...wishlist, book]);
    toast.success("Book added to wishlist!");
  };
  return (
    <button
      className="px-7 py-3 bg-[#50b8d8] hover:bg-[#42a8c8] rounded-lg text-[15px] font-semibold text-white transition cursor-pointer"
      onClick={() => {
        handleAddToWishlist();
      }}
    >
      Add to Wishlist
    </button>
  );
};

export default WishListButton;
