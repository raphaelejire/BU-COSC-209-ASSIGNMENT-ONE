// Book Class
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    describe() {
        return '"${this.title}" by ${this.author}';
    }
}

const book = new Book("1984", "George Orwell");
console.log(book.describe()); // Output: "1984" by George Orwell