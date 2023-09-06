function Book(title, author, numberOfPages, haveReadBook) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveReadBook = haveReadBook;
  this.getTitle = function () {
    return this.title;
  };
  this.getInformation = function () {
    let readString = "";
    if (haveReadBook) {
      readString = "already read";
    } else {
      readString = "not read yet";
    }
    return `${this.title} by ${this.author}, ${this.numberOfPages} pages, ${this.readString}`;
  };
}
Book.prototype.toggleReadStatus = function () {
  this.haveReadBook = !this.haveReadBook;
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkin", 295, true);
const sevenSisters = new Book("Seven Sisters", "Lucinda Riley", 500, false);

function library(books) {
  this.books = books;
  this.addBookToLibrary = function (newBook) {
    this.books.push(newBook);
  };
  this.removeBookFromLibrary = function (IndexOfBook) {
    this.books.splice(IndexOfBook, 1);
  };
}

const myLibrary = new library([]);

myLibrary.addBookToLibrary(theHobbit);
myLibrary.addBookToLibrary(sevenSisters);

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const newBookButton = document.querySelector(".new-book");
const cancelButton = document.querySelector(".cancel-button");
const content = document.querySelector(".content");
const bookForm = document.querySelector(".new-book-form");

newBookButton.addEventListener("click", addNewBook);
cancelButton.addEventListener("click", cancelAddingBook);

displayLibrary();

function addNewBook() {
  bookForm.reset();
  modal.style.cssText = "display: flex";
  modalContent.style.cssText = "display: flex";
  const bookFormSubmit = document.querySelector(".create-book");
  bookFormSubmit.addEventListener("click", addNewBookToLibrary);
}

function addNewBookToLibrary(event) {
  event.preventDefault();
  const title = document.querySelector("#book-title").value;
  const author = document.querySelector("#author").value;
  const pages = parseInt(document.querySelector("#pages").value);
  const haveReadBook = document.querySelector("#have-read").checked;
  const newBook = new Book(title, author, pages, haveReadBook);
  myLibrary.addBookToLibrary(newBook);
  displayLibrary();
  modal.style.cssText = "display: none";
  modalContent.style.cssText = "display: none";
}

function cancelAddingBook() {
  modal.style.cssText = "display: none";
  modalContent.style.cssText = "display: none";
}

function displayLibrary() {
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
  let count = 0;
  myLibrary.books.forEach((book) => {
    const bookCard = document.createElement("div");
    let bookCardIndexClass = "book" + count;
    bookCard.classList.add("book-card");
    bookCard.classList.add(bookCardIndexClass);
    const title = document.createElement("h2");
    title.textContent = book.title;
    const by = document.createElement("div");
    by.textContent = "by";
    by.style.cssText = "font-style: italic;";
    const author = document.createElement("div");
    author.style.cssText = "font-style: italic;";
    author.textContent = book.author;
    const pages = document.createElement("div");
    pages.textContent = "Pages: " + book.numberOfPages;
    pages.style.cssText = "padding: 14px 0px;";
    const read = document.createElement("button");
    read.setAttribute("type", "button");
    read.classList.add("read-button");
    if (book.haveReadBook) {
      read.classList.add("read-button-read");
      read.textContent = "Read";
    } else {
      read.classList.add("read-button-notread");
      read.textContent = "Not Read";
    }
    const deleteBook = document.createElement("button");
    deleteBook.setAttribute("type", "button");
    deleteBook.textContent = "Delete";
    deleteBook.classList.add("delete-button");
    bookCard.appendChild(title);
    bookCard.appendChild(by);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(deleteBook);
    content.appendChild(bookCard);
    count++;
  });
  const readButtons = document.querySelectorAll(".read-button");
  readButtons.forEach((readButton) =>
    readButton.addEventListener("click", function (event) {
      myLibrary.books[event.target.parentNode.classList[1][4]].toggleReadStatus();
      displayLibrary();
    })
  );
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((deleteButton) =>
    deleteButton.addEventListener("click", function (event) {
      myLibrary.removeBookFromLibrary(event.target.parentNode.classList[1][4]);
      displayLibrary();
    })
  );
}
