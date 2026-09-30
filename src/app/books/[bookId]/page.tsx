import BookDetails from "@/components/homepage/BookDetails";

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
  const res = await fetch("http://localhost:3000/booksData.json");
  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }
  return res.json();
};

const BookDetailsPage = async ({params}: {params:Promise<{bookId:string}>}) => {
    const { bookId } = await params;
    const booksData = await getBooks();
    const bookData = booksData.find((book: Book) => book.bookId === Number(bookId));
    return (
        <div>
            <BookDetails book={bookData}></BookDetails>
        </div>
    );
};

export default BookDetailsPage;