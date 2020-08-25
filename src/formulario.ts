import $ from "jquery";
import * as ko from "knockout";
import { Observable, ObservableArray } from "knockout";
import { ListasApiHelper } from "../api/ListasApiHelper";
//import { ControllerBase } from "../libs/ControllerBase";

export class Formulario /*extends ControllerBase*/ {
  email: Observable<string>;
  lista: ObservableArray<any>;
  api: ListasApiHelper;
  valoresLista: any;

  abrir(): void;
  cerrar(): void;
  guardar(): void;

  constructor() {
    //super(Formulario, "formulario");
    this.api = new ListasApiHelper();
    this.email = ko.observable("pp@qq.kk");
    this.lista = ko.observableArray();

    this.api.GetLista().done(data => {
      $.each(data, (index: any, value: any) => {
        this.lista.push({ id: value.index, text: value.nombre });
      });
    });

    this.abrir = (): void => {
      $("#modal1").css("display", "block");
      $("#modal1").addClass("show");
    };

    this.cerrar = (): void => {
      $("#modal1").css("display", "none");
      $("#modal1").removeClass("show");
    };

    this.guardar = (): void => {
      console.log("guardar");
      $("#modal1").css("display", "none");
      $("#modal1").removeClass("show");
    };
  }
}

const formularioController = new Formulario();

ko.applyBindings(formularioController, document.getElementById("formulario"));
