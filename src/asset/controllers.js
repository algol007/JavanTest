const pool = require('../../db');
const queries = require('./queries');

const getAllAssets = (req, res) => {
  pool.query(queries.getAllAssets, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getAssetById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getAssetById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
};

const addNewAsset = (req, res) => {
  const { name, price } = req.body;

  //create new Asset
  pool.query(queries.addNewAsset, [name, price], (error, results) => {
    if (error) throw error;
    res.status(201).send('New Asset has been added!');
  });
};

const deleteAsset = (req, res) => {
  const id = parseInt(req.params.id);
  //check if Asset is exists.
  pool.query(queries.getAssetById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send('Asset not found.');
      return;
    };
    
    //delete Asset
    pool.query(queries.deleteAsset, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send('Asset has been deleted!');
    });
  });
};

const updateAsset = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  //check if Asset is exists.
  pool.query(queries.getAssetById, [id], (error, results) => {
    if (!results.rows.length) {
      res.send('Asset not found.');
      return;
    };
    
    //update Asset
    pool.query(queries.updateAsset, [id, name, price], (error, results) => {
      if (error) throw error;
      res.status(200).send('Asset has been updated!');
    });
  });
};

module.exports = {
  getAllAssets,
  getAssetById,
  addNewAsset,
  deleteAsset,
  updateAsset,
};