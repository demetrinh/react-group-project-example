import axios from "axios";
import { GoogleBooksResponse } from "../models/GoogleBooksInterface";

const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

export const searchInTitle = async (
  title: string
): Promise<GoogleBooksResponse> => {
  const response = await axios.get<GoogleBooksResponse>(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        q: title,
        printType: "books",
        key: apiKey,
      },
    }
  );
  return response.data;
};

export const searchWithAuthor = async (
  title: string,
  author: string
): Promise<GoogleBooksResponse> => {
  const response = await axios.get<GoogleBooksResponse>(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        q: `${title} inauthor:${author}`,
        printType: "books",
        key: apiKey,
      },
    }
  );
  return response.data;
};

export const searchByIsbn = async (
  isbn: string
): Promise<GoogleBooksResponse> => {
  const response = await axios.get<GoogleBooksResponse>(
    "https://www.googleapis.com/books/v1/volumes",
    {
      params: {
        q: isbn,
        printType: "books",
        key: apiKey,
      },
    }
  );
  return response.data;
};
