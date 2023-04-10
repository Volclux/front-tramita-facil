import axios from "axios";

const API_URL = process.env.VUE_APP_RUTA_API;

class ProcedureServices {
  async getProcedures() {
    try {
      const response = await axios.get(`${API_URL}procedures/`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  async getProceduresByLocationAndType(location = "CAN", type) {
    try {
      const response = await axios.get(`${API_URL}procedures/?location=${location}&procedure_type__in=${type}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getDetailProcedure(id) {
    try {
      const response = await axios.get(`${API_URL}procedures/${id}/`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getProcedureType(location = "CAN") {
    try {
      const response = await axios.get(
        `${API_URL}procedures/procedure_type/?location=${location}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ProcedureServices();
