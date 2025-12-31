Object Creation: Three Distinct Methods
A. Object Literals (Most Common) Used for creating a single object instance quickly.

```bash

const book = {
  title: "MERN for Beginners",
  price: 25
};
```
B. Constructor Functions (The "Blueprint") Used when you need to create many objects of the same type. It uses the new keyword to create an instance.

```bash

function User(name, email) {
  this.name = name;
  this.email = email;
}
const user1 = new User("Bishap", "bishap@example.com");
```
C. Object.create() (The "Inheritance" Method) This creates a new object and uses an existing object as its prototype (its parent).

```bash

const carPrototype = {
  drive() { console.log("Moving..."); }
};
const myCar = Object.create(carPrototype);
myCar.brand = "Tesla";
// myCar now has access to .drive() through the prototype chain.
```
2. Comparing Constructors vs. Object.create

Constructor Functions: They are like a Factory. When you call new User(), the engine runs a function, creates a this context, and returns an object. It’s best for initializing data (setting names, IDs, etc.).

Object.create(): It is like a Reference Link. It doesn't run a constructor function. It simply creates an empty object and "links" it to a parent. It is the most direct way to handle inheritance in JS without using classes.

1. Working with Properties (Add, Update, Delete)
Dot Notation vs. Bracket Notation

Dot (obj.prop): Clean and standard.

Bracket (obj["prop"]): Required if the property name has spaces, special characters, or is stored in a variable.

```bash

const publisher = { name: "Horizon Mart Press" };

// Adding & Updating
publisher.location = "Kathmandu"; 
publisher["year founded"] = 2023; // Spaces require brackets

// Deleting
delete publisher.location;
```
4. Object Methods and the this Keyword
A method is simply a property that holds a function. The this keyword is a "pointer" to the object currently executing the code.

Method Shorthand (ES6): Instead of writing print: function() {}, we now write print() {}.

```bash

const hotel = {
  name: "Appa Amma Hotel",
  rooms: 20,
  bookRoom() {
    this.rooms -= 1; // 'this' refers to 'hotel'
    console.log(`Room booked at ${this.name}. Left: ${this.rooms}`);
  }
};
hotel.bookRoom();
```

5. Nested Objects & Deep Access
MERN data is rarely flat. We often have objects inside objects.

```bash

const course = {
  title: "MERN Stack",
  details: {
    duration: "3 Months",
    instructor: { name: "Kesara", role: "Lead" }
  }
};

```
// Accessing
console.log(course.details.instructor.name); // "Kesara"

// Safe Access (Optional Chaining)
console.log(course.reviews?.rating); // Returns undefined instead of crashing
6. Iteration: Getting Data Out
You cannot loop through objects with a regular for loop like an array. Use these instead:

for...in: Great for seeing every key in the object.

Object.keys(obj): Converts keys into an array (then you can use .map() or .forEach()).

Object.values(obj): Converts the data/values into an array.

```bash

const stats = { books: 10, authors: 5, publishers: 2 };

for (let key in stats) {
  console.log(`${key}: ${stats[key]}`);
}
```
7. Prototype Chain & Inheritance
JavaScript uses Prototypal Inheritance. If you try to access a property that doesn't exist on an object, JS looks at its "Parent" (Prototype). If it's not there, it looks at the "Grandparent," and so on.

```bash

const human = { eats: true };
const student = Object.create(human);
student.learns = true;

console.log(student.learns); // true (Direct property)
console.log(student.eats);   // true (Found on the Prototype)
```