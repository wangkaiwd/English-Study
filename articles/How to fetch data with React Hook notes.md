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

7. That's data fetching with React hooks in a nutshell.

#### how to trigger a hook programmatically/manually
1. Let's implement an input element to enable someone to fetch other stories than "Redux" stories

2. At the moment, both states are independent from each other, but now you want to couple them to only fetch articles that are specified by the query in the input field

3. Now, make the effect dependant on the search state rather than the fluctuant query state that changes with every key stroke in the input field

#### reducer hook for data fetching
1. However, somehow all these states, managed with their own state hook, belong together because they care about the same cause.

2.  A good indicator that they belong together is that they are used one after another (e.g. setIsError, setIsLoading).

3. All this information is used in the actual reducer function to distill a new state from the previous state, the action's optional payload and type

4. In our case, the arguments of the initial states for the data, loading and error state didn't change, but they have been aggregated to one state object managed by one reducer hook instead of single state hooks.

5.  This way, the one who calls the useDataApi custom hook still gets access to data, isLoading and isError

6. Last but not least, the implementation of the reducer function is missing. It needs to act on three different state transitions called FETCH_INIT, FETCH_SUCCESS and FETCH_FAILURE. 

7. A destructuring statement is used to keep the state object immutable -- meaning the state is never directly mutated -- to enforce best practices

8. For instance, in the case of a successful request, the payload is used to set the data of the new state object.

9. In conclusion, the Reducer Hook makes sure that this portion of the state management is encapsulated with its own logic

#### abort data fetching in effect hook
1. I have written about this issue previously over here which describes how to prevent setting state for unmounted components in various scenarios

2.  If the component did unmount, the flag should be set to true which results in preventing to set the component state after the data fetching has been asynchronously resolved eventually