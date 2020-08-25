import * as $ from "jquery";

export class ApiHelperBase {
  get(url: string): JQueryXHR {
    return $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      async: true
    });
  }
}
