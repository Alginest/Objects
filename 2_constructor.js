// Constructor

function Book (title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} was writen by ${this.author} in ${this.year}`;
    }
}


// Instatiete an Object
const book1 = new Book('Book1', 'John Doe', 2013);
const book2 = new Book('Book2', 'Jane Doe', 2016);


console.log(book1.getSummary());