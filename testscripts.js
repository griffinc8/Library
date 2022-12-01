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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "grid";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}