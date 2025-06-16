interface libro {
  title: string;
  isRead: true;
};

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead(books: any, titleToSearch: string):boolean {
  for (const book of books) {
    if(book.title === titleToSearch) {
      if(book.isRead == true) {return true}
      return false;
    }
  }
  return false;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false