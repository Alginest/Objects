// const s1 = 'Hello'; // Displays string in console.
// console.log(typeof s1);


// const s2 = new String ('Heloo');
// console.log(typeof s2); // Displays a object in the console.


// console.log(window); // its the main thing containing everything that we cann use
// alert(1); example of a window usage.

// console.log(navigator.appVersion); // Gives info on the system browser ect..
// Basicly it comes down that almost everything is a object. methods make things, objects.

// Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function () {
        return `${this.title} was writen by ${this.author} in ${this.year}`;
    }
};

const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function () {
        return `${this.title} was writen by ${this.author} in ${this.year}`;
    }
};

// console.log(book2.getSummary()); // Summary for book two or one
//   console.log(Object.values(book2)); // Using object.values gives us an array of values inside the object.
// console.log(Object.keys(book2)); // Used to get the keys that the object contains

