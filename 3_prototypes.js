// Constructor

function Book (title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Instatiete an Object
const book1 = new Book('Book1', 'John Doe', 2013);
const book2 = new Book('Book2', 'Jane Doe', 2016);


//Prototype
Book.prototype.getSummary = function () {
      return `${this.title} was writen by ${this.author} in ${this.year}`;
}
//Prototype2 get age
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
   return `${this.title} is ${years} years old `
}
//proto 3 revise
 // we made a revise function for the book that takes a new year in and calculates with age function
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}
book2.revise(2020);



console.log(book2.getAge());

