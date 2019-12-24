### introduce
For programs to be useful, we need to be able to work with some of the simplest units of data: numbers, strings, structures, boolean values, and the like. In TypeScript, we support much the same types as you would expect in JavaScript, with a convenient enumeration type thrown in to help things along

<details>
  <summary>translate to chinese</summary>
  
  为了让程序成为有用的，我们需要和一些最简单的数据数据单元：数值，字符串，结构体，布尔值等等一起工作。在`TypeScript`中，我们支持了许多你在`JavaScript`中所期望的相同的类型，并且还有方便的枚举类型以帮助处理问题
</details>

<details>
  <summary>knowledge point</summary>
  
  * [and the like](https://dict.eudic.net/dicts/en/and%20the%20like): 等等，诸如此类
</details>

### Boolean
The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a `boolean` value
```typescript
let isDone: boolean = false;
```

<details>
  <summary>translate to chinese</summary>
  
  最基础的数据类型是简单的`true/false`值，这个值在`JavaScript`和`TypeScript`中叫做`boolean`值
</details>

### Number
As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. In addition to hexadecimal and decimal literals, TypeScript also supports binary and octal literals introduced in ECMAScript 2015.

```typescript
let decimal: number = 6;
let hex: number = 0xf00d; // hex: 十六进制
let binary: number = 0b1010;
let octal: number = 0o744;
```
<details>
  <summary>translate to chinese</summary>
  
  就像在`JavaScript`中一样，所有的数字在`TypeScript`都是浮点值。这些浮点值成为了`number`类型。除了十六进制和十进制字面量外，`TypeScript`还支持在`ECMAScript 2015`里引入的二进制和八进制字面量。
</details>

<details>
  <summary>knowledge point</summary>
  
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-ts-basic-type-introduce-new.png)
  * in addition to: 除...之外（还）
  * [hexadecimal](https://dict.eudic.net/dicts/en/hexadecimal):  英音：/ˌheksə'desɪm(ə)l/ n. & adj. 十六进制（的）
  * [octal](https://dict.eudic.net/dicts/en/octal): 英音：/'ɒkt(ə)l/ adj. 八进制的
</details>

### String

Another fundamental part of creating programs in JavaScript for webpages and servers alike is working with textual data. As in other languages, we use the type string to refer to these textual datatypes. Just like JavaScript, TypeScript also uses double quotes (") or single quotes (') to surround string data.
```typescript
let color: string = "blue";
color = 'red';
```
<details>
  <summary>translate to chinese</summary>
  
  在`JavaScript`网页和服务端编程中另外一个创建程序的基础部分是都需要处理文本数据。和其它语言一样，我们使用类型`string`来表示这些文本数据类型。就像`JavaScript`,`TypeScript`也使用双引号(`"`)或者单引号(`'`)来包裹字符串数据。
</details>

You can also use template strings, which can span multiple lines and have embedded expressions. These strings are surrounded by the backtick/backquote (\`) character, and embedded expressions are of the form `${ expr }`.
<details>
  <summary>translate to chinese</summary>
  
  你也能使用模板字符串，它能跨越多行文本和内嵌表达式。这些字符串被反引号字符包裹，并且以`${ expr }`的形式内嵌表达式。
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-ts-string-span.png)
</details>

```typescript
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
```
This is equivalent to declaring `sentence` like so:
```typescript
let sentence: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
```

<details>
  <summary>knowledge point</summary>
  
  * [span](https://dict.eudic.net/dicts/en/span): 英音：/spæn/ vt. 跨越
  * backquote: n. 反引号
</details>

### Array
TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:

```typescript
const list: number[] = [1 ,2 ,3];
```
The second way uses a generic array type, `Array<elemType>`: 
```typescript
const list: Array<number> = [1, 2, 3];
```
<details>
  <summary>translate to chinese</summary>
  
  像`JavaScript`一样，`TypeScript`允许你使用数组。数组类型可以用以下俩种方式之一编写。第一种书写方式，可以在元素的类型后接上`[]`来表示该元素类型组成的数组。第二种书写方式，使用泛型数组类型, `Array<elemType>`。
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-ts-array-write.png)
</details>

### Tuple
Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a `string` and a `number`:
```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// x = [10, 'hello']; Initialize it incorrectly
```
<details>
  <summary>translate to chinese</summary>
  
  元祖允许你表示一个用固定数量的已知类型元素组成的数组，各个元素的类型不必相同。例如：你可能想用一对值分别为`string`和`number`类型的数组来代表一个元祖类型
</details>

When accessing an element with a known index, the correct type is [retrieved](https://dict.eudic.net/dicts/en/retrieve):
```typescript
console.log(x[0].substring(1)); // OK
console.log(x[1].substring(1)); // Property 'substring' does not exist on type 'number'
```

Accessing an element outside the set of known indices fails with an error:
```typescript
x[3] = 'world'; // Error, Property '3' does not exist on type '[string, number]'
console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'
```

<details>
  <summary>translate to chinese</summary>
  
  当访问一个已知索引的元素时，正确的类型会被检索到；访问一个已知索引外的元素将会失败并显示错误
</details>
<details>
  <summary>knowledge point</summary>
  
  * [retrieve](https://dict.eudic.net/dicts/en/retrieve): 英音：/rɪ'triːv/ vt. 检索
  * indices: index的复数形式：indices is a [plural](http://www.iciba.com/plural) form of index
  * plural: n. 复数形式
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-ts-outside-tuple.png)
</details>

### Enum
A helpful addition to the standard set of datatypes from JavaScript is the `enum`. As in languages like C#, an enum is a way of giving more friendly names to sets of numeric values.
```typescript
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
```
<details>
  <summary>translate to chinese</summary>
  
  `enum`是除`JavaScript`标准数据类型集之外的一个有用的类型。像`C#`语言一样，枚举类型为一组数值(数值集)提供了一种更友好的命名方式
</details>

By default, enums begin numbering their members starting at `0`. You can change this by manually setting the value of one of its members. For example, we can start the previous example at `1` instead of `0`:
```typescript
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
```

Or, even manually set all the values in the enum:
```typescript
enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;
```
<details>
  <summary>translate to chinese</summary>
  
  默认的，枚举类型会为它的成员从零开始编号。你可以手动设置成员的值来改变这个编号。例如：在前一个例子中，枚举类型的编号可以从1开始，而不是0.
  
  或者，为枚举类型的全部成员手动赋值.
</details>

<details>
  <summary>knowledge point</summary>
  
  * number: vt.编号
  * addition to : 除 ... 之外
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-ts-enum-standard-datatypes.png)
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-ts-enum-number.png)
</details>

A handy feature of enums is that you can also go from a numeric value to the name of that value in the enum. For example, if we had the value 2 but weren’t sure what that mapped to in the Color enum above, we could look up the corresponding name:
```typescript
enum Color {
  Red = 1,
  Green,
  Blue
}
let colorName: string = Color[2];
console.log('colorName', colorName); // Display 'Green' as its value is 2 above
```

<details>
  <summary>translate to chinese</summary>
  
  枚举一个方便的功能是可以使用枚举的值找到其对应的名字。例如：如果我们只知道数值`2`但不知道它映射到`Color`枚举中的哪一个名字，我们可以通过`2`来查找到对应的名字
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-ts-enum-go%20from%20to.png)
</details>

### Any
We may need to describe the type of variables that we do not know when we are writing an application. These values may come from dynamic content, e.g. from the user or a 3rd party library. In these cases, we want to opt-out of type checking and let the values pass through compile-time checks. To do so, we label these with the any type:
```typescript
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false; // okay, definitely a boolean
``` 
<details>
  <summary>translate to chinese</summary>
  
  当我们正在写一个应用程序时，我们可能需要描述一个我们不知道类型的变量。这些值可能来自于动态的内容，比如来自于用户或者一个第三方库。在这些情况，我们想选择退出类型检查来让值能通过编译时检查。为了能这样做,我们将这些值标记为`any`类型
</details>

The `any` type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation. You might expect Object to play a similar role, as it does in other languages. However, variables of type Object only allow you to assign any value to them. You can’t call arbitrary methods on them, even ones that actually exist:
```typescript
let notSure: any = 4;
notSure.ifTtExists(); // okay,ifTiExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists(but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'
```

> Note: Avoid using `Object` in favor of the non-primitive `object` type as described in our [Do’s and Don’ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types) section.

<details>
  <summary>translate to chinese</summary>
  
  `any`类型是一个与现有`JavaScript`一起工作的强大方式，它允许你在编译时逐渐选择进入或退出烈性检查。你可能期望`Object`来扮演一个类似的角色，因为它在其它语言里就是这样，然而，`Object`类型的变量值只允许你为它们分配任意值，你不能调用它们上的任意方法，甚至这个方法真实存在。
  
  > 提示：避免使用支持非原始`object`的`Object`,如同我们在[该做什么不该做什么中](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#general-types)描述的那样。
</details>

The any type is also handy if you know some part of the type, but perhaps not all of it. For example, you may have an array but the array has a mix of different types:
```typescript
let list: any[] = [1, true, 'free'];
list[1] = 100;
```
<details>
  <summary>translate to chinese</summary>
  
  如果你知道类型的一些部分但可能不是该类型的全部，这个时候使用`any`类型是很方便的。例如：你可能有一个数组但是数组元素混合了不同类型
</details>

<details>
  <summary>knowledge point</summary>
  
  * in favor of: 支持
    ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-ts-any-knowledge-point.png)
    [favor](https://dict.eudic.net/dicts/en/favor): vt. 支持,赞成
   * [primitive](https://dict.eudic.net/dicts/en/primitive): adj. 原始的，早期的 n.原始人，原始事务
</details>

### Void
`void` is a little like the opposite of `any`: the absence of having any type at all. You may commonly see this as return type of functions that do not return a value:
```typescript
function warnUser (): void {
  console.log('this is warning message');
}
```
Declaring variables of type `void` is not useful because you can only assign `null`(only if `--strictNullChecks` is not specified, see next section) or `undefined` to them:
```typescript
let unusable: void = undefined;
unusable = null; // OK if `--strictNullChecks` is not given
```
<details>
  <summary>translate to chinese</summary>
  
  `void`有一点像`any`的相反面：完全没有任何类型。你可能会经常看到这样的情况：没有返回任一值作为函数返回值的类型。
  
  类型`void`声明变量是没有用的，因为你只能将`null`(只有当`--strictNullChecks`没有被指定的情况下，具体看下节)或`undefined`分配给它们。
</details>

<details>
  <summary>knowledge point</summary>
  
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-study-ts-void-knowledge-point.png)
  * [opposite](https://dict.eudic.net/dicts/en/opposite): adj. 相反的；对立的
  * [at all](https://dict.eudic.net/dicts/en/at%20all): (否定句) 根本；究竟
</details>

### Null and undefined
In TypeScript, both `undefined` and `null` actually have their own types named `undefined` and `null` respectively.Much like `void`, they're not extremely useful on their own: 
```typescript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```
By default `null` and `undefined` are subtypes of all other types. That means you can assign `null` and `undefined` to something like `number`.

<details>
  <summary>translate to chinese</summary>
  
  在`TypeScript`中，`undefined`和`null`都有它们自己的类型名称分别叫做`undefined`和`null`.就像`void`一样，对于它们本身来说并不是特别有用。
  
  默认情况下`null`和`undefined`是所有其它类型的子类型。这意味着你能将`null`和`undefined`分配像`number`这样的类型。
</details>

However, when using the `--strictNullChecks` flag, `null` and `undefined` are only assignable to `any` and their respective types (the one exception being that `undefined` is also assignable to `void`). This helps avoid many common errors. In cases where you want to pass in either a `string` or `null` or `undefined`, you can use the union type `string | null | undefined`.

Union type are an advanced topic that we'll cover in a later chapter.

> As a note: we encourage the use of `--strictNullChecks` when possible, but for the purposes of this handbook, we will assume it is turned off.
