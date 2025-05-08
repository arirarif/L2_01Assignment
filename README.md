<!-- No. 01 -->
1. Type Inference in TypeScript: What It Is and Why It’s Helpful
   When we use TypeScript, it can automatically guess what type a variable is. This is called type inference. You don't always have to tell TypeScript what type a variable is because TypeScript can figure it out by itself based on the value you give it. This helps to make your code cleaner and easier to read!

How Type Inference Works:
When you give a value to a variable, TypeScript looks at it and decides what type it is. Here are some simple examples:

typescript
Copy code
let age = 25; // TypeScript knows this is a 'number'
let name = "John"; // TypeScript knows this is a 'string'

function greet() {
return "Hello, world!"; // TypeScript knows the return type is 'string'
}
age is a number because we gave it the value 25.

name is a string because we gave it the value "John".

The greet function returns a string, so TypeScript automatically knows the return type is string.

Why Type Inference is Helpful:
Less Typing: You don't need to tell TypeScript the type of every variable. It figures it out for you.

Catches Mistakes Early: Even without writing types, TypeScript still helps prevent mistakes. It checks if your code works correctly when you write it.

Faster Development: You don’t have to spend time writing types all the time, making your coding faster.

A More Complex Example:
typescript
Copy code
function calculateDiscount(price: number, discount: number) {
return price - price \* (discount / 100); // TypeScript knows this is a 'number'
}

let total = calculateDiscount(100, 15); // The return value is 'number'
In this example, TypeScript knows that the calculateDiscount function will return a number because both price and discount are numbers. This is type inference at work!

Why Type Inference is So Good:
It makes your code shorter and easier to read.

You don’t have to keep typing the types of variables.

It helps avoid mistakes by making sure that values are the right type.

<!-- No. 02 -->

2. Enums in TypeScript: What They Are and How to Use Them
   In TypeScript, enums are used to give friendly names to a set of related values. Instead of using raw numbers or strings, you can use an enum to represent values like days of the week, months, or any other list of related things. This makes your code easier to understand!

Numeric Enums:
By default, TypeScript assigns numbers to enum values, starting from 0. But you can change these numbers if you want.

typescript
Copy code
enum Days {
Monday, // 0
Tuesday, // 1
Wednesday, // 2
Thursday, // 3
Friday, // 4
Saturday, // 5
Sunday // 6
}

let today: Days = Days.Wednesday;
console.log(today); // Output: 2 (because Wednesday is the third item)
Here, the Days enum is created with default numeric values. Monday starts at 0, Tuesday is 1, and so on.

You can also manually set the number for each day:

typescript
Copy code
enum Days {
Monday = 1,
Tuesday = 2,
Wednesday = 3,
Thursday = 4,
Friday = 5,
Saturday = 6,
Sunday = 7
}

let today: Days = Days.Friday;
console.log(today); // Output: 5 (because we set Friday to 5)
String Enums:
You can also use string enums in TypeScript, where each value is a string instead of a number.

typescript
Copy code
enum Response {
Success = "SUCCESS",
Error = "ERROR",
NotFound = "NOT_FOUND"
}

let serverResponse: Response = Response.Success;
console.log(serverResponse); // Output: "SUCCESS"
In this case, instead of using numbers, we use strings to represent the different responses ("SUCCESS", "ERROR", and "NOT_FOUND").

Why Use Enums?
Code Clarity: Enums give meaningful names to values, so your code is easier to understand.

No More Magic Numbers: Instead of using random numbers or strings in your code, you can use enums with names that explain what they mean.

Easier to Maintain: If you need to change the values of the enum, you can do it in one place, and it will update everywhere in your code.

Example: Using Enums in Functions
typescript
Copy code
enum Status {
Pending = "PENDING",
Approved = "APPROVED",
Rejected = "REJECTED"
}

function handleRequest(status: Status): void {
switch (status) {
case Status.Pending:
console.log("Request is still pending.");
break;
case Status.Approved:
console.log("Request has been approved.");
break;
case Status.Rejected:
console.log("Request has been rejected.");
break;
default:
console.log("Unknown status.");
}
}

handleRequest(Status.Approved); // Output: Request has been approved.
In this example, the Status enum is used to handle different states of a request. It makes the code clearer and easier to follow because the values are descriptive.

Conclusion
In this post, we talked about two helpful features in TypeScript:

Type Inference: TypeScript can guess the type of a variable for you, making your code simpler and less error-prone.

Enums: Enums let you group related values together with meaningful names, so your code is easier to understand and maintain.

These features help you write safer, cleaner, and more organized code in TypeScript. If you're new to TypeScript, understanding these concepts will help you a lot as you continue learning and writing TypeScript code.
