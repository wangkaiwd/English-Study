### record some knowledge of articles

#### foreword
1. We will use the widely known Hacker News API to fetch popular articles from the tech world

2. If you just want to have a ready to go React Hook for data fetching

3. In the future, React Hooks are not be intended for data fetching in React. Instead, a feature called Suspense will be in charge for it. The following walkthrough is nonetheless a great way to learn more about state and effect hooks in React.

#### data fetching with react hooks
1. If you are not familiar with data fetching in React, checkout my extensive data fetching in React article。

2.  If you haven't installed axios yet, you can do so by on the command line with npm install axios。

3. The effect hook called useEffect is used to fetch the data with axios from the API and to set the data in the local state of the component with the state hook's update function

4. However, when you run your application, you should stumble into a nasty loop.

5. The effect hook runs when the component mounts but also when the component updates

6. That's why you can provide an empty array as second argument to the effect hook to avoid activating it on component updates but only for the mounting of the component.