import Image from "next/image";
import { Users, FileText, MapPin } from "lucide-react";
import Link from "next/link";

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



const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white p-5">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Book Image */}
        <div className="flex h-56 w-full shrink-0 items-center justify-center rounded-2xl bg-gray-100 md:w-56">
          <Image
            src={book.image}
            alt={book.bookName}
            width={180}
            height={220}
            className="h-48 w-auto object-contain"
          />
        </div>

        {/* Book Information */}
        <div className="flex flex-1 flex-col">
          {/* Book Name */}
          <h2 className="font-serif text-2xl font-bold text-gray-900">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-3 text-gray-700">
            By : <span className="font-medium">{book.author}</span>
          </p>

          {/* Tags + Year */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="font-bold text-gray-900">Tag</span>

            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
              >
                #{tag}
              </span>
            ))}

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={20} strokeWidth={1.8} />
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </div>
          </div>

          {/* Publisher + Pages */}
          <div className="mt-4 flex flex-wrap items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2">
              <Users size={21} strokeWidth={1.8} />
              <span>Publisher: {book.publisher}</span>
            </div>

            <div className="flex items-center gap-2">
              <FileText size={21} strokeWidth={1.8} />
              <span>Page {book.totalPages}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-gray-200"></div>

          {/* Bottom Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-500">
              Category: {book.category}
            </span>

            <span className="rounded-full bg-orange-50 px-5 py-2.5 text-sm font-medium text-orange-500">
              Rating: {book.rating}
            </span>

            <Link
              href={`/books/${book.bookId}`}
              className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;