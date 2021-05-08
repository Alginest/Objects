
function Book (title,author,year) {
    this.title = title;
    this.author = author;
    this.year = year;
}


//Prototype
Book.prototype.getSummary = function () {
      return `${this.title} was writen by ${this.author} in ${this.year}`;
}

// Magazine constructor
function Magazine (title,author,year,month) {
  Book.call(this, title, author, year);
  this.month = month;
  
}
// Inherti Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instatieate magazin object

const mag1 = new Magazine ('Mag1', 'John Doe', '2018', 'Jan');

// Use magazin constructor

Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());