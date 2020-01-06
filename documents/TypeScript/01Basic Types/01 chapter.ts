// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// x = [10, 'hello']; Initialize it incorrectly

console.log(x[0].substring(1)); // OK
// console.log(x[1].substring(1)); // Property 'substring' does not exist on type 'number'

// x[3] = 'world'; // Error, Property '3' does not exist on type '[string, number]'
// console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'

// enum Color {Red, Green, Blue};
// let c: Color = Color.Green;

// enum Color {Red = 1, Green, Blue};
// let c: Color = Color.Green;

// manually set all the values in the enum:
// enum Color {Red = 1, Green = 2, Blue = 4};
// let c: Color = Color.Green;

enum Color {
  Red = 1,
  Green,
  Blue
}

let colorName: string = Color[2];
console.log('colorName', colorName); // Display 'Green' as its value is 2 above

// let notSure: any = 4;
// notSure = 'maybe a string instead';
// notSure = false; // okay, definitely a boolean

let notSure: any = 4;
notSure.ifTtExists(); // okay,ifTiExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists(but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'

let list: any[] = [1, true, 'free'];
list[1] = 100;

function warnUser(): void {
  console.log('this is warning message');
}

let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given

// Function returning never must have unreachable end point
function error(message: string): never {
  throw new Error(message)
}

// Inferred return type is never
function fail() {
  return error('something failed')
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
  while (true) {

  }
}

declare function create(o: object | null): void;
create({ prop: 0 });
create(null);

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
