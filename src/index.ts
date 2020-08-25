import $ from "jquery";
import * as ko from "knockout";
import { Observable, ObservableArray } from "knockout";
import { ListasApiHelper } from "../api/ListasApiHelper";

export class IndexController {
  email: Observable<string>;
  lista: ObservableArray<any>;
  api: ListasApiHelper;
  valoresLista: any;

  abrir(): void;
  cerrar(): void;
  guardar(): void;
  cambiarTab(param1: any, param2: any, data: any, event: any): void;
  home(): void;
  formularios();

  constructor() {
    this.api = new ListasApiHelper();
    this.email = ko.observable("pp@qq.kk");
    this.lista = ko.observableArray();

    this.home = (): void => {
      $(".tab-pane.fade.show.active").removeClass("show active");
      $("#nav-home").addClass("show active");
    };

    this.formularios = (): void => {
      $(".tab-pane.fade.show.active").removeClass("show active");
      $("#nav-formularios").addClass("show active");
    };

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

const indexController = new IndexController();

ko.applyBindings(indexController, document.getElementById("app"));
