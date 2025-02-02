const BOOKS_KEY = "BOOKSHELF_APPS";

let books = [];

function isStorageSupported() {
    if (typeof Storage === "undefined") {
        alert("browser anda tidak mendukung web storage!");
        return false;
    } else {
        return true;
    }
}

function updateJson() {
    if (isStorageSupported()) {
        localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
    }
}

function fetchJson() {
    let data = JSON.parse(localStorage.getItem(BOOKS_KEY));

    if (data !== null) {
        books = data;
    }

    document.dispatchEvent(new Event("onjsonfetched"));
}

function composeBookObject(id, title, author, year, isComplete) {
    return {
        id, title, author, year, isComplete,
    };
}

function renderFromBooks() {
    for (book of books) {
        // Pastikan year bertipe number
        const newBook = createBook(book.id, book.title, book.author, Number(book.year), book.isComplete);

        if (book.isComplete) {
            document.getElementById(COMPLETE_BOOK).append(newBook);
        } else {
            document.getElementById(INCOMPLETE_BOOK).append(newBook);
        }
    }
}

function deleteBookFromJson(idBook) {
    // Konversi idBook ke number untuk memastikan tipe data sama
    const id = Number(idBook);
    
    for (let arrayPosition = 0; arrayPosition < books.length; arrayPosition++) {
        if (books[arrayPosition].id === id) { // Gunakan === untuk strict equality
            books.splice(arrayPosition, 1);
            break;
        }
    }
}