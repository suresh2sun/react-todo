var React = require('react')
var ReactDOM = require('react-dom');

var Todo = React.createClass({
  render: function() {
    var {id, text} = this.props;
    return (
      <div>
        <label>{id}: </label>
        <span>{text}</span>
      </div>
    );
  }
});

module.exports = Todo;
