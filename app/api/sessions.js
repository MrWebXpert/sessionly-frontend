import axios from "axios";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;

export default class SessionsApi {
  async create(dto) {
    try {
      const { data } = await axios.post(
        `https://api.dev.sessionly.co/api/v2/sessions/register`,
        dto
      );
      console.log("sessions data", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async list() {
    try {
      const { data } = await axios.get(`https://api.dev.sessionly.co/api/v2/sessions/all`);
      console.log("sessions data api", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async getById() {
    try {
      const { data } = await axios.get(
        `https://api.dev.sessionly.co/api/v2/sessions/get/${id}`
      );
      console.log("sessions", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async edit(SessionsId, dto) {
    try {
      const { data } = await axios.patch(
        `https://api.dev.sessionly.co/api/v2/sessions/update/${sessionsId}`,
        dto
      );
      console.log("updated sessions  ", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async remove(sessionsId) {
    try {
      const { data } = await axios.delete(
        `https://api.dev.sessionly.co/api/v2/sessions/delete/${sessionsId}`
      );
      console.log("delete sessions ", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
