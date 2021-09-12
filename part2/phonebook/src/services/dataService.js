import axios from "axios";

const url = "http://localhost:3001/persons";

const getAll = () => {
  const req = axios.get(url);
  return req.then((res) => res.data);
};

const createData = (newData) => {
  const req = axios.post(url, newData);
  return req.then((res) => res.data);
};

const deleteData = (id) => {
  const req = axios.delete(`${url}/${id}`);
  return req.then((res) => res.data);
};

const updateData = (id, data) => {
  const req = axios.put(`${url}/${id}`, data);
  return req.then((res) => res.data);
};

export default {
  getAll,
  createData,
  deleteData,
  updateData,
};
