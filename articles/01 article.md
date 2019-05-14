### [State of React State Management fro 2019](https://blog.bitsrc.io/state-of-react-state-management-in-2019-779647206bbc)

#### One

State management has always been a vital yet somewhat dreadful aspect for working with React. Recently I’ve had the pleasure of talking to a few R&D teams, each of whom had an entirely different opinion about this topic.   

译著者：R&D资源指的是从事科研与试验发展活动所必需的人力、物力、财力等，R&D teams: 这里指技术开发团队

<details>
<summary>view the definition</summary>
</details>

* vital
  <details>
    <summary>view the definition</summary>
    英 [ˈvaɪtl]  adj. 维持生命所必需的；至关重要的；生机勃勃的
  </details>
* yet
  <details>
    <summary>view the definition</summary>
    英 [jet]  adv. 但是；还；已经；又，再 conj. 然而，但是
  </details>
* dreadful
  <details>
    <summary>view the definition</summary>
    英 [ˈdredfl]  adj. 可怕的；糟糕的
  </details>
* aspect
  <details>
    <summary>view the definition</summary>
    英 [ˈæspekt]   n. 方面；方向；形式
  </details>
#### Two
From complaints about Redux making it hard to keep components self-contained to experimenting with the new Context API, most are constantly evaluating for the right solution to pick for their team
<details>
  <summary>view the definition</summary>
  从关于`Redux`使组件难以维护独立状态的抱怨到尝试新的`Context API`，大多数的人都在不段的评估来为他们的团队选择合适的解决方案。
</details>

* complaint
  <details>
    <summary>view the definition</summary>
    英 [kəmˈpleɪnt]  n. 抱怨，控诉；委屈，怨言
  </details>
* constantly
  <details>
    <summary>view the definition</summary>
    英 [ˈkɒnstəntli] adv. 不断地，时常的
  </details>
* evalutate
  <details>
    <summary>view the definition</summary>
    英 [ɪˈvæljueɪt]  vt. 评价；求...的值（或数）
  </details>

### Three
In this post, I’ll review the state of React state management for the upcoming year, and some popular ways for managing your component states in React. Hopefully, this can help your team save some valuable time, dig deeper and make the right choice. Let’s dive in!

Tip: Use Bit to organize and share React components. Share components your team can use and develop in all your apps and build faster together. Try it out

* review
  <details>
    <summary>view the definition</summary>
    英 [rɪˈvju:] n. 复习；回顾；审核；评论
  </details>
* upcoming
  <details>
    <summary>view the definition</summary>
    英 [ˈʌpkʌmɪŋ] adj. 即将到来的，即将出现的
  </details>
* dig
  <details>
    <summary>view the definition</summary>
    英 [dɪg] vt. 挖掘；探究
  </details>
* organize
  <details>
    <summary>view the definition</summary>
    英 [ˈɔ:gənaɪz] v. 组织；安排；规划
  </details>

### Four
React itself provides some useful methods for setting component states using setState() and adding a “local state” to a class.

With this option, you can call these methods for your components. setState() tells React that this component and its children (sometimes delayed and grouped into a single batch) should be re-rendered with the most updated state, often bases on user-triggered events. setState() will always lead to a re-render as long as an update is available (shouldComponentUpdate()). By adding a “local state” to a class, you can move data from the props themselves onto a state which can be updated

### Five
Managing States with nothing but React itself is entirely possible, but can quickly become ineffective due to scaling complexity and performance issues (dependancies, redundant props, complex trees, etc). So, let’s move on to review React’s Context API- a feature built to solve exactly that

### Six
The new React Context API, officially recommended from version React’s version 16.3.0, solves a major problem when setting component states: it lets you pass data through the component tree without having to manually pass props at every level of the tree even when not needed (prop drilling)
