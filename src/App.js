import { Component } from "./core/jun";
import TheHeader from "./components/TheHeader";

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    const routerView = document.createElement("router-view");
    this.el.append(new TheHeader().el, routerView);
  }
}
