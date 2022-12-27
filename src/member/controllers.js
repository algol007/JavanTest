const pool = require('../../db');
const queries = require('./queries');

const getAllMembers = (req, res) => {
  pool.query(queries.getAllMembers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getMemberById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getMemberById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

const addNewMember = (req, res) => {
  const { name, gender } = req.body;

  //create new member
  pool.query(queries.addNewMember, [name, gender], (error, results) => {
    if (error) throw error;
    res.status(201).send('New member has been added!');
  });
};

const deleteMember = (req, res) => {
  const id = parseInt(req.params.id);
  //check if member is exists.
  pool.query(queries.getMemberById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send('Member not found.');
      return;
    };
    
    //delete member
    pool.query(queries.deleteMember, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send('Member has been deleted!');
    });
  });
};

const updateMember = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, gender } = req.body;
  //check if member is exists.
  pool.query(queries.getMemberById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send('Member not found.');
      return;
    };
    
    //update member
    pool.query(queries.updateMember, [id, name, gender], (error, results) => {
      if (error) throw error;
      res.status(200).send('Member has been updated!');
    });
  });
};

module.exports = {
  getAllMembers,
  getMemberById,
  addNewMember,
  deleteMember,
  updateMember,
};