import axios from "axios";

const BACKEND_BASE_URL = process.env.BACKEND_BASE_URL;

export default class TaskApi {
  async create(dto) {
    try {
      const { data } = await axios.post(
        `https://api.dev.sessionly.co/api/v2/task/register`,
        dto
      );
      console.log("task data", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async list() {
    try {
      const { data } = await axios.get(
        `https://api.dev.sessionly.co/api/v2/task/all`
      );
      console.log("task data api", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async getById() {
    try {
      const { data } = await axios.get(
        `https://api.dev.sessionly.co/api/v2/task/get`
      );
      console.log("task member", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async edit(taskId, dto) {
    try {
      const { data } = await axios.patch(
        `https://api.dev.sessionly.co/api/v2/task/update/${taskId}`,
        dto
      );
      console.log("updated task ", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async remove(taskId) {
    try {
      const { data } = await axios.delete(
        `https://api.dev.sessionly.co/api/v2/task/delete/${taskId}`
      );
      console.log("delete task", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
