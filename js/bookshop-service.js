const KEY = 'BOOK';
const PAGE_SIZE = 5;

var gSortBy = 1; // 1 = by name 2=by price
var gId = 1;

// _createBooks();

var gPageIdx = 0;
var gBooks;

function createBook(
  name = generateName(),
  price = getRandomIntInclusive(1, 200)
) {
  return {
    id: gId++,
    name: name,
    price: price,
    imgUrl: getImg(),
    rate: 0,
  };
}

function _createBooks() {
  var books = loadFromStorage(KEY);
  if (!books || !books.length) {
    books = [];
    for (var i = 0; i < 21; i++) {
      books.push(createBook());
    }
  }
  gBooks = books;
  _saveBookToStorage();
}

function _saveBookToStorage() {
  saveToStorage(KEY, gBooks);
}

function getBooks() {
  var startIdx = gPageIdx * PAGE_SIZE;
  return gBooks.slice(startIdx, startIdx + PAGE_SIZE);
}

function removeBook(bookId) {
  var bookID = +bookId;
  var bookIdx = gBooks.findIndex(function (book) {
    return bookID === book.id;
  });
  gBooks.splice(bookIdx, 1);

  _saveBookToStorage();
}

function addBook(name, price) {
  var book = createBook(name, price);
  gBooks.unshift(book);
  console.log(gBooks);
}

function updateBook(bookId, newPrice) {
  var bookIdx = gBooks.findIndex(function (book) {
    return bookId === book.id;
  });
  console.log(gBooks, bookIdx);
  gBooks[bookIdx].price = newPrice;
  _saveBookToStorage();
}

function getImg() {
  var imgNum = getRandomIntInclusive(1, 7);
  return `img/book${imgNum}.png`;
}

function changeRate(bookId, rate) {
  var idx = getBookIdx(bookId);
  if (
    (gBooks[idx].rate === 0 && rate === -1) ||
    (gBooks[idx].rate === 10 && rate === 1)
  )
    return;
  rate === -1 ? gBooks[idx].rate-- : gBooks[idx].rate++;
  document.querySelector('.rate').innerText = gBooks[idx].rate;
  _saveBookToStorage();
}

function setSort(sortBy) {
  gSortBy = sortBy;
}

function getBooksSorted(books) {
  if (gSortBy === 1) return _sortByName(books);
  else if (gSortBy === 2) return _sortByPrice(books);
  else {
    return _sortById(books);
  }
}

function _sortByName(books) {
  return books.sort(function (a, b) {
    var BookA = a.name.toLowerCase(),
      bookB = b.name.toLowerCase();
    if (BookA < bookB) return -1;
  });
}

function _sortByPrice(books) {
  return books.sort(function (a, b) {
    return a.price - b.price;
  });
}

function _sortById(books) {
  return books.sort(function (a, b) {
    return a.id - b.id;
  });
}

function updatePageIdx(value) {
  gPageIdx += value;
}
