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
        const newBook = createBook(book.id, book.title, book.author, book.year, book.isComplete);

        if (book.isComplete) {
            document.getElementById(COMPLETE_BOOK).append(newBook);
        } else {
            document.getElementById(INCOMPLETE_BOOK).append(newBook);
        }
    }
}

function deleteBookFromJson(idBook) {
    for (let arrayPosition = 0; arrayPosition < books.length; arrayPosition++) {
        if (books[arrayPosition].id == idBook) {
            books.splice(arrayPosition, 1);
            break;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const formInput = document.getElementById("inputBook");
    const formSearch = document.getElementById("searchBook");

    formInput.addEventListener("submit", function (event) {
        event.preventDefault();
        addBook();

        document.getElementById("inputBookTitle").value = "";
        document.getElementById("inputBookAuthor").value = "";
        document.getElementById("inputBookYear").value =[_{{{CITATION{{{_1{](https://github.com/Hami-Lemon/note/tree/8e7ae5b41e53c2cf9d2c6418e30c87123b8037b4/Java%2Fweb%E5%BC%80%E5%8F%91%2F%E5%89%8D%E7%AB%AF.md)[_{{{CITATION{{{_2{](https://github.com/EWCMF/laravel-cloudstorage/tree/eb9f382563b4faaa619fb988fa37705013a8d38d/resources%2Fviews%2Flayouts%2Fapp.blade.php)[_{{{CITATION{{{_3{](https://github.com/Faiz-Irfan/Project-FYP/tree/0df4a3ac29c406f45ae41a6c91f2f16c1feb46d5/resources%2Fviews%2Fform%2Fimport-proposal.blade.php)[_{{{CITATION{{{_4{](https://github.com/honganh18/Project/tree/7d8b4a1e623e34d311455296ae481a42e0f48747/header.php)[_{{{CITATION{{{_5{](https://github.com/thanhchi2kbn/kiemtragiuaki/tree/345c22e49c979a69fc31c4e6c58924219c655491/kiemtra%2Ftemplate%2Fheader.php)[_{{{CITATION{{{_6{](https://github.com/NguyenSllam193/Web_Technology/tree/5b319c7b5409e107279ebc3d7225926967ade3fd/.history%2Fmember%2Fprofile_user%2Fprofile_user_20211031140549.php)[_{{{CITATION{{{_7{](https://github.com/liam50212/laravel7/tree/d80f8f1a3f2080f064bc94fa6a8a142c0580a746/resources%2Fviews%2Ffront%2Fproducts%2Fcontent.blade.php)[_{{{CITATION{{{_8{](https://github.com/Rikanalarabi/Latihan_Ci4_app/tree/2a646cd9c795bef3efc3aaa4ede83599f64a70fa/app%2FViews%2FLayout%2FTemplate.php)[_{{{CITATION{{{_9{](https://github.com/Tabinka/reka/tree/11d33a20b2f99abea69ced68540433b33f0953ca/.history%2Ftemplates%2Fdesign%2Findex_20210718163550.php)[_{{{CITATION{{{_10{](https://github.com/mukeshdreddy/git01/tree/47b5f4cb467dfac1e8d53158db0e6a3ed1fad9c6/todo%2Ftodo%2Fapplication%2Fviews%2Ftemplates%2Ftodo-list.php)[_{{{CITATION{{{_11{](https://github.com/giangvippro/cockbook/tree/38ace0273cde6a3385826016ac01dc303d516c64/cockbook.php)[_{{{CITATION{{{_12{](https://github.com/NguyenTranBaoKhanh/BKShop/tree/7e1aa1cb01d23664b840aed2afff429ecc1d85bd/.history%2FApp%2FViews%2Fshare%2Flayout_20211030163210.php)[_{{{CITATION{{{_13{](https://github.com/JCsophie/projet-bootstrap/tree/71086f160f026f3e747d7d08ef8d4ab4761af08e/index.php)[_{{{CITATION{{{_14{](https://github.com/jotavital/Easylize-Rental/tree/122220231238574671b22b6e57ff6cf2ed0ba28b/system%2Fstorage%2Fframework%2Fviews%2Fbc8a76e96eb7c65524bc0b11bbbf0083c1d4c8f0.php)[_{{{CITATION{{{_15{](https://github.com/nosorrow/agro/tree/235f2c69afcb7c85b6c3dafc59a08f9ec5e1bb9f/src%2FApp%2FViews%2Fhomepage-original.php)[_{{{CITATION{{{_16{](https://github.com/openeuropa/bootstrap-component-library/tree/ed9afa87a76f93661cd2baca95dec3a72b61562b/src%2Fcomponents%2Fbcl-link%2Flink.story.js)[_{{{CITATION{{{_17{](https://github.com/effendikiki/Dicoding-submission-frontend-web-pemula/tree/75a294aa3e5576f1f74f206590405f0495d6e25d/js%2Fstorage.js)[_{{{CITATION{{{_18{](https://github.com/suryasurs/bookshelf-front-end/tree/9ca294eabf792306f5941bdc4fa2c07d362fb3ae/js%2Fscript.js)