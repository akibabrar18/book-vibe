import Image from "next/image";
import ReadButton from "../bookDetails/ReadButton";
import WishListButton from "../bookDetails/WishListButton";
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

const BookDetails = ({ book }: { book: Book }) => {
  return (
    <div className="max-w-[1030px] mx-auto my-6 px-4 sm:px-6 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
        {/* LEFT - BOOK IMAGE */}
        <div className="bg-[#f5f5f5] rounded-[14px] flex items-center justify-center min-h-[450px] md:min-h-0">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={500}
            className="w-[220px] sm:w-[260px] md:w-[300px] max-h-[500px] h-auto object-contain"
          />
        </div>

        {/* RIGHT - BOOK DETAILS */}
        <div className="py-2 md:py-0 px-2 sm:px-4 md:px-0 flex flex-col justify-center">
          {/* Title */}
          <h1 className="font-serif text-[32px] sm:text-[36px] md:text-[38px] leading-[1.15] font-bold text-[#1f1f1f]">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="mt-3 text-[16px] sm:text-[17px] text-[#555]">
            By : <span className="font-medium text-[#333]">{book.author}</span>
          </p>

          <hr className="my-5 border-gray-200" />

          {/* Category */}
          <p className="text-[16px] sm:text-[17px] text-[#555]">
            {book.category}
          </p>

          <hr className="my-5 border-gray-200" />

          {/* Review */}
          <p className="text-[14px] sm:text-[15px] leading-[1.5] text-[#666]">
            <span className="font-bold text-[#222]">Review :</span>{" "}
            {book.review}
          </p>

          {/* Tags */}
          <div className="flex items-start sm:items-center gap-3 mt-5">
            <span className="font-bold text-[#222] text-[14px]">Tag</span>

            <div className="flex flex-wrap gap-2">
              {book.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-1.5 rounded-full bg-[#f1faef] text-[#23be0a] text-[14px] font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <hr className="my-5 border-gray-200" />

          {/* Book Information */}
          <div className="grid grid-cols-[150px_1fr] sm:grid-cols-[177px_1fr] gap-y-4 text-[14px]">
            <p className="text-[#666]">Number of Pages:</p>
            <p className="font-bold text-[#222]">{book.totalPages}</p>

            <p className="text-[#666]">Publisher:</p>
            <p className="font-bold text-[#222]">{book.publisher}</p>

            <p className="text-[#666]">Year of Publishing:</p>
            <p className="font-bold text-[#222]">{book.yearOfPublishing}</p>

            <p className="text-[#666]">Rating:</p>
            <p className="font-bold text-[#222]">{book.rating}</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-7">
            <ReadButton book={book}></ReadButton>
            <WishListButton book={book}></WishListButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
