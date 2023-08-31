function Book(title, author, numberOfPages, haveReadBook) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.haveReadBook = haveReadBook;
  this.getTitle = function () {
    return title;
  };
  this.printInformation = function () {
    let readString = "";
    if (haveReadBook) {
      readString = "already read";
    } else {
      readString = "not read yet";
    }
    console.log(`${title} by ${author}, ${numberOfPages} pages, ${readString}`);
  };
  this.getInformation = function () {
    let readString = "";
    if (haveReadBook) {
      readString = "already read";
    } else {
      readString = "not read yet";
    }
    return `${title} by ${author}, ${numberOfPages} pages, ${readString}`;
  };
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkin", 295, true);
const sevenSisters = new Book("Seven Sisters", "Lucinda Riley", 500, false);

const myLibrary = [];

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

addBookToLibrary(theHobbit);
addBookToLibrary(sevenSisters);

console.table(myLibrary);

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

const newBookButton = document.querySelector(".new-book");
newBookButton.addEventListener("click", addNewBook);


function addNewBook() {
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
  addBookToLibrary(newBook);
  console.table(myLibrary);
  modal.style.cssText = "display: none";
  modalContent.style.cssText = "display: none";
}
