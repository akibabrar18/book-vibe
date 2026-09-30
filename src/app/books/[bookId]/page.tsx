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
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_Server_Base_URL}/booksData.json`);
    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
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