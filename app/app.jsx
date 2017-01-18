var React = require('react');
var ReactDOM = require('react-dom');

var TodoApp = require('TodoApp');

var obj1 = {
  name: 'Suresh',
  location: 'Phoenix'
};

var obj2 = {
  age: 34,
  ...obj1
};

console.log(obj2);

ReactDOM.render(
  <TodoApp />,
  document.getElementById('app')
);
