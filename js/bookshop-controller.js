function onInit() {
  _createBooks(); //i call the function here only because problem in github pages !
  renderBooks();
  console.log('on Init');
}

function renderBooks() {
  var books = getBooks();
  var sortedBooks = getBooksSorted(books);
  var strHTML = sortedBooks
    .map(function (book) {
      return `
          <tr>
              <td> ${book.id}</td>
              <td> ${book.name}</td>
              <td> ${book.price}</td>
              <td> <button data-trans="read" onclick="onRead('${book.id}')" class ="blue">Read</button> </td>
              <td> <button data-trans="update" onclick="onUpdateBook('${book.id}')" class ="orange">Update</button> </td>
              <td> <button data-trans="delete" onclick="onRemoveBook('${book.id}')" class ="red">Delete</button>  </td>
              </tr>
          `;
    })
    .join('');
  var elTable = document.querySelector('.bookData');
  elTable.innerHTML = strHTML;
}

function renderRateBtn(bookid) {
  var strHTML = ` <button onclick="onRate('${bookid}', -1)" class="mines"> ➖</button>
      <span class="rate"></span>
      <button onclick="onRate('${bookid}', 1)" class="plus">➕</button>`;

  document.querySelector('.rate-container').innerHTML = strHTML;
}

function onRemoveBook(bookId) {
  removeBook(bookId);
  renderBooks();
  console.log(bookId);
}

function onAddBook(ev) {
  ev.preventDefault();
  var name = document.querySelector('input[name=name]').value;
  var price = document.querySelector('input[name=price]').value;
  addBook(name, price);
  renderBooks();
  _saveBookToStorage();
}

function onUpdateBook(bookId) {
  var newPrice = prompt('New Price?');
  var bookIdInt = +bookId;
  updateBook(bookIdInt, newPrice);
  renderBooks();
}

function onRead(bookId) {
  book = getBook(bookId);
  document.querySelector('.book-details').classList.remove('hide');
  document.querySelector('.name').innerText = book.name;
  document.querySelector('.info').innerText = makeLorem();
  document.querySelector('.bookImg').src = book.imgUrl;
  renderRateBtn(bookId);
}

function onCloseModal() {
  document.querySelector('.book-details').classList.toggle('hide');
}

function onRate(bookId, rate) {
  changeRate(bookId, rate);
}

function onSetSort(sortBy) {
  setSort(sortBy);
  renderBooks();
}

function changePage(value) {
  if (
    (gPageIdx === 0 && value === -1) ||
    (gPageIdx === Math.floor(gBooks.length / 5) && value === 1)
  )
    return;
  updatePageIdx(value);
  addStyleToBtn();

  renderBooks();
}

function addStyleToBtn() {
  if (gPageIdx === 0) document.querySelector('.back').classList.add('end');
  else if (gPageIdx === Math.floor(gBooks.length / 5))
    document.querySelector('.forward').classList.add('end');
  else {
    document.querySelector('.back').classList.remove('end');
    document.querySelector('.forward').classList.remove('end');
  }
  document.querySelector('.page').innerText = gPageIdx + 1;
}

function onSetLang(lang) {
  setLang(lang);
  renderBooks();
  doTrans();
}
