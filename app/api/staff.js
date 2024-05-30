import axios from "axios";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;

export default class StaffApi {
  async create(dto) {
    try {
      const { data } = await axios.post(
        `https://api.dev.sessionly.co/api/v2/staff/register`,
        dto
      );
      console.log("Staff data", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async list() {
    try {
      const { data } = await axios.get(`https://api.dev.sessionly.co/api/v2/staff/all`);
      console.log("Staff data api", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async gitSingle() {
    try {
      const { data } = await axios.get(`https://api.dev.sessionly.co/api/v2/staff/get`);
      console.log("Staff member", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async edit(staffId, dto) {
    try {
      const { data } = await axios.patch(
        `https://api.dev.sessionly.co/api/v2/staff/update/${staffId}`,
        dto
      );
      console.log("updated staff member", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async remove(staffId) {
    try {
      const { data } = await axios.delete(
        `https://api.dev.sessionly.co/api/v2/staff/delete/${staffId}`
      );
      console.log("delete staff member", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
