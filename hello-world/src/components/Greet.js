import react from "react";

export default class Greet extends react.Component {
  render(){
    return react.createElement(
      "div",
      null,
      react.createElement(
        "h1",
        { className: "hello", style: { color: "red" } },
        `${this.props.name} + numberTry = ${this.props.mytry}`
      ),
      react.createElement(
        "h1",
        { className: "hello", style: { color: "green" } },
        "hello with create element 2"
      )
    );
  }

}
