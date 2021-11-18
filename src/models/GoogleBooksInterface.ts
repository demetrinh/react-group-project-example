export interface GoogleBooksResponse {
  items: VolumeInfo[];
}

export interface VolumeInfo {
  volumeInfo: BookInfo;
}

export interface BookInfo {
  title: string;
  authors: string[];
  description: string;
  industryIdentifiers: ISBN[];
  imageLinks: ImageLinks;
}

export interface ISBN {
  identifier: string;
}

export interface ImageLinks {
  thumbnail: string;
}
