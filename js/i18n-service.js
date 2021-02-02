var gTrans = {
  title: {
    en: 'BOOK SHOP',
    he: 'חנות ספרים',
  },
  add: {
    en: 'Add',
    he: 'הוסף',
  },
  id: {
    en: 'id',
    he: 'מספר סידורי',
  },
  'book-title': {
    en: 'Title',
    he: 'כותרת',
  },
  price: {
    en: 'price',
    he: 'מחיר',
  },
  actions: {
    en: 'actions',
    he: 'פעולות',
  },
  read: {
    en: 'Read',
    he: 'קרא',
  },
  update: {
    en: 'Update',
    he: 'עדכן',
  },
  delete: {
    en: 'Delete',
    he: 'מחק',
  },
  'name-placeholder': {
    en: 'name',
    he: 'שם',
  },
  'price-placeholder': {
    en: 'price',
    he: 'מחיר',
  },
  'modal-book-name': {
    en: 'Book name:',
    he: 'שם הספר',
  },
  'modal-book-info': {
    en: 'Book info:',
    he: 'תקציר הספר',
  },
  'modal-book-img': {
    en: 'Book image:',
    he: 'תמונה:',
  },
};

var gCurrLang = 'en';

function doTrans() {
  var els = document.querySelectorAll('[data-trans]');
  els.forEach(function (el) {
    var transKey = el.dataset.trans;
    var txt = getTrans(transKey);

    if (el.nodeName === 'INPUT') {
      el.setAttribute('placeholder', txt);
    } else {
      el.innerText = txt;
    }
  });
}

function getTrans(transKey) {
  var keyTrans = gTrans[transKey];
  if (!keyTrans) return 'UNKNOWN';
  var txt = keyTrans[gCurrLang];

  // if not found return en
  if (!txt) txt = keyTrans['en'];
  return txt;
}

function setLang(lang) {
  gCurrLang = lang;
}
