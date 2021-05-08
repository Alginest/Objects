class  Book {
    constructor (title, author, year){
         this.title = title;
         this.author = author;
         this.year = year;
    }

    getSummary (){
        return `${this.title} was writen by ${this.author} in ${this.year}`;
    }
}


// Magazin Subclass

class Magazine extends Book {
  constructor (title,author,year,month){
        super(title, author, year);

        this.month = month;
  }
}


const mag1 = new Magazine ('Mag One', 'jane orn', '2013', 'february');
console.log(mag1);