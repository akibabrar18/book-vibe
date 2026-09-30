"use client";
import { BooksContext } from "@/context/BooksContext";
import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  BarShapeProps,
  LabelList,
  Label,
  LabelProps,
  Tooltip,
} from "recharts";
import { getPath } from "recharts/types/shape/Curve";

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

const ReadBooks = () => {
  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "red",
    "pink",
    "black",
  ];

  const context = useContext(BooksContext);
  if (!context) {
    throw new Error("Component must be used inside BooksProvider");
  }
  const { readBooks } = context;
  const data = readBooks.map((book: Book,index) => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: book.rating,
    amt: book.yearOfPublishing,
  }));
  const getPath = (x: number, y: number, width: number, height: number) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
  };

  const TriangleBar = (props: BarShapeProps) => {
    const { x, y, width, height, index } = props;

    const color = colors[index % colors.length];

    return (
      <path
        strokeWidth={props.isActive ? 5 : 0}
        d={getPath(Number(x), Number(y), Number(width), Number(height))}
        stroke={color}
        fill={color}
        style={{
          transition: "stroke-width 0.3s ease-out",
        }}
      />
    );
  };

  const CustomColorLabel = (props: LabelProps) => {
    const fill = colors[(props.index ?? 0) % colors.length];
    return <Label {...props} fill={fill} />;
  };
  return (
    <div className="container mx-auto my-2 flex items-center justify-center bg-gray-100 rounded-2xl p-20">
      {readBooks.length>0 ? (<BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid />
        <Tooltip cursor={{ fillOpacity: 0.5 }} />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Bar dataKey="uv" shape={TriangleBar} activeBar>
          <LabelList content={CustomColorLabel} position="top" />
        </Bar>
        {/* <RechartsDevtools/> */}
      </BarChart>):(<h1 className="text-center text-2xl font-bold">No Read Books Found</h1>)}
    </div>
  );
};

export default ReadBooks;
