const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
  const { q, name = 'No name', apikey, page = 1, limit = 10 } = req.query;

  res.json({
    msg: 'get API - controller',
    q,
    name,
    apikey,
    page,
    limit
  });
}

const usersPost = (req, res) => {
  const { name, age } = req.body;

  res.status(201).json({
    msg: 'post API - controller',
    name,
    age
  });
}

const usersPut = (req, res) => {
  const { id } = req.params;

  res.status(400).json({
    msg: 'put API - controller',
    id
  });
}

const usersPatch = (req, res) => {
  res.json({
    msg: 'patch API - controller'
  });
}

const usersDelete = (req, res) => {
  res.json({
    msg: 'delete API - controller'
  });
}


module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete,
}