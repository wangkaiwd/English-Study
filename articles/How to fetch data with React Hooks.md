## 如何`React Hooks`获取数据
> 原文地址：[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

### 前言

在这个教程中，我想向您展示如何通过`state`和`effect`钩子来获取数据。我们将会使用广为人知的[Hacker News API](https://hn.algolia.com/api)从科技界获取流行文章。你也会为数据获取实现自己的自定义`hook`,它可以在你的应用中的任何地方被复用或者发布到`npm`作为一个独立的`node`包。
```typescript jsx
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
+  const [data, setData] = useState<{ hits: any[] }>({ hits: [] });
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectId}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
export default App;
```
如果你完全不了解这个`React`新特性，查阅这里：[introduction to React Hooks](https://www.robinwieruch.de/react-hooks)。如果你想要查阅如何在`React`中使用`hooks`来获取数据示例的完成项目，可以查阅这个[`GitHub`仓库](https://github.com/the-road-to-learn-react/react-hooks-introduction)。

如果你只想准备去使用`React Hook`来获取数据：执行`npm install use-data-api`并且跟随文档来使用。如果你用到了它，别忘记为它点一个`star`。

**注意：**在未来，`React`并不打算用`React Hooks`来获取数据。相反的，一个叫做`Suspense`的特性将会负责这件事。不过，下列的讲解是一个很好的用来学习更多关于`React`中`state`和`effect` `hooks`内容的方式。

### 用`React Hooks`来获取数据
如果你不熟悉`React`中的数据获取，查阅我的[`React`文章中通用的数据获取]。它将带你了解如何使用`React`类组件来进行数据获取，如何使用`Render Prop Components`和高阶组件(`Higher-Order Components`)来使代码变的可复用，如何进行错误处理和加载`loading`状态。在这篇文章，我想用函数组件中的`React Hooks`来向你展示这些内容。

`App`组件展示了所有项目的列表(hits = Hacker News articles)。`state`和更新`state`的函数来自于一个叫做`useState`的`hook`，它负责管理我们要为`App`组件取回数据的局部状态。初始状态用一个对象中空的`hits`列表来表示数据,还没有人为该数据设置任何状态。

我们将要使用`axios`来获取数据，但是想要使用其它的数据获取库或者浏览器原生的`fetch API`将取决于你。如果你还没有安装`axios`, 你可以通过命令行使用`npm install axios`来做这件事，然后实现你获取数据的`effect hook`。

`effect hook`叫做`effect`,它可以用`axios`从`API`获取数据并且使用组件`state hook`的更新函数来设置该组件局部状态的数据。这里我们用`async/await`来解决异步的`Promise`。

然而，当你运行你的应用的时候，你应该会陷入一个讨厌的循环。`effect hook`不仅会在组件挂载后运行，也会在组件更新后运行。由于我们在获取数据后设置了`state`,`setData`会更新组件并且使`effect`再次运行。而当`effect`再次运行的时候，它又会再次获取数据，周而复始。这是一个需要避免的`bug`，**我们只想在组件渲染后获取数据**。这就是为什么要为`effect hook`传一个空数组(`[]`)作为第二个参数的原因：避免`effect hook`在组件更新的时候执行而仅仅是在组件挂载的时候执行。

### 如何手动地/编程式的触发一个`Hook`

### 用`React Hooks`来显示`loading`

### 用`React Hooks`处理错误

### 从表单和`React`获取数据

### 自定义数据获取`Hook`

### 使用`reducer hook`获取数据

### 在`effect hook`中终止数据获取
