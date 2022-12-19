let myLibrary = [];

function Book(author, title, pages, completed) {
  this.author = author
  this.title = title
  this.pages = pages
  this.completed = completed
}

const hobbit = new Book("Tolkein", "The Hobbit", 300, "Yes")
const pachinko = new Book("Lee", "Pachinko", 300, "yes")


function addBookToLibrary(book) {
  myLibrary.push(book)
}

addBookToLibrary(pachinko)
addBookToLibrary(hobbit)

console.log(myLibrary)

//#region function to create "books"/buttons

const createAdummyBook = function() {
    const container = document.querySelector(".container")
    /* targeted container, now in a variable */
    const button = document.createElement('div')
    button.setAttribute('class', "button")
    
    const content = document.createElement('div')
    content.setAttribute('class', 'content')
    content.textContent = "Hello!"
    
    button.appendChild(content)
    container.appendChild(button)
}

for (let i = 0; i < 15; i++) {
    createAdummyBook()
  }

//#
