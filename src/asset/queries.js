const getAllAssets = 'select * from assets';
const getAssetById = 'select * from assets where id = $1';
const addNewAsset = 'insert into assets (name, price) values ($1, $2)';
const deleteAsset = 'delete from assets where id = $1';
const updateAsset = 'update assets set name = $2, price = $3 where id = $1';

module.exports = {
  getAllAssets,
  getAssetById,
  addNewAsset,
  deleteAsset,
  updateAsset,
};
