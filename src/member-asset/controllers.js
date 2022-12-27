const pool = require('../../db');
const queries = require('./queries');

const addNewMemberAsset = (req, res) => {
  const { member_id, asset_id } = req.body;

  //create new memberAsset
  pool.query(queries.addNewMemberAsset, [member_id, asset_id], (error, results) => {
    if (error) throw error;
    res.status(201).send('Member asset has been added!');
  });
};

const deleteMemberAsset = (req, res) => {
  const { member_id, asset_id } = req.body;

  //delete memberAsset
  pool.query(queries.deleteMemberAsset, [member_id, asset_id], (error, results) => {
    if (error) throw error;
    res.status(200).send('Member asset has been deleted!');
  });
};

module.exports = {
  addNewMemberAsset,
  deleteMemberAsset,
};