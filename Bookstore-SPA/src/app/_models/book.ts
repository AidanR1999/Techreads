import { Review } from "./review";

export interface Book {

  id: number;
  authors: string[];
  title: string;
  description: string;
  publisher: string;
  year: string;
  isbn: string;
  category: string;
  ratings: number[];
  reviews: Review[];
}
