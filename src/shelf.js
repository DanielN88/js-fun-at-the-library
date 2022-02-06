function shelfBook(book, sciFiShelf) {
  if (sciFiShelf.length < 3) {
    sciFiShelf.unshift(book)
  } else {
    return sciFiShelf
  }
}


function unshelfBook(book, sciFiShelf) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title == book) {
      sciFiShelf.splice(i, 1)
    }
  }
}

function listTitles(fantasyShelf) {
  var newArray = []
  for ( var i = 0; i < fantasyShelf.length; i++ ) {
    newArray.push(fantasyShelf[i].title)
  }
  return newArray.join(', ', )
}

function searchShelf(sciFiShelf, title) {
  for (var i = 0; i < sciFiShelf.length; i++) {
    if (sciFiShelf[i].title === title) {
      return true
    }
  }
  return false
}

// function shelfBook(shelf, bookTitle) {
//   if (shelf.length < 3) {
//   shelf.unshift(bookTitle);
//   } else {
//   return shelf
//   }
// }
//
// function unshelfBook(bookTitle, shelf) {
//   for (var i = 0; i < shelf.length; i++); {
//    if (bookTitle == shelf[i].title); {
//      shelf.splice( i, 1);
//     }
//   }
// }

// function unshelfBook(sciFiShelf, book) {
//   for (var i = 0; i < sciFiShelf.length; i++) {
//     if (sciFiShelf[i].title == book); {
//       sciFiShelf.splice(i, 1)
//     }
//   }
// }


 //  tried to indexOf, but it would not pull the index
 //  var index = (shelf.indexOf)
 // for (var i = 0; i <= shelf.length; i++) {
 //   shelf.splice(i,1)
 //  }
 //  console.log(index)




module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
