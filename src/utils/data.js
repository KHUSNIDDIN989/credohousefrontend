import axios from "axios";

const Company = (path) => {
  return axios.get(`https://credohouse.herokuapp.com/${path}`);
};

const Complex = (path, id) => {
  return axios.get(`https://credohouse.herokuapp.com/${path}/${id}`);
};
const Calc = (path, id, year) => {
  return axios.get(
    `https://credohouse.herokuapp.com/${path}?id=${id}&year=${year}`
  );
};

const Post = (path, name, img) => {
  return axios.post(`https://credohouse.herokuapp.com/${path}`, {
    name: name,
    img: img,
  });
};

const PostComplex = (path, name, address, select) => {
  return axios.post(`https://credohouse.herokuapp.com/${path}`, {
    name: name,
    address,
    id: select,
  });
};

const PostRooms = (path, name, address, kv, select) => {
  return axios.post(`https://credohouse.herokuapp.com/${path}`, {
    room: name,
    price: address,
    kv: kv,
    complex_id: select,
  });
};

const Auth1 = (path, login, password) => {
  return axios.post(`https://credohouse.herokuapp.com/${path}`, {
    login,
    password,
  });
};

const Delete = (path, id) => {
  return axios.delete(`https://credohouse.herokuapp.com/${path}/${id}`);
};

export { Company, Complex, Calc, Post, Delete, PostComplex, PostRooms, Auth1 };
