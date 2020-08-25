import * as ko from "knockout";

export class ControllerBase {
  private _inicializado: boolean = false;

  constructor(controller: any, domElementId: string) {
    let domElement = document.getElementById(domElementId);
    console.log("controller:", controller);
    console.log("domElement:", domElement);

    if (!this._inicializado) {
      ko.applyBindings(controller, domElement);
      this._inicializado = true;
    }
  }
}
