# TypeScript Basics: Type Inference and Enums

Welcome to this blog post where we’ll explore two important concepts in TypeScript: **Type Inference** and **Enums**. These features are helpful for writing clean, organized, and easy-to-maintain TypeScript code.

---

## 1. **Type Inference in TypeScript: What It Is and Why It’s Helpful**

When using TypeScript, one of the great features is **type inference**. This means that TypeScript can automatically guess the type of a variable based on the value you assign to it. You don’t always have to tell TypeScript the type explicitly — it can figure it out for you!

### **How Type Inference Works**

When you give a value to a variable, TypeScript looks at that value and decides what type it is. Here are some simple examples:

```typescript
let age = 25; // TypeScript knows this is a 'number'
let name = "John"; // TypeScript knows this is a 'string'

function greet() {
  return "Hello, world!"; // TypeScript knows the return type is 'string'
}
```

* `age` is a `number` because we gave it the value `25`.
* `name` is a `string` because we gave it the value `"John"`.
* The function `greet` returns a string, so TypeScript automatically knows that the return type is `string`.

### **Why Type Inference is Helpful**

1. **Less Typing**: You don't need to tell TypeScript the type of every variable. It figures it out for you.
2. **Catches Mistakes Early**: TypeScript helps prevent mistakes by checking if the code is correct when you write it.
3. **Faster Development**: You don’t have to spend time writing types, making coding faster.

### **A More Complex Example**

```typescript
function calculateDiscount(price: number, discount: number) {
  return price - price * (discount / 100); // TypeScript knows this is a 'number'
}

let total = calculateDiscount(100, 15); // The return value is 'number'
```

In this example, TypeScript knows that the `calculateDiscount` function will return a `number` because both `price` and `discount` are numbers. This is how type inference works.

---

## 2. **Enums in TypeScript: What They Are and How to Use Them**

In TypeScript, **enums** are a way to give friendly names to a set of related values. Instead of using raw numbers or strings, you can use an enum to represent values like the days of the week, months, or other similar lists. This makes your code much easier to understand!

### **Numeric Enums**

By default, TypeScript assigns numeric values to enum members starting from `0`. However, you can manually set these values if needed.

```typescript
enum Days {
  Monday,    // 0
  Tuesday,   // 1
  Wednesday, // 2
  Thursday,  // 3
  Friday,    // 4
  Saturday,  // 5
  Sunday     // 6
}

let today: Days = Days.Wednesday;
console.log(today); // Output: 2 (because Wednesday is the third item)
```

Here, the `Days` enum is created with default numeric values. `Monday` starts at `0`, `Tuesday` is `1`, and so on.

You can also manually set the values for each member:

```typescript
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
```

### **String Enums**

You can also use **string enums** in TypeScript, where each value is a string instead of a number.

```typescript
enum Response {
  Success = "SUCCESS",
  Error = "ERROR",
  NotFound = "NOT_FOUND"
}

let serverResponse: Response = Response.Success;
console.log(serverResponse); // Output: "SUCCESS"
```

Here, the `Response` enum uses strings like `"SUCCESS"`, `"ERROR"`, and `"NOT_FOUND"` to represent different states.

### **Why Use Enums?**

1. **Code Clarity**: Enums give names to values, making the code easier to understand.
2. **No More Magic Numbers**: Instead of using random numbers or strings in your code, enums provide clear, meaningful names.
3. **Easier to Maintain**: If you need to change the values of the enum, you can do it in one place, and it updates everywhere in your code.

### **Example: Using Enums in Functions**

```typescript
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

handleRequest(Status.Approved);  // Output: Request has been approved.
```

In this example, the `Status` enum is used to handle different states of a request. Using enums like this makes the code easier to follow because the values are descriptive.

---

## **Conclusion**

In this blog post, we explored two powerful features of TypeScript:

1. **Type Inference**: TypeScript can automatically guess the type of a variable, which makes your code shorter and less error-prone.
2. **Enums**: Enums let you group related values together with meaningful names, making your code easier to understand and maintain.

Understanding these features will help you write better, safer, and more organized TypeScript code. As you continue learning and working with TypeScript, these concepts will be incredibly useful.
