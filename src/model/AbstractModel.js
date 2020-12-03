import api from "@/services/api";

class AbstractModel {
  constructor() {
    this.api = api;
  }
}

export default AbstractModel
