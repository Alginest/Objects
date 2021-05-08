class  Book {
    constructor (title, author, year){
         this.title = title;
         this.author = author;
         this.year = year;
    }

    getSummary (){
        return `${this.title} was writen by ${this.author} in ${this.year}`;
    }
    
    getAge (){
        const years = new Date().getFullYear() - this.year;
         return `${this.title} is ${years} years old`
    }
    revise (newYear){
      this.year = newYear;
      this.revised = true;
    }

    static topBookStore(){
        return 'Barnes & Noble'
    }
}

// Instatient a object

const book1 = new Book('Book1', 'John Doe', '2013');

book1.revise('2018');
console.log(book1);
//Runing statics is runn on the actual class

console.log(Book.topBookStore());