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

const newBookButton = document.querySelector(".new-book");
newBookButton.addEventListener("click", addNewBook);

const rightSide = document.querySelector(".right-side");

function addNewBook() {
  const form = document.createElement("form");
  form.classList.add("book-form");
  const bookTitle = document.createElement("input");
  bookTitle.setAttribute("type", "text");
  bookTitle.setAttribute("name", "book-title");
  bookTitle.setAttribute("id", "book-title");
  const labelBookTitle = document.createElement("label");
  labelBookTitle.setAttribute("for", "book-title");
  labelBookTitle.innerHTML = "<p>Book Title</p>";
  const author = document.createElement("input");
  author.setAttribute("type", "text");
  author.setAttribute("name", "author");
  author.setAttribute("id", "author");
  const labelAuthor = document.createElement("label");
  labelAuthor.setAttribute("for", "author");
  labelAuthor.innerHTML = "<p>Author</p>";
  const pages = document.createElement("input");
  pages.setAttribute("type", "number");
  pages.setAttribute("name", "pages");
  pages.setAttribute("id", "pages");
  const labelPages = document.createElement("label");
  labelPages.setAttribute("for", "pages");
  labelPages.innerHTML = "<p>Number of pages</p>";
  const haveReadBook = document.createElement("input");
  haveReadBook.setAttribute("type", "checkbox");
  haveReadBook.setAttribute("name", "have-read-book");
  haveReadBook.setAttribute("value", "1");
  haveReadBook.setAttribute("id", "have-read-book");
  const labelHaveReadBook = document.createElement("label");
  labelHaveReadBook.setAttribute("for", "have-read-book");
  labelHaveReadBook.innerHTML = "<p>Have Read Book?</p>";
  const submit = document.createElement("button");
  submit.setAttribute("type", "submit");
  submit.setAttribute("name", "create-book");
  submit.textContent = "Add this Book";
  submit.classList.add("create-book");
  form.appendChild(labelBookTitle);
  form.appendChild(bookTitle);
  form.appendChild(labelAuthor);
  form.appendChild(author);
  form.appendChild(labelPages);
  form.appendChild(pages);
  form.appendChild(labelHaveReadBook);
  form.appendChild(haveReadBook);
  form.appendChild(submit);
  rightSide.appendChild(form);
  const bookFormSubmit = document.querySelector(".create-book");
  bookFormSubmit.addEventListener("click", addNewBookToLibrary);

  function addNewBookToLibrary(event) {
    event.preventDefault();
    const title = document.querySelector("#book-title").value;
    const author = document.querySelector("#author").value;
    const pages = parseInt(document.querySelector("#pages").value);
    const haveReadBook = document.querySelector("#have-read-book").checked;
    const newBook = new Book(title, author, pages, haveReadBook);
    addBookToLibrary(newBook);
    console.table(myLibrary);
  }
}
