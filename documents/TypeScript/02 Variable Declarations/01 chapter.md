## Varibale Declarations
### Varibale Declarations
`let` and `const` are two relatively new types of variable declarations in JavaScript. [As we mentioned earlier](https://www.typescriptlang.org/docs/handbook/basic-types.html#a-note-about-let), `let` is similar to `var` in some respects, but allows users to avoid some of the common “gotchas” that users run into in JavaScript. `const` is an augmentation of `let` in that it prevents re-assignment to a variable.

<details>
  <summary>translate to chinese</summary>
  
  在`JavaScript`中，`let`和`const`是俩个相对新的变量声明类型。正如我们之前提到的，`let`在一些方面与`var`类似，但是它可以让用户避免一些在`JavaScript`中经常遇见的“陷阱”。`const`是`let`的增强，因为它阻止为一个变量重新赋值。
</details>

<details>
  <summary>knowledge point</summary>
  
  * [respect](https://www.youdao.com/w/respect/#keyfrom=dict2.top): 美 [rɪˈspekt] 
    n. 尊敬，尊重；**方面**
    vt. 尊敬，遵守
  * run into: 遭遇，陷入；撞上；偶然遇见
  * [augument](http://www.youdao.com/w/eng/augment/#keyfrom=dict.basic.relword): 美 [ɔːɡˈment]
    vi/vt/n. 增加；增大
</details>

With TypeScript being a superset of JavaScript, the language naturally supports `let` and `const`. Here we’ll elaborate more on these new declarations and why they’re preferable to `var`.

If you’ve used JavaScript offhandedly, the next section might be a good way to refresh your memory. If you’re intimately familiar with all the quirks of `var` declarations in JavaScript, you might find it easier to skip ahead.

<details>
  <summary>translate to chinese</summary>
  
  由于`TypeScript`是`JavaScript`的超集，所以它自然地支持`let`和`const`。这里我们精心制作了很多内容关于这些新的声明并且介绍他们为什么比`var`更可取。

  如果你已经在使用`JavaScript`,下一节可能是刷新你的记忆的更好的方式。如果你熟悉`JavaScript`中`var`声明的所有怪癖，你可能会发现更容易提前跳过。
</details>

<details>
  <summary>knowledge point</summary>
  
  * [elaborate](http://www.youdao.com/w/elaborate/#keyfrom=dict2.top): 美 [ɪ'læbəret]
    adj. 精心制作的；详尽的；刹费苦心的
    vt. 精心制作
    vi. 详细描述；变复杂
    ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-study-ts-variable-declaration.png)
    
  * intimate: 美 [ˈɪntɪmət] 
    adj. 亲密的；私人的；精通的
    n. 知己；至交
    vt. 暗示；通知；宣布
  * quirk:  美 [kwɜːrk]
    n. 怪癖；急转；借口
  ![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-study-ts-document-perfer.png)
</details>