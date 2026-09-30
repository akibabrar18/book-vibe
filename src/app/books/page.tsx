import BookCard from "../../components/homepage/BookCard";
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

const getBooks = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_Server_Base_URL}/booksData.json`,
    );
    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

const BooksPage = async () => {
  const BooksData = await getBooks();
  return (
    <section className="container mx-auto my-6 sm:my-10 px-4 sm:px-6 lg:px-8">
      <div className="relative py-12 text-center">
        {/* Soft ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-success/15 rounded-full blur-3xl pointer-events-none" />

        {/* Eyebrow badge */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-success/10 text-success mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
          Discover Our Collection
        </span>

        {/* Main heading */}
        <h2 className="relative font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-base-content">
          Featured{" "}
          <span className="bg-gradient-to-r from-success via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Books
          </span>
        </h2>

        {/* Decorative underline accent */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-0.5 w-8 rounded-full bg-base-content/10" />
          <div className="h-1 w-12 rounded-full bg-success" />
          <div className="h-0.5 w-8 rounded-full bg-base-content/10" />
        </div>

        {/* Subtitle description */}
        <p className="max-w-md mx-auto mt-3 text-sm sm:text-base text-base-content/70">
          Explore the most popular and captivating titles handpicked for your
          shelf.
        </p>
      </div>
      <div className="grid grid-cols-1 max-sm:justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {BooksData.map((book: Book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BooksPage;
