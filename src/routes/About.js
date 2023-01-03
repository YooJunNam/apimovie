import { Component } from "../core/jun";

export default class About extends Component {
  render() {
    const { a, b, c } = history.state;
    this.el.innerHTML = /* html */ `
        <h1>About Page!</h1>
        
        `;
  }
}
