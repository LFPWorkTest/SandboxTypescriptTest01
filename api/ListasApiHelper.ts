import { ApiHelperBase } from "./ApiHelperBase";

export class ListasApiHelper extends ApiHelperBase {
  GetLista() {
    return this.get("../DB/ListasDatos.json");
  }
}
