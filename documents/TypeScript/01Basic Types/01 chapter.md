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
