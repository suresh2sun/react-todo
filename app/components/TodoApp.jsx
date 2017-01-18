var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('TodoList');
//var TodoList = require('Todo');

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        },{
          id: 3,
          text: 'leave mail 0n porchg'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ]
    }
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    );
  }
});
module.exports = TodoApp;
