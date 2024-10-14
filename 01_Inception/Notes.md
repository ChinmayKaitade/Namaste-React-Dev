1. What is CDN?
2. What is crossorigin in React CDN?
3. Why there are two files react and react-dom in react?
4. Why did react made different files?


React CDN Links:

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>

<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>


# React Core Concepts ✅

1. What is a React.createElement or React Element?

Ans: React Element is a Objects containing props.
props are the attributes and children inside the element. It is not the h1 tag yet.
React.createElement is a core thing which comes from React.
ReactDOM.createRoot comes from React DOM

2. What is root.render?

Ans: We passing react element inside render function. React render function job is to take this object, create the HTML tag which the browser understand and put that react element into the Browser DOM.
Simply it takes a react element and convert it into a tag and put it into a DOM.

**NOTE**: _createElement Syntax is as follows:_

1. In createElement first parameter is **tag** which we have to use.
2. Second parameter is the **Object** where we pass the attributes.
3. Third parameter is the innerHTML, innerText that we want to return in that tag and also we can include Children. If we want more than one children then make a array of it follow the following syntax.


**_Q. Will the order of scripts matters in code or it can be written in anywhere in code? if yes then why?_**

**_Q. Can we replace react-dom CDN script with react-development CDN script? If yes then what will be happening overthere and if no then why?_**