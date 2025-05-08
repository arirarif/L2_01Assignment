// 1. String Formatter Function
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

console.log(formatString("Hello"));
console.log(formatString("Hello world", true));
console.log(formatString("Hello world", false));

//   2. Filter Items by Rating

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4.0);
}

const book = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(book));

// 3. Concatenate Multiple Arrays
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, array) => acc.concat(array), []);
}

console.log(concatenateArrays(["a", "b"], ["c", "d"], ["e", "f"])); // Output: [a, b, c, d, e, f]
console.log(concatenateArrays([1, 2], [3, 4], [5, 6])); // Output: [1, 2, 3, 4, 5, 6]

//   4. Vehicle and Car Classes
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  // Constructor to initialize make, year, and model
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

// Example usage:
const myCar = new Car("Toyota", 2020, "Corolla");

console.log(myCar.getInfo());
console.log(myCar.getModel());

//   5. Process String or Number
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

console.log(processValue("hello"));
console.log(processValue(10));

// 6. Find the Most Expensive Product
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }

  return products.reduce((maxProduct, currentProduct) => {
    return currentProduct.price > maxProduct.price
      ? currentProduct
      : maxProduct;
  });
}

// Example usage:
const products: Product[] = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

console.log(getMostExpensiveProduct(products));

// 7. Day Type Checker with Enum
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}

// Example usage:
console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));

//   8. Async Function to Return Square

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject(new Error("Negative number not allowed"));
    } else {
      setTimeout(() => {
        resolve(n * n);
      }, 1000);
    }
  });
}

squareAsync(4).then(console.log); // Output after 1 second: 16
squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
