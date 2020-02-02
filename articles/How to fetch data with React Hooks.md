## 如何`React Hooks`获取数据
> 原文地址：[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

### 前言
> 注意：笔者将会使用`TypeScript`来完成文章中的代码，并使用`ant design`来美化界面样式

![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/english-fetch-data-with-hooks-banner.jpg)


在这个教程中，我想向您展示如何通过`state`和`effect`钩子来获取数据。我们将会使用广为人知的[Hacker News API](https://hn.algolia.com/api)从科技世界获取流行文章。通过这篇文章，你也能为数据获取实现自己的自定义`hook`,它可以在你的应用中的任何地方被复用或者发布到`npm`作为一个独立的`node`包。

如果你完全不了解这个`React`新特性，查阅这里：[introduction to React Hooks](https://www.robinwieruch.de/react-hooks)。如果你想要查阅如何在`React`中使用`hooks`来获取数据示例的完成项目，可以查阅这个[`GitHub`仓库](https://github.com/the-road-to-learn-react/react-hooks-introduction)。

如果你只想准备去使用`React Hook`来获取数据：执行`npm install use-data-api`并且跟随文档来使用。如果你用到了它，别忘记为它点一个`star`。

**注意**:在未来，`React`并不打算用`React Hooks`来获取数据。相反的，一个叫做`Suspense`的特性将会负责这件事。不过，下列的讲解是一个很好的用来学习更多关于`React`中`state`和`effect` `hooks`内容的方式。

### 用`React Hooks`来获取数据
如果你不熟悉`React`中的数据获取，可以查阅我的文章[`React`中如何数据获取](https://www.robinwieruch.de/react-fetching-data)。它将带你了解如何使用`React`类组件来进行数据获取，如何使用[`Render Prop Components`](https://zh-hans.reactjs.org/docs/render-props.html)和[高阶组件(`Higher-Order Component s`)](https://zh-hans.reactjs.org/docs/higher-order-components.html)来使代码变的可复用，如何进行错误处理和加载`loading`状态。在这篇文章，我想用函数组件中的`React Hooks`来向你展示这些内容。
```typescript jsx
import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<{ hits: any[] }>({ hits: [] });
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

`App`组件展示了所有项目的列表(hits = Hacker News articles)。`state`和更新`state`的函数来自于一个叫做`useState`的`hook`，它负责管理我们要为`App`组件取回数据的局部状态。初始状态用一个对象中空的`hits`数组来表示列表数据,还没有人为该数据设置任何状态。

我们将要使用`axios`来获取数据，但是想要使用其它的数据获取库或者浏览器原生的`fetch API`将取决于你。如果你还没有安装`axios`, 你可以通过命令行使用`npm install axios`来做这件事，然后实现获取数据的`effect hook`。
```typescript jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<{ hits: any[] }>({ hits: [] });
  useEffect(async() => {
    const result = await axios('https://hn.algolia.com/api/v1/search?query=react');
    setData(result.data);
  });
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

`effect hook`叫做`useEffect`,它可以用`axios`从`API`获取数据并且使用组件`state hook`的更新函数来设置该组件局部状态的数据。这里我们用`async/await`来解决异步的`Promise`。

然而，当你运行你的应用的时候，你应该会陷入一个讨厌的循环。`effect hook`不仅会在组件挂载后运行，也会在组件更新后运行。由于我们在获取数据后使用`setData`设置了`state`,这会更新组件并且使`effect`再次运行。而当`effect`再次运行的时候，它又会再次获取数据并调用`setData`，周而复始。这是一个需要避免的`bug`，**我们只想在组件渲染后获取数据**。这就是为什么要为`effect hook`传一个空数组(`[]`)作为第二个参数的原因：避免`effect hook`在组件更新后激活而仅仅是在组件挂载后激活。
```typescript jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<{ hits: any[] }>({ hits: [] });
  useEffect(async() => {
    const result = await axios('https://hn.algolia.com/api/v1/search?query=react');
    setData(result.data);
  },[]);
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
第二个参数用来定义`hook`依赖的所有变量(分配给这个数组的)。如果其中的一个变量发生改变，`hook`将会再次运行。如果数组中的的变量为空，`hook`在组件更新后将不再运行，因为它没有必要监测任何变量。

还有最后一个陷阱。在代码中，我们使用`async/await`从第三方`API`获取数据。按照文档所说，每个用`async`标注的函数都会返回一个隐式的`promise`: "`async`函数声明定义一个返回`AsyncFunction`对象的异步函数。异步函数是通过事件循环异步执行并且使用一个隐式的`promise`返回结果的函数"。然而，一个`effect hook`应该什么都不返回或者返回一个清理函数。这就是为什么你可能会在你的开发者控制台日志看到如下警告：**07:41:22.910 index.js Warning: useEffect function must return a cleanup function or nothing. Promises and useEffect(async() => ...) are not supported, but you can call an async function inside an effect(`useEffect`函数必须返回一个清理函数或者什么都不返回。`Promises`和`useEffect(async() => ...))`是不支持的，但是你可以在`effect`内部调用一个`async`函数）**.这也是为什么在`useEffect`函数里直接使用`async`关键字不被允许的原因。让我们为这种情况想一种变通方案：在`effect`内部使用`async`函数。(译注者：下边的代码使用了`ant design`,之后不再提示)
```typescript jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, List } from 'antd';
import { IData } from '@/responseTypes';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=react');
      setData({ hits: result.data.hits });
    };
    fetchData().then();
  }, []);
  return (
    <Card bordered={false}>
      <List dataSource={data.hits} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
```
译注者：`hacker news`的响应数据`TypeScript`类型如下：
```typescript
// responseTypes.ts
export interface IData {hits: IHit[];}

interface IHit {
  title: string;
  url: string;
  author: string;
  points: number;
  story_text?: any;
  comment_text?: any;
  _tags: string[];
  num_comments: number;
  objectID: string;
  _highlightResult: IHighlightResult;
}

interface IHighlightResult {
  title: ITitle;
  url: ITitle;
  author: IAuthor;
}

interface IAuthor {
  value: string;
  matchLevel: string;
  matchedWords: string[];
}

interface ITitle {
  value: string;
  matchLevel: string;
  matchedWords: any[];
}
```

简单来说，这就是使用`React hooks`来获取数据。但是如果你对错误处理、展示`loading`状态、如何触发从表单获取数据、以及如何实现一个可复用的数据获取`hook`感兴趣的话，请继续阅读。
### 如何手动地/编程式地触发一个`Hook`
很好，一旦组件挂载我们就会去获取数据。但是使用一个输入字段来告诉`API`我们对哪个话题感兴趣呢？"Redux"被作为默认查询，但是关于"React"的话题呢？让我们实现一个输入框能够让用户获取除"Redux"外的其它相关文章。因此，我们为输入元素引入一个新的状态。
```typescript jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Input, List } from 'antd';
import { IData } from '@/responseTypes';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({ hits: [] });
  const [query, setQuery] = useState('redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=redux');
      setData({ hits: result.data.hits });
    };
    fetchData().then();
  }, []);
  return (
    <Card bordered={false}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <List dataSource={data.hits} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
```

此时，俩个状态彼此之间互相独立，但是现在你想要组合它们只获取输入框中指定查询条件的文章数据。一旦组件挂载后，应该通过查询项来获取所有文章。
```typescript jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Input, List } from 'antd';
import { IData } from '@/responseTypes';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({ hits: [] });
  const [query, setQuery] = useState('redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${query}`);
      setData({ hits: result.data.hits });
    };
    fetchData().then();
  }, []);
  return (
    <Card bordered={false}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <List dataSource={data.hits} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
```

有一儿被忽略了：当你尝试在输入框中输入一些文字后，组件的重新渲染后并没有进行数据获取。那是因为你提供了空数组作为`effect`的第二个参数，`effect`不依赖于任何变量，因此它只会在组件挂载后触发。然而，`effect`现在应该依赖于`query`,一旦`query`改变，数据请求将会再次触发。
```typescript jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Input, List } from 'antd';
import { IData } from '@/responseTypes';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({ hits: [] });
  const [query, setQuery] = useState('redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${query}`);
      setData({ hits: result.data.hits });
    };
    fetchData().then();
  }, [query]);
  return (
    <Card bordered={false}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <List dataSource={data.hits} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
```

一旦你改变了输入框中的值数据将会重新获取。但是这也引发了另外一个问题：在你每为输入框输入一个字符的时候，`effect`将会被触发并且执行另一次数据获取请求。那么如何提供一个按钮来触发请求从而手动的地执行`hook`呢？
```typescript jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Input, List } from 'antd';
import { IData } from '@/responseTypes';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [search, setSearch] = useState('redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${search}`);
      setData({ hits: result.data.hits });
    };
    fetchData().then();
  }, [search]);
  return (
    <Card bordered={false}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => setSearch(query)}>Search</Button>
      <List dataSource={data.hits} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
```

现在，我们使`effect`依赖于`search`状态而不是随着在输入框中每一次击键而发生变化的`query`状态。一旦用户点击按钮，新的`search`状态被设置并且手动地触发`effect hook`。

`search`状态的初始值也被设置为和`query`状态一样。因为组件也在挂载后获取数据并且结果应该和输入框中的值作为查询条件获取到的数据相同。然而，具有类似的`query`和`search`状态有一点让人疑惑。为什么不设置目前的请求地址作为状态来替代`search`状态？
```typescript jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Input, List } from 'antd';
import { IData } from '@/responseTypes';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setData({ hits: result.data.hits });
    };
    fetchData().then();
  }, [url]);
  return (
    <Card bordered={false}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}>Search</Button>
      <List dataSource={data.hits} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
```

上面的例子就是用`effect hook`隐式编程来获取数据。你可以决定`effect`依赖于哪一个状态。一旦你在点击事件或在其它的副作用(`useEffect`)中设置状态，对应的`effect`将会再次运行。在上边的例子中，如果`url`状态发生改变，`effect`将会再次运行并从`API`中获取文章数据。
### 用`React Hooks`来显示`loading`
让我们继续介绍数据获取时的`loading`展示。它只是被`state hook`所管理的另外一个`state`。在`App`组件中，`loading`标记用来渲染一个`loading`指示器。

```typescript jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Input, List } from 'antd';
import { IData } from '@/responseTypes';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData({ hits: result.data.hits });
      setIsLoading(false);
    };
    fetchData().then();
  }, [url]);
  return (
    <Card bordered={false}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}>Search</Button>
      <List dataSource={data.hits} loading={isLoading} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
```

当组件挂载或者`url`状态发生改变，`effect`被调用来获取数据，`loading`状态将被设置为`true`。一旦请求成功获取到数据，`loading`状态将会再次被设置为`false`。
### 用`React Hooks`处理错误

### 从表单和`React`获取数据

### 自定义数据获取`Hook`

### 使用`reducer hook`获取数据

### 在`effect hook`中终止数据获取
