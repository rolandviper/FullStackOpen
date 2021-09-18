import axios from "axios";

const url = "/api/persons";

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

const dataService = { getAll, createData, deleteData, updateData };

export default dataService;
