'use strict';

function makeLorem(size = 30) {
  var words = [
    'The sky',
    'above',
    'the port',
    'was',
    'the color of television',
    'tuned',
    'to',
    'a dead channel',
    '.',
    'All',
    'this happened',
    'more or less',
    '.',
    'I',
    'had',
    'the story',
    'bit by bit',
    'from various people',
    'and',
    'as generally',
    'happens',
    'in such cases',
    'each time',
    'it',
    'was',
    'a different story',
    '.',
    'It',
    'was',
    'a pleasure',
    'to',
    'burn',
  ];
  var txt = '';
  while (size > 0) {
    size--;
    txt += words[Math.floor(Math.random() * words.length)] + ' ';
  }
  return txt;
}

function getBook(bookId) {
  var bookIdInt = +bookId;
  return gBooks.find(function (book) {
    return bookIdInt === book.id;
  });
}

function getBookIdx(bookId) {
  var bookIdInt = +bookId;
  return gBooks.findIndex(function (book) {
    return bookIdInt === book.id;
  });
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateName() {
  var name1 = [
    'abandoned',
    'able',
    'absolute',
    'adorable',
    'adventurous',
    'academic',
    'acceptable',
    'acclaimed',
    'accomplished',
    'accurate',
    'aching',
    'acidic',
    'acrobatic',
    'active',
    'actual',
    'adept',
    'admirable',
    'admired',
    'adolescent',
    'adorable',
    'adored',
    'advanced',
    'afraid',
    'affectionate',
    'aged',
    'aggravating',
    'aggressive',
    'agile',
    'agitated',
    'agonizing',
    'agreeable',
    'ajar',
    'alarmed',
    'alarming',
    'alert',
    'alienated',
  ];

  var name2 = [
    'people',
    'history',
    'way',
    'art',
    'world',
    'information',
    'map',
    'family',
    'government',
    'health',
    'system',
    'computer',
    'meat',
    'year',
    'thanks',
    'music',
    'person',
    'reading',
    'method',
    'data',
    'food',
    'understanding',
    'theory',
    'law',
    'bird',
    'literature',
    'problem',
    'software',
    'control',
    'knowledge',
    'power',
    'ability',
    'economics',
    'love',
    'internet',
    'television',
    'science',
    'library',
    'nature',
    'fact',
    'product',
    'idea',
    'temperature',
    'investment',
    'area',
    'society',
    'activity',
    'story',
    'industry',
    'media',
    'thing',
    'oven',
    'community',
    'definition',
    'safety',
    'quality',
    'development',
    'language',
    'management',
    'player',
    'variety',
    'video',
    'week',
    'security',
    'country',
    'exam',
    'movie',
    'organization',
    'equipment',
  ];

  var name =
    capFirst(name1[getRandomIntInclusive(0, name1.length + 1)]) +
    ' ' +
    capFirst(name2[getRandomIntInclusive(0, name2.length + 1)]);
  return name;
}
