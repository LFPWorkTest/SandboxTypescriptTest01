import * as ko from "knockout";
//import $ from "jquery";

export class IndexController {
  ir(): void;

  constructor() {
    this.ir = (): void => {
      window.location.href = "formularios.html";
    };
  }
}

const indexController = new IndexController();

ko.applyBindings(indexController, document.getElementById("index"));
