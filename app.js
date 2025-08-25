// بسم الله الرحمن الرحيم

/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                          JavaScript Learning Guide                           ║
║                                                                              ║
║  Author: Mohamed Ahmed                                                       ║
║  Purpose: Complete JavaScript fundamentals with examples                     ║
╚══════════════════════════════════════════════════════════════════════════════╝
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                              📝 BASIC CONSOLE EXAMPLES
// ═══════════════════════════════════════════════════════════════════════════════

/*
console.log("Hello, World!");
var x = "Hello, Mohamed Ahmed";
console.log(x);
console.log(x);
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                         🔸 STRING OPERATIONS & TYPE COERCION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Non-Numeric String Operations
 * العمليات على النصوص غير الرقمية
 */
/*
var x = "hello";

console.log(x + 10);        // "hello10"      → string + number = string (concatenation)
console.log(x - 10);        // NaN            → can't subtract number from non-numeric string
console.log(x * 10);        // NaN            → can't multiply non-numeric string
console.log(x / 10);        // NaN            → can't divide non-numeric string
console.log(x + 10 + 20);   // "hello1020"    → evaluated left to right (string concatenation)
console.log(x + " world");  // "hello world"  → string + string = concatenation
console.log(x * "world");   // NaN            → can't multiply two strings
x++;                        // NaN            → can't increment a non-numeric string
*/

/**
 * Numeric String Operations
 * العمليات على النصوص الرقمية
 */
/*
var y = "10";

console.log(y + 10);        // "1010"         → string + number = string (concatenation)
console.log(y - 10);        // 0              → string is converted to number
console.log(y * 10);        // 100            → implicit conversion to number
console.log(y / 10);        // 1              → implicit conversion to number
console.log(y + 10 + 20);   // "101020"       → left to right: concatenation
console.log(y + " world");  // "10 world"     → string + string
y++;                        // 11             → "10" is converted to number, then incremented
*/

/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                           == vs === COMPARISON                              │
└─────────────────────────────────────────────────────────────────────────────┘

== (Equality Operator - loose equality)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Compares values after converting them to the same type (type coercion)
- يقارن القيم بعد تحويل النوع

Examples:
  '5' == 5           // true
  false == 0         // true
  null == undefined  // true

=== (Strict Equality Operator - strict equality)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Compares both value and type (no type coercion)
- يقارن القيمة والنوع معاً

Examples:
  '5' === 5          // false (string !== number)
  false === 0        // false
  5 === 5            // true

┌─────────────┬─────────────────┬─────────────┬────────────┬───────────────────┐
│   Operator  │ Type Conversion │ Value Check │ Type Check │ Example ('5' vs 5)│
├─────────────┼─────────────────┼─────────────┼────────────┼───────────────────┤
│     ==      │       Yes       │     Yes     │     No     │       true        │
│    ===      │       No        │     Yes     │    Yes     │       false       │
└─────────────┴─────────────────┴─────────────┴────────────┴───────────────────┘

✅ Best Practice: Always use === for comparisons to avoid bugs caused by type coercion
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                             📘 ASSIGNMENT 1 - SECTION 1
//                           Basic Arithmetic Operations
// ═══════════════════════════════════════════════════════════════════════════════

/*
var num1 = 10;
var num2 = 4;

var message = `First number is: ${num1}  \nSecond number is: ${num2}`;
console.log(message);

// Basic arithmetic operations
var sum  = num1 + num2;
var sub  = num1 - num2;
var mult = num1 * num2;
var div  = num1 / num2;
var mod  = num1 % num2;

console.log(`Sum is: ${sum}
Subtraction is: ${sub}
Multiplication is: ${mult}
Division is: ${div}
Modulus is: ${mod}`);

// Write to HTML document (using innerHTML)
var mes = document.getElementById("ass_1");
mes.innerHTML = `First number is: ${num1} <br> Second number is: ${num2}`;

var sol = document.getElementById("sol_ass_1");
sol.innerHTML = `Sum is: ${sum} <br>
Subtraction is: ${sub} <br>
Multiplication is: ${mult} <br>
Division is: ${div} <br>
Modulus is: ${mod}`;
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                          🔍 TYPEOF & DYNAMIC TYPING
// ═══════════════════════════════════════════════════════════════════════════════

/*
var f_name = "Mohamed";    // string
var age    = 20;           // number

console.log(typeof f_name);     // "string"
console.log(typeof age);        // "number"
console.log(typeof 2.23);       // "number"
console.log(typeof true);       // "boolean"
console.log(typeof null);       // "object" → known JS quirk
console.log(typeof undefined);  // "undefined"
console.log(typeof NaN);        // "number" → even though it means "Not a Number"

// JavaScript is dynamically typed
var x = "Ali";      // initially string
x = 30;             // then number
x = "Ahmed";        // back to string
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                           🔤 STRING METHODS & PROPERTIES
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * String Methods Demonstration
 * عرض توضيحي لطرق التعامل مع النصوص
 * Note: A single character is also considered a string in JavaScript
 */
/*
var title = "Hello World";

// ----- Substring Methods -----
var subTitle1 = title.substring(0, 5);   // "Hello" → start index inclusive, end index exclusive
var subTitle2 = title.substring(5);      // " World" → from index 5 to end

console.log(subTitle1 + subTitle2);      // "Hello World" → reconstruct original string

// ----- String Properties & Methods -----
console.log(title.length);               // 11 → total number of characters

console.log(title.toUpperCase());        // "HELLO WORLD" → converts all to uppercase
console.log(title.toLowerCase());        // "hello world" → converts all to lowercase

console.log(title.indexOf("World"));     // 6 → first index where "World" starts
console.log(title.lastIndexOf("o"));     // 7 → last index of the character "o"

console.log(title.includes("Hello"));    // true → checks if "Hello" is in the string
console.log(title.startsWith("Hello"));  // true → checks if string starts with "Hello"
console.log(title.endsWith("World"));    // true → checks if string ends with "World"

console.log(title.replace("World", "Mohamed"));    // "Hello Mohamed" → replaces first "World" with "Mohamed"
console.log(title.replace("o", "a"));              // "Hella World" → replaces first "o" only
console.log(title.replaceAll("o", "a"));           // "Hella Warld" → replaces all occurrences of "o"

console.log(title.charAt(0));            // "H" → character at index 0
console.log(title.charCodeAt(0));        // 72 → ASCII (Unicode) code of "H"

console.log(title[0]);                   // "H" → bracket notation (like arrays)

console.log(title.split(" "));           // ["Hello", "World"] → split string into array using space

console.log(title.trim());               // "Hello World" → removes whitespace from both ends
*/

/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                        IMMUTABLE vs MUTABLE in JavaScript                   │
└─────────────────────────────────────────────────────────────────────────────┘

1️⃣ IMMUTABLE (غير قابل للتغيير):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Data Types: String, Number, Boolean, null, undefined, Symbol, BigInt
- لا يمكن تعديل القيمة نفسها بعد إنشائها
- أي تعديل يرجع نسخة جديدة

📌 Example:
let str = "Hello";
let newStr = str.toUpperCase(); // "HELLO"
console.log(str);      // "Hello"     ← original unchanged
console.log(newStr);   // "HELLO"     ← new copy created

2️⃣ MUTABLE (قابل للتغيير):
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Data Types: Array, Object, Function
- يمكن تعديل القيمة نفسها بعد إنشائها
- أي تعديل يؤثر على نفس الكائن في الذاكرة

📌 Example:
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]  ← original array modified directly

✅ Best Practice:
- استخدم immutable types عشان الكود يبقى آمن وسهل التتبع
- راقب mutable types علشان تتجنب التعديلات غير المتوقعة
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                          📝 ASSIGNMENT 2 - SECTION 2
//                      String Transform + Event Handling
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Method 1: Console Only
 */
/*
var str = "Hello World";
console.log(str);                        // Original
str = str.toUpperCase();
console.log(str);                        // Uppercase
str = str.replace("O", "Y");
console.log(str);                        // Replace
str = str.split('').reverse().join('');
console.log(str);                        // Reversed
*/

/**
 * Method 2: Write to HTML directly
 */
/*
var res = document.getElementById("result");
var docStr = document.getElementById("ass_2").innerHTML;
var upperCase = docStr.toUpperCase();
var replaceO = upperCase.replace("O", "Y");
var reverseStr = replaceO.split('').reverse().join('');
res.innerHTML += `${docStr}<br>${upperCase}<br>${replaceO}<br>${reverseStr}`;
*/

/**
 * Method 3: With a button (onclick in HTML)
 */
/*
function ChangeString() {
  var input = document.getElementById("input");
  var val = input.value;
  var upperCase = val.toUpperCase();
  var replaceO = upperCase.replace("O", "Y");
  var reverseStr = replaceO.split('').reverse().join('');
  res.innerHTML = `${val}<br>${upperCase}<br>${replaceO}<br>${reverseStr}`;
}
*/

/**
 * Method 4: Using addEventListener
 */
/*
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var input = document.getElementById("input");
  var val = input.value;
  var upperCase = val.toUpperCase();
  var replaceO = upperCase.replace("O", "Y");
  var reverseStr = replaceO.split('').reverse().join('');
  var res = document.getElementById("result");
  res.innerHTML = `${val}<br>${upperCase}<br>${replaceO}<br>${reverseStr}`;
});
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                               🔍 TYPE CHECKING & CONVERSION
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * isNaN() → Check if value is NaN (Not a Number)
 */
/*
var num = "10";
console.log(isNaN(num));           // false → "10" can be converted to number (valid numeric string)

console.log(isNaN("Hello"));       // true → "Hello" is not a number and cannot be converted

var num2 = 20;
var result = num2 + num;           // "2010" → string concatenation ("20" + "10")
console.log(isNaN(result));        // false → "2010" can be converted to number (still numeric)

console.log(isNaN("hello" * 10));  // true → "hello" * 10 = NaN → can't multiply string with number
*/

/**
 * Boolean() → Truthy vs Falsy Values "casting"
 */
/*
var x = 0;
var y = 20;

console.log(Boolean(x));           // false → 0 is falsy
console.log(Boolean(y));           // true → any non-zero number is truthy

console.log(Boolean(""));          // false → empty string is falsy
console.log(Boolean("Hello"));     // true → non-empty string is truthy

console.log(Boolean(null));        // false → null is falsy
console.log(Boolean(undefined));   // false → undefined is falsy
console.log(Boolean(NaN));         // false → NaN is falsy

console.log(Boolean([]));          // true → empty array is truthy
console.log(Boolean([1, 2, 3]));   // true → non-empty array is truthy

console.log(Boolean({}));          // true → empty object is truthy
*/

/**
 * Casting between Strings and Numbers
 */
/*
var x = "10";
var y = "20";

// Implicit concatenation (both are strings)
var z = x + y; // "1020"
console.log(z); // Output: "1020"

// Explicit casting to numbers using Number()
var num = Number(x) + Number(y); // 10 + 20 = 30
console.log(num); // Output: 30

// Using parseInt() to convert string to integer
x = parseInt(x); // 10
y = parseInt(y); // 20
console.log(x + y); // Output: 30

// Convert numbers back to strings
x = String(x); // "10"
y = y.toString(); // "20"
console.log(x + y); // Output: "1020" → string concatenation
*/

/**
 * Casting Boolean to Number and String
 */
/*
var a = true;

console.log(Number(a)); // Output: 1 → true is converted to number 1
console.log(String(a)); // Output: "true" → boolean true becomes string "true"
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                                   🎯 SWITCH STATEMENTS
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Switch with string value
 */
/*
var health = "weak";

switch (health) {
  case "strong":
    console.log("You are healthy!");
    break;

  case "weak":
    console.log("You need to rest.");
    break;

  default:
    console.log("Unknown health status.");
    break;
}
*/

/**
 * Switch with range conditions using switch(true)
 */
/*
var age = 25;

switch (true) {
  case age >= 60:
    console.log("OLD");
    break;

  case age >= 30 && age < 60:
    console.log("MIDDLE-AGED");
    break;

  case age >= 18 && age < 30:
    console.log("YOUNG ADULT");
    break;

  default:
    console.log("CHILD");
    break;
}
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                                  🧑‍🎓 ARRAYS IN JAVASCRIPT
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Array Basics and Methods
 */
/*
var students = ["Mohamed", "Ahmed", "Ali", "Hussein"];

// Display array content in the browser
document.getElementById("students").innerHTML = students;

// Type of array (in JS, arrays are objects)
console.log(typeof students);       // Output: "object"

// Print the whole array
console.log(students);              // Output: ["Mohamed", "Ahmed", "Ali", "Hussein"]

// Get array length (number of elements)
console.log(students.length);       // Output: 4

// Access element by index (starts from 0)
console.log(students[1]);           // Output: "Ahmed"

// Add element at the end using push()
students.push("Hussein");
console.log(students);              // Output: ["Mohamed", "Ahmed", "Ali", "Hussein", "Hussein"]

// Remove last element using pop()
students.pop();
console.log(students);              // Output: ["Mohamed", "Ahmed", "Ali", "Hussein"]
*/

/**
 * Using splice() in JavaScript
 */
/*
// 🔻 Remove 1 element starting from index 2
students.splice(2, 1); // Removes "Ali"
console.log(students); // ["Mohamed", "Ahmed", "Hussein"]

// 🔄 Replace 1 element at index 2 with "Ali"
students.splice(2, 1, "Ali");
console.log(students); // ["Mohamed", "Ahmed", "Ali"]

// 🔄 Replace 2 elements starting from index 1 with "Hussein"
students.splice(1, 2, "Hussein");
console.log(students); // ["Mohamed", "Hussein"]

// ➕ Insert "Ahmed" and "Ali" at index 1 without removing anything
students.splice(1, 0, "Ahmed", "Ali");
console.log(students); // ["Mohamed", "Ahmed", "Ali", "Hussein"]

var removed = students.splice(1, 2); // Remove 2 elements starting from index 1

console.log(students); // ["Mohamed", "Hussein"]
console.log(removed);  // ["Ahmed", "Ali"] ← RETURNED array

var arr = ["a", "b", "c"];
var removed = arr.splice(1, 0, "x"); // insert "x" at index 1

console.log(arr);     // ["a", "x", "b", "c"]
console.log(removed); // [] ← nothing removed
*/

/**
 * Array Checks & Lookups
 */
/*
var arr = [10, 20, 30, 40, 50, 60, 70];

console.log(Array.isArray(arr));   // true → confirms arr is an array
console.log(arr.includes(10));     // true → 10 exists in the array
console.log(arr.indexOf(40));      // 3 → index of element 40
console.log(arr.indexOf(41));      // -1 → 41 not found in array

console.log(arr);                  // [10, 20, 30, 40, 50, 60, 70]

arr.shift();                       // Removes first element (10)
console.log(arr);                  // [20, 30, 40, 50, 60, 70]

arr.unshift(10);                   // Adds 10 at the beginning
console.log(arr);                  // [10, 20, 30, 40, 50, 60, 70]
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                             🎓 ASSIGNMENT 4 - SECTION 3
//                              Array Management Demo
// ═══════════════════════════════════════════════════════════════════════════════

/*
var students = [];
var submitBtn = document.getElementById("submitBtn");
var result = document.getElementById("students");

// 👉 Add student on Submit
submitBtn.addEventListener("click", function (e) {
  var stdName = document.getElementById("name-input").value;
  students.push(stdName);
  result.innerHTML = students.join(" - ");
  document.getElementById("name-input").value = "";
});

// ❌ Remove last student on Delete
var deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", function (e) {
  students.pop();
  result.innerHTML = students;
});
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                               🔁 LOOPS IN JAVASCRIPT
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Assignment: Multiplication Table (10x)
 */
/*
var table = document.getElementById("mul-table");
for (var i = 0; i <= 30; i++) {
  var mult = i * 10;
  table.innerHTML += `<h3>10 x ${i} = ${mult}</h3>`;
}
*/

/**
 * Loop through string characters
 */
/*
var myName = "Mohamed Ahmed";

// Traditional for loop
for (var i = 0; i < myName.length; i++) {
  console.log(myName[i]);
}

console.log("================");

// for-in → loops over indexes
for (var i in myName) {
  console.log(myName[i]);
}
*/

/**
 * Loop through array
 */
/*
var arr = [1, 2, "Mohamed", 2004, true];

console.log("================");

// for-in → indexes
for (var i in arr) {
  console.log(arr[i]);
}

console.log("================");

// for-of → values directly
for (var value of arr) {
  console.log(value);
}
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                           🎓 ASSIGNMENT - LOOPS_2 - SECTION 4
//                              Remove Vowels from String
// ═══════════════════════════════════════════════════════════════════════════════

/*
var submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", function (e) {
  var word = document.getElementById("input").value;
  var result = document.getElementById("result");

  // Solution 1: Direct character checking
  for (var i of word) {
    if (i == 'a' || i == 'A' || i == 'e' || i == 'E' || i == 'i' || i == 'I' || i == 'o' || i == 'O' || i == 'u' || i == 'U') {
      continue;
    }
    result.innerHTML += `<h2>${i}</h2>`;
  }

  // Solution 2: Using array of vowels
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var letter of word) {
    if (vowels.includes(letter.toLowerCase())) {
      continue;
    }
    result.innerHTML += `<h2>${letter}</h2>`;
  }

  document.getElementById("input").value = "";
  result.innerHTML += `<br>`;
});
*/

/**
 * Loop with Array – Filter by "Eng." prefix
 */
/*
var arr = ["Eng.Mohamed", "Ahmed", "Eng.Ali", "Hussein"];
var result = document.getElementById("result");

for (var i = 0; i < arr.length; i++) {
  if (arr[i].includes("Eng.")) {
    result.innerHTML += `${arr[i]}<br>`;
  }
}
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                           🎓 ASSIGNMENT - ARRAYS & LOOPS - SECTION 5
//                                Student Search System
// ═══════════════════════════════════════════════════════════════════════════════

/*
var students = ["Mohamed", "Ahmed", "Ali", "Elwani", "Yousry", "Selim", "Mohanad"];

// Display all student names & convert to lowercase
for (var i = 0; i < students.length; i++) {
  document.getElementById("students").innerHTML += `- ${students[i]} - `;
  students[i] = students[i].toLowerCase(); // convert for case-insensitive search
}

// Handle Search Button Click
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var stdName = document.getElementById("input").value;
  var lowerCaseName = stdName.toLowerCase();
  var result = document.getElementById("result");

  // Solution 1: Using includes method
  if (students.includes(lowerCaseName)) {
    result.innerHTML = `The name "<strong>${stdName}</strong>" is <span style="color:green;">in</span> the school.`;
  } else {
    result.innerHTML = `The name "<strong>${stdName}</strong>" is <span style="color:red;">not</span> in the school.`;
  }

  // Solution 2: Using for-of loop with flag
  var flag = false;
  for (var student of students) {
    if (lowerCaseName == student) {
      flag = true;
      break;
    }
  }

  // Solution 3: Using while loop
  var i = 0;
  while (i < students.length) {
    if (lowerCaseName == students[i]) {
      flag = true;
      break;
    }
    i++;
  }

  if (flag) {
    result.innerHTML = `The name "<strong>${stdName}</strong>" is <span style="color:green;">in</span> the school.`;
  } else {
    result.innerHTML = `The name "<strong>${stdName}</strong>" is <span style="color:red;">not</span> in the school.`;
  }

  document.getElementById("input").value = "";
});
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                               📚 2D ARRAYS & NESTED LOOPS
// ═══════════════════════════════════════════════════════════════════════════════

/*
var students = [
  ["Mohamed", "Ahmed", "Ali"],
  ["Yousry", "Elwani", "Selim"],
  ["Mohaned"]
];

var result = document.getElementById("array2d");

console.log(students);                  // طباعة كامل المصفوفة
console.log(students.length);          // عدد الصفوف: 3
console.log(students[1]);              // الصف الثاني: ["Yousry", "Elwani", "Selim"]
console.log(students[1][2] + ", " + students[2][0]); // Selim, Mohaned

// عرض كل صف وكل طالب فيه باستخدام الحلقات المتداخلة
for (var i = 0; i < students.length; i++) {
  result.innerHTML += `<br>Class #${i + 1}: <br>`;

  for (var j = 0; j < students[i].length; j++) {
    result.innerHTML += ` _${students[i][j]} <br>`;
  }
}
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                          📘 ASSIGNMENT - NESTED LOOPS - SECTION 6
//                              Complete Multiplication Tables
// ═══════════════════════════════════════════════════════════════════════════════

/*
var table = document.getElementById("table");

for (var i = 1; i <= 12; i++) {
  table.innerHTML += `<h2 style="text-align:center; color:darkblue;">Multiplication Table of ${i}</h2>`;

  for (var j = 1; j <= 12; j++) {
    table.innerHTML += `
      <p style="text-align:center; font-size:18px;">
        ${i} x ${j} = ${i * j}
      </p>`;
  }

  table.innerHTML += `<hr style="margin:20px 0;">`;
}
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                                📘 FUNCTIONS IN JAVASCRIPT
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Function Examples - Basic to Advanced
 */
/*
// 🔹 Function without parameters
function PrintHello() {
  // Option 1: Print directly
  // console.log("Hello");

  // Option 2: Return the value
  return "Hello";
}

// Usage examples:
// PrintHello();              // Calls the function and does nothing with return
// console.log(PrintHello()); // Outputs: Hello

// 🔹 Function with parameters
function PrintHelloPlusName(name) {
  console.log("Hello " + name);
}

// Usage examples:
// PrintHelloPlusName("Mohamed"); // Outputs: Hello Mohamed
// PrintHelloPlusName("Ahmed");   // Outputs: Hello Ahmed

// 🔹 Function with two parameters and return
function sum(num1, num2) {
  return num1 + num2;
}

// Usage example:
// console.log(sum(10, 22)); // Outputs: 32

// 🔹 Function with default parameters
function mul(num1 = 10, num2 = 20) {
  return num1 * num2;
}

// Example usage:
console.log(mul(5)); // Outputs: 100 (5 * 20)
*/

/**
 * Assignment: Reverse Array Function
 */
/*
function ReverseArray(arr = [1, 2, 3, 4, 5]) {
  var newArr = [];

  // 🔁 Loop through the array from the end to the beginning
  for (var i = arr.length - 1; i >= 0; i--) {
    // Option 1: Add using index
    // newArr[arr.length - i - 1] = arr[i];

    // Option 2: Use push() to append elements
    newArr.push(arr[i]);
  }

  return newArr;
}

// ✅ Example usage:
console.log(ReverseArray([1, true, "Mohamed", 4, 5, 6]));
// Output: [6, 5, 4, "Mohamed", true, 1]
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                          🏷️ FUNCTIONS & ANONYMOUS FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

/*
// 📌 Normal named function
function test() {
  console.log("Hello");
}

// تخزين الدالة في متغير واستدعائها
var x = test;
console.log(typeof x); // function
x(); // Hello

// 📌 Anonymous function assigned to a variable
var y = function () {
  console.log("HI");
};
y(); // HI

// 📌 خصائص الدوال
console.log(x.name);    // "test"  -> اسم الدالة الأصلية
console.log(y.name);    // "y"     -> اسم المتغير اللي ماسك الدالة
console.log(y.length);  // 0       -> عدد الباراميترات

// 📌 Higher-Order Function (دالة تستقبل دالة أخرى كـ باراميتر)
function callAnotherFunction(functionToCall) {
  console.log("Getting ready to call another function");
  functionToCall(); // استدعاء الدالة الممررة
  console.log("The function is called successfully");
}

// تمرير الدالة y
callAnotherFunction(y);

// 📌 Anonymous function مباشرة كـ باراميتر
callAnotherFunction(function () {
  console.log("Hello");
});

// 📌 Arrow function
var arrow = () => {
  console.log("Arrow function");
};
arrow();
*/

/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                           FIRST-CLASS FUNCTIONS                             │
└─────────────────────────────────────────────────────────────────────────────┘

في JavaScript، الدوال تُعامل كقيم (Values) ويمكن:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ تخزينها في متغيرات
✅ تمريرها كـ باراميتر لدوال أخرى
✅ إرجاعها من دوال أخرى
✅ تخزينها داخل Array أو Object
✅ امتلاكها خصائص (Properties) و Methods
*/

/**
 * Callback Functions Examples
 */
/*
// setTimeout() - تنفيذ الدالة مرة واحدة بعد وقت معين (ms)
setTimeout(function () {
  console.log("Hello");
}, 3000);

// setInterval() - تكرار تنفيذ الدالة كل فترة زمنية ثابتة (ms)
setInterval(function () {
  console.log("Hello Mohamed Ahmed");
}, 3000);
*/

/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                             SCOPE & VARIABLE DECLARATIONS                   │
└─────────────────────────────────────────────────────────────────────────────┘

SCOPE TYPES:
━━━━━━━━━━━━
• Global scope: متغيرات متاحة في كل مكان
• Function scope: المتغيرات داخل دالة متاحة فقط بداخلها
• Block scope: المتغيرات المعلنة بـ let أو const داخل {} متاحة فقط بداخل البلوك

VARIABLE DECLARATIONS:
━━━━━━━━━━━━━━━━━━━━━━━━

┌─────────┬─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│ Keyword │     Scope       │  Re-declaration │   Reassignment  │    Hoisting     │
├─────────┼─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│   var   │ Function/Global │       Yes       │       Yes       │ Yes (undefined) │
│   let   │     Block       │       No        │       Yes       │ Yes (unusable)  │
│  const  │     Block       │       No        │       No        │ Yes (unusable)  │
└─────────┴─────────────────┴─────────────────┴─────────────────┴─────────────────┘

✅ Best Practice:
- استخدم const للقيم الثابتة
- استخدم let للقيم القابلة للتغيير
- تجنب var إلا إذا كنت تحتاج سلوكه القديم
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                            📘 ARRAY ITERATION METHODS
// ═══════════════════════════════════════════════════════════════════════════════

/*

1️⃣ forEach:
━━━━━━━━━━━━
- ينفذ دالة على كل عنصر في المصفوفة
- لا يُرجع مصفوفة جديدة
- يُستخدم أساساً للتأثيرات الجانبية مثل الطباعة

2️⃣ map:
━━━━━━━━
- يحوّل كل عنصر ويُرجع مصفوفة جديدة بالقيم المحولة
- المصفوفة الأصلية تبقى بدون تغيير

3️⃣ filter:
━━━━━━━━━━━
- يختار العناصر التي تحقق شرطاً معيناً
- يُرجع مصفوفة جديدة تحتوي فقط على العناصر التي اجتازت الاختبار

4️⃣ reduce:
━━━━━━━━━━━
- يقلل كل العناصر إلى قيمة واحدة باستخدام دالة
- يمكن استخدامه للمجموع أو الضرب أو أي نوع من التراكم
- يأخذ قيمة ابتدائية كمعامل ثان
*/

/*
var arr = [10, 20, 30, 40, 50];

// ========== forEach ==========
console.log("Using forEach:");

// Normal function
arr.forEach(function (e) {
  e *= 10;
  console.log(e);
});

// Arrow function
arr.forEach((e) => {
  e *= 10;
  console.log(e);
});

console.log(arr); // [10, 20, 30, 40, 50] → original array remains unchanged

// ========== map ==========
console.log("Using map:");

// Normal function
let mapped = arr.map(function (e) {
  return e * 10;
});

// Arrow function
let mapped = arr.map((e) => e * 10);

console.log(mapped); // [100, 200, 300, 400, 500]

// ========== filter ==========
console.log("Using filter:");

// Normal function
let filtered = arr.filter(function (e) {
  return e > 20;
});

// Arrow function
let filtered = arr.filter((e) => e > 20);

console.log(filtered); // [30, 40, 50]

// ========== reduce ==========
console.log("Using reduce:");

// Normal function
let reduced = arr.reduce(function (acc, e) {
  return acc + e;
}, 0) / arr.length;

// Arrow function
let reduced = arr.reduce((acc, e) => acc + e, 0) / arr.length;

console.log(reduced); // 30 → average of all elements
*/

/**
 * Assignment: Sum and Count Function
 */
/*
function sumition(arr) {
  let total = arr.reduce((acc, e) => acc + e, 0);
  return [total, arr.length];
}
console.log(sumition([1, 2, 3, 4, 5])); // [15, 5]
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                                  📦 OBJECTS IN JAVASCRIPT
// ═══════════════════════════════════════════════════════════════════════════════

/**
 * Single Object Example
 */
/*
let student = {
  firstName: "Mohamed",
  lastName: "Ali",
  age: 21,
  id: 2023183,

  // Normal function inside object
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  }
};

console.log(student);
console.log(student.firstName); // Mohamed

// Another way (outside the object)
// function printFullName(st) {
//   console.log(st.firstName + " " + st.lastName);
// }
// printFullName(student); // Mohamed Ali

student.printFullName();

// Update a value
student.age = 22;
console.log(student.age); // 22

// Add new key
student.grade = "B";
console.log(student);
console.log(student.grade); // B
*/

/**
 * Array of Objects
 */
/*
let students = [
  {
    firstName: "Mohamed",
    lastName: "Ali",
    age: 21,
    id: 2023182,
    printFullName: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  },
  {
    firstName: "Mohamed",
    lastName: "Elwani",
    age: 21,
    id: 2023183,
    printFullName: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  },
  {
    firstName: "Ali",
    lastName: "Mohamed",
    age: 21,
    id: 2023184,
    printFullName: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  }
];

console.log(students);

// Loop through objects
for (let i = 0; i < students.length; i++) {
  console.log("Student number " + (i + 1));
  students[i].printFullName();
}
*/

/*
┌─────────────────────────────────────────────────────────────────────────────┐
│                              NOTE ABOUT OBJECTS                             │
└─────────────────────────────────────────────────────────────────────────────┘

في JavaScript، تقريباً "كل شيء" هو كائن:

✅ Objects are objects          ✅ Functions are objects
✅ Maths are objects           ✅ Arrays are objects
✅ Dates are objects           ✅ Maps are objects
✅ Sets are objects

كل قيم JavaScript، ما عدا البدائيات (primitives)، هي كائنات.

Example:
let arr = [1, 2, 3];
console.log(typeof(arr)); // "object"
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                         🎓 ASSIGNMENT - OBJECTS - SECTION 7
//                             Student Management System
// ═══════════════════════════════════════════════════════════════════════════════

/*
let studentTable = document.querySelector(".studentTable");
let students = [];

let studentBtn = document.querySelector(".btn");
studentBtn.addEventListener("click", () => {
  let fName = document.querySelector(".firstName").value;
  let sName = document.querySelector(".secondName").value;
  let age = document.querySelector(".age").value;
  let id = document.querySelector(".id").value;

  addStudent(fName, sName, age, id);

  studentTable.innerHTML += `
    <tr>
      <td>${students[students.length - 1].printFullName()}</td>
      <td>${students[students.length - 1].age}</td>
      <td>${students[students.length - 1].id}</td>
    </tr>
  `;

  // Clear input fields
  document.querySelector(".firstName").value = "";
  document.querySelector(".secondName").value = "";
  document.querySelector(".age").value = "";
  document.querySelector(".id").value = "";
});

function addStudent(first, second, age, id) {
  let student = {
    firstName: first,
    secondName: second,
    age: age,
    id: id,

    printFullName: function () {
      return this.firstName + " " + this.secondName;
    }
  };
  students.push(student);
}
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                        📦 NESTED OBJECTS & DESTRUCTURING ASSIGNMENT
// ═══════════════════════════════════════════════════════════════════════════════

/*
let student = {
  firstName: "Mohamed",
  lastName: "Ali",
  age: 21,
  id: 2023183,
  address: {
    city: "Cairo",
    street: "El-Mohandessin",
    zipCode: "12345"
  },

  // Nested array of objects
  courses: [{
    name: "Math",
    grade: "A"
  }, {
    name: "Physics",
    grade: "B"
  }],

  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },

  printAddress: function () {
    console.log(`City: ${this.address.city}, Street: ${this.address.street}, Zip Code: ${this.address.zipCode}`);
  }
};

// Accessing nested object properties
console.log(student.address.city); // Cairo
student.printAddress(); // City: Cairo, Street: El-Mohandessin, Zip Code: 12345
console.log(student.courses[0].name); // Math

// Accessing nested object properties using destructuring
let { address: { city, street, zipCode } } = student;
console.log(city); // Cairo
console.log(street); // El-Mohandessin

let { firstName, lastName } = student;
console.log(firstName); // Mohamed
console.log(lastName); // Ali

// Destructuring nested array of objects
let [firstCourse, secondCourse] = student.courses;
console.log(firstCourse.name); // Math
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                        📚 PASS BY VALUE VS PASS BY REFERENCE
// ═══════════════════════════════════════════════════════════════════════════════

/*

1️⃣ CALL BY VALUE (تمرير بالقيمة):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Data Types: number, string, boolean, null, undefined, symbol, bigint

ماذا يعني؟
- عندما تمرر نوع بيانات بدائي لدالة، JavaScript يعمل نسخة من القيمة
- أي تغييرات داخل الدالة لا تؤثر على المتغير الأصلي

Example 1:
let num1 = 10;
let num2 = num1; // نسخ القيمة
num1 = 20; // تغيير المتغير الأصلي
console.log(num1); // Output: 20 (القيمة الأصلية تغيرت)
console.log(num2); // Output: 10 (النسخة بقيت بدون تغيير)

Example 2:
function modifying(x) {
  x += 10;
  console.log(`Inside function: ${x}`); // Output: Inside function: 15
}

let x = 5;
modifying(x);
console.log(x); // Output: 5 (القيمة الأصلية بقيت بدون تغيير)

2️⃣ CALL BY REFERENCE (تمرير بالمرجع):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Data Types: Object, Array, Function

ماذا يعني؟
- عندما تمرر كائن لدالة، JavaScript يمرر مرجع لموقع الكائن في الذاكرة
- الدالة يمكنها تعديل محتويات الكائن، وهذه التغييرات ستكون مرئية خارج الدالة

Example 1:
let arr1 = [1, 2, 3];
let arr2 = arr1; // نسخ المرجع
arr1.push(4); // تعديل المصفوفة الأصلية
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4] (النسخة تعكس التغيير)

Example 2:
function modifyingObject(obj) {
  obj.name = "Ahmed"; // تعديل الكائن
  console.log(`Inside function: ${obj.name}`); // Output: Inside function: Ahmed
}

let student = {
  name: "Mohamed"
};
modifyingObject(student);
console.log(student.name); // Output: Ahmed (الكائن الأصلي تم تعديله)

⚠️ IMPORTANT NOTE:
تقنياً، في JavaScript:
• البدائيات → تُمرر بالقيمة
• الكائنات والمصفوفات → المرجع (عنوان الذاكرة) يُمرر بالقيمة

هذا يعني إذا أعدت تخصيص الكائن داخل الدالة، المرجع الخارجي لن يتغير:

function reassign(obj) {
  obj = { name: "Ali" }; // إعادة تخصيص الكائن
  console.log(`Inside function: ${obj.name}`); // Output: Inside function: Ali
}

reassign(student);
console.log(student.name); // Output: Ahmed (الكائن الأصلي بقي بدون تغيير)
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                               🌐 DOM - DOCUMENT OBJECT MODEL
// ═══════════════════════════════════════════════════════════════════════════════

/*

📋 What is DOM?
━━━━━━━━━━━━━━━━
• عندما يتم تحميل صفحة ويب، المتصفح ينشئ Document Object Model للصفحة
• نموذج HTML DOM يتم بناؤه كشجرة من الكائنات
• مع نموذج الكائن، JavaScript يحصل على كل القوة التي يحتاجها لإنشاء HTML ديناميكي

🔧 DOM Features:
━━━━━━━━━━━━━━━━━
• في DOM، كل عناصر HTML تُعرّف ككائنات
• HTML DOM methods هي إجراءات يمكن تنفيذها (على عناصر HTML) مثل: getElementById()
• HTML DOM properties هي قيم (لعناصر HTML) يمكن تعيينها أو تغييرها مثل: innerHTML

🎯 DOM Capabilities:
━━━━━━━━━━━━━━━━━━━
✅ JavaScript can change all HTML elements in the page
✅ JavaScript can change all HTML attributes in the page
✅ JavaScript can change all CSS styles in the page
✅ JavaScript can remove existing HTML elements and attributes
✅ JavaScript can add new HTML elements and attributes
✅ JavaScript can react to all existing HTML events in the page
✅ JavaScript can create new HTML events in the page

📚 Common DOM Methods/Properties:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• document.getElementById(id)           - العثور على عنصر بواسطة id
• document.getElementsByTagName(name)   - العثور على عناصر بواسطة tag name
• document.getElementsByClassName(name) - العثور على عناصر بواسطة class name
• document.querySelector(selector)      - العثور على أول عنصر يطابق CSS selector
• document.createElement(element)       - إنشاء عنصر HTML
• element.innerHTML = content          - تغيير المحتوى الداخلي لعنصر
• element.style.property = value       - تغيير style لعنصر
• element.setAttribute(attr, value)    - تعيين attribute لعنصر
• element.getAttribute(attr)           - الحصول على قيمة attribute
• element.remove()                     - إزالة عنصر من DOM
• element.removeChild(child)        - إزالة عنصر فرعي
• element.appendChild(child)            - إضافة عنصر فرعي
• element.addEventListener(event, function) - إضافة event listener
*/

// ═══════════════════════════════════════════════════════════════════════════════
//                   📝 Example on DOM Manipulation – Section 8
// ═══════════════════════════════════════════════════════════════════════════════
// If I want to add a new <li> inside <ul>

/* // =====================
// 1) Using innerHTML
// =====================
let ul = document.getElementById("ul");
ul.innerHTML += "<li>Hussein</li>";

// =====================
// 2) Using DOM Nodes
// =====================
let li = document.createElement("li");

// Method 1: Direct innerHTML
// li.innerHTML = "Mohamed";

// Method 2: Using text node (Recommended)
let text = document.createTextNode("Mohamed");
li.appendChild(text);    // add text into li
ul.appendChild(li);      // add li into ul

// (optional) Removing the text from li
// li.removeChild(text);
 */

// ══════════════════════════════════════════════════════════════════════════
//                           📝 Final Assignment
// ══════════════════════════════════════════════════════════════════════════
/* 
// Get elements
let inputRes = document.getElementById("input-result");
let message = document.getElementById("message");
let sendBtn = document.getElementById("send-btn");
let secondRes = document.getElementById("second-section");

// ──────────────────────────────────────────────
// Update input result in real-time
// ──────────────────────────────────────────────
function nameChanged(input) {
  let inputVal = input.value;
  inputRes.innerHTML = inputVal;
}

// ──────────────────────────────────────────────
// Handle Send Button Click
// ──────────────────────────────────────────────
sendBtn.addEventListener("click", () => {
  let inputVal = document.getElementById("input").value;

  if (inputVal !== "") {
    // Hide initial message
    message.style.display = "none";

    // Create new element
    let resultNode = document.createElement("h1");
    resultNode.style.margin = 0;
    resultNode.textContent = inputVal;

    // Add hover effects
    resultNode.addEventListener("mouseenter", function () {
      this.style.backgroundColor = "green";
    });
    resultNode.addEventListener("mouseout", function () {
      this.style.backgroundColor = "white";
    });

    // Append to second section
    secondRes.appendChild(resultNode);
  }
});

// ──────────────────────────────────────────────
// Hover effect for default message
// ──────────────────────────────────────────────
message.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "red";
});
message.addEventListener("mouseout", function () {
  this.style.backgroundColor = "white";
});

 */
/*
╔══════════════════════════════════════════════════════════════════════════════╗
║                                END OF FILE                                   ║
║                                                                              ║
║  This comprehensive JavaScript guide covers:                                 ║
║  • Basic syntax and data types                                               ║
║  • String operations and methods                                             ║
║  • Arrays and array methods                                                  ║
║  • Loops and control structures                                              ║
║  • Functions and scope                                                       ║
║  • Objects and object-oriented concepts                                      ║
║  • DOM manipulation basics                                                   ║
╚══════════════════════════════════════════════════════════════════════════════╝
*/

