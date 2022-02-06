function createTitle(bookIdea) {
  return `The ${bookIdea}`
}

function buildMainCharacter(name,age,pronouns) {
  return mainCharacter = {name: name, age: age, pronouns: pronouns,
  }
}

function saveReview(newReviews, reviews) {
    for (var i = 0; i <= reviews.length; i++) {
      if (reviews[i] !== newReviews) {
      return reviews.push(newReviews)
    } else {
      return reviews
    }
  }
}

function calculatePageCount(bookTitle, bookPageCount) {
   return  bookTitle.length * 20
}

function writeBook(bookTitle, bookCharacter, bookPageCount,) {
 return book = {
   title: bookTitle,
   mainCharacter: bookCharacter,
   pageCount: bookTitle.length *20,
   genre: "fantasy",
 }
}

function editBook(newBook) {
  var threeQuaters = newBook.pageCount / 4
 newBook.pageCount = threeQuaters * 3
  // return threeQuaters * 3
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
