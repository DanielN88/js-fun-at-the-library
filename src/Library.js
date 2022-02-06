
function createLibrary(libraryName) {
var library = {
  name: libraryName,
  shelves: {
    fantasy: [],
    fiction: [],
    nonFiction: [],
  }
  }
  return library
}

function addBook(library, book) {
  // var bookgenre = book.genre
     library.shelves[book.genre].push(book);
}


function checkoutBook(library, book, genre) {
  for (var i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === book) {
      library.shelves[genre].splice(i,1)
      return `You have now checked out ${book} from the ${library.name}`
    }
  }  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}


// function checkoutBook(library, book, genre) {
//   for (var i = 0; i < library.shelves[genre]; i++)
//   if (library.shelves[genre].title === book) {
//  library.shelves[genre].splice(i,1)
//  console.log(`You have now checked out ${book} from the ${library.name}`)
// } else (console.log(`Sorry, there are currently no
//   copies of ${book} at the ${library.name}`)
// }
// }
//shelves.fantasy.push()

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
