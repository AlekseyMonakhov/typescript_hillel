interface ICalculator {
  add(firstOperand: number, secondOperand: number): number;
  minus(firstOperand: number, secondOperand: number): number;
  multiply(firstOperand: number, secondOperand: number): number;
  devide(firstOperand: number, secondOperand: number): number;
}

class Calculator implements ICalculator {


  add(firstOperand: number, secondOperand: number): number {
    return firstOperand + secondOperand;
  }

  minus(firstOperand: number, secondOperand: number): number {
    return firstOperand - secondOperand;
  }

  multiply(firstOperand: number, secondOperand: number): number {
    return firstOperand * secondOperand;
  }

  devide(firstOperand: number, secondOperand: number): number {
    return firstOperand / secondOperand;
  }
}

function calculate(calculator: ICalculator) {
  return calculator.add(1, 2);
}

interface IBook {
  bookName: string;
  genre: string;
  author: IAuthor;
}

interface IAuthor {
  firstName: string;
  lastName: string;
  books: {
    [bookName: string]: Omit<IBook, 'author'>;
  };
}


function notNil<T>(value: T | undefined | null): asserts value is T {

  if (value === null || value === undefined) {
    throw new Error(`Expected value to be: not nil, but got: ${value}`);
  }
}


interface IBookService {
  getAuthorByLastName(name: string): IAuthor;
  getBookByName(name: string): IBook;

  getBookByAuthor(author: IAuthor): IBook;
  getAuthorByBook(book: IBook): IAuthor;
}

class BookServise implements IBookService {
  constructor(
    public books: IBook[],
    public authors: IAuthor[]
  ) {}

  getAuthorByBook(book: IBook): IAuthor {
    const author = this.authors.find(author => author.books[book.bookName]);
    notNil(author);

    return author;
  }

  getAuthorByLastName(lastname: string): IAuthor {
    const author = this.authors.find(author => author.lastName === lastname);

    notNil(author);

    return author;
  }

  getBookByAuthor(author: IAuthor): IBook {
    const book = this.books.find(book => book.author.lastName === author.lastName);

    notNil(book);

    return book;
  }

  getBookByName(name: string): IBook {
    const book = this.books.find(book => book.bookName === name);

    notNil(book);

    return book;
  }
}
