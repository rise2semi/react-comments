// var React = require('react');
// var ReactDOM = require('react-dom');
//
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('app')
// );
class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
