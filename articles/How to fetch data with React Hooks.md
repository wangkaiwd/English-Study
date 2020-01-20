## 如何`React Hooks`获取数据
> 原文地址：[How to fetch data with React Hooks?](https://www.robinwieruch.de/react-hooks-fetch-data)

在这个教程中，我想向您展示如何通过`state`和`effect`钩子来获取数据。我们将会使用广为人知的[Hacker News API](https://hn.algolia.com/api)从科技界获取流行文章。你也会为数据获取实现自己的自定义`hook`,它可以在你的应用中的任何地方被复用或者发布到`npm`作为一个独立的`node`包。

如果你完全不了解这个`React`新特性，查阅这里：[introduction to React Hooks](https://www.robinwieruch.de/react-hooks)。如果你想要查阅如何在`React`中使用`hooks`来获取数据示例的完成项目，可以查阅这个[`GitHub`仓库](https://github.com/the-road-to-learn-react/react-hooks-introduction)。

如果你只想准备去使用`React Hook`来获取数据：执行`npm install use-data-api`并且跟随文档来使用。如果你用到了它，别忘记为它点一个`star`。

**注意：**在未来，`React`并不打算用`React Hooks`来获取数据。相反的，一个叫做`Suspense`的特性将会负责这件事。不过，下列的讲解是一个很好的用来学习更多关于`React`中`state`和`effect` `hooks`内容的方式。