let myLibrary = [];

window.onload = function () {
    document.getElementById("addForm").style.display = "none";
}

window.addEventListener("load", showData());

function showData() {
    table = document.createElement("table");
    row = table.insertRow();
    var cell = row.insertCell();
    cell.innerHTML = "id";
    cell = row.insertCell();
    cell.innerHTML = "title";
    cell = row.insertCell();
    cell.innerHTML = "author";
    cell = row.insertCell();
    cell.innerHTML = "read";
    row = table.insertRow();

    for (var i of myLibrary) {
        var cell = row.insertCell();
        cell.innerHTML = i.id;
        cell = row.insertCell();
        cell.innerHTML = i.title;
        cell = row.insertCell();
        cell.innerHTML = i.author;
        cell = row.insertCell();
        cell.innerHTML = i.read ? "<input type='checkbox' onclick='check($book)' checked>".replace('$book', i.id) : "<input type='checkbox' onclick='check($book)'>".replace('$book', i.id);
        cell = row.insertCell();
        cell.innerHTML = "<button onclick='remove($id)'>remove from library</button>".replace('$id', i.id);
        row = table.insertRow();
    }
    list = document.getElementById("books");
    list.querySelectorAll('*').forEach(n => n.remove());
    document.getElementById("books").appendChild(table);
}

var form = document.getElementById("addForm");

function handleForm(event) {
    event.preventDefault();
}
form.addEventListener('submit', handleForm);

function Book(title, author, read) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.read = read;
    this.id = myLibrary.length + 1;
}

function addBookToLibrary() {
    bookName = document.getElementById("form-name").value;
    bookAuthor = document.getElementById("form-author").value;
    if (bookName != "" && bookAuthor != "") {
        book = new Book(bookName, bookAuthor, false)
        myLibrary.push(book)
        console.log(myLibrary);
        document.getElementById("addForm").style.display = "none";
        document.getElementById("addForm").reset();
        showData();
    }
}

function remove(id) {
    myLibrary.splice(id - 1, 1);
    for (i = 0; i < myLibrary.length; i++) {
        myLibrary[i].id = i + 1;
    }
    showData();
}

function showForm() {
    document.getElementById("addForm").style.display = "block";
}

function check(book) {
    myLibrary[book - 1].read = !myLibrary[book - 1].read;
}