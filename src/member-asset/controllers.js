const pool = require('../../db');
const queries = require('./queries');

const addNewMemberAsset = (req, res) => {
  const { member_id, asset_id } = req.body;

  //create new member asset
  pool.query(queries.addNewMemberAsset, [member_id, asset_id], (error, results) => {
    if (error) throw error;
    res.status(201).send('Member asset has been added!');
  });
};

const deleteMemberAsset = (req, res) => {
  const { member_id, asset_id } = req.body;

  //delete member asset
  pool.query(queries.deleteMemberAsset, [member_id, asset_id], (error, results) => {
    if (error) throw error;
    res.status(200).send('Member asset has been deleted!');
  });
};

const getMemberAssetById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getMemberAssetById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

module.exports = {
  addNewMemberAsset,
  deleteMemberAsset,
  getMemberAssetById
};