import Image from "next/image";
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
  const { bookId, bookName, author, image, rating, category, tags } = book;

  return (
    <Link href={`/books/${bookId}`} className="block group">
      <div className="w-full max-w-sm rounded-3xl border border-base-200/80 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Book Cover Container */}
        <div className="flex h-56 w-full items-center justify-center rounded-2xl bg-base-200/60 p-6 transition-colors duration-300 group-hover:bg-base-200/80">
          <div className="relative h-44 w-32 drop-shadow-[0_12px_12px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:scale-105">
            <Image
              src={image}
              alt={bookName}
              fill
              className="rounded object-contain"
              sizes="(max-width: 640px) 100vw, 200px"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="rounded-full bg-success/10 px-4 py-1 text-sm font-medium text-success"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <div className="mt-4 space-y-2">
          <h3 className="font-serif text-2xl font-bold tracking-tight text-base-content line-clamp-1 group-hover:text-success transition-colors">
            {bookName}
          </h3>
          <p className="text-sm font-medium text-base-content/70">
            By : {author}
          </p>
        </div>

        {/* Dashed Divider */}
        <div className="my-5 border-t border-dashed border-base-content/20" />

        {/* Category & Rating */}
        <div className="flex items-center justify-between text-sm font-medium text-base-content/80">
          <span>{category}</span>
          <div className="flex items-center gap-1.5">
            <span>{rating.toFixed(2)}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-base-content/70"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
