const addNewMemberAsset = 'insert into member_asset (member_id, asset_id) values ($1, $2)';
const deleteMemberAsset = 'delete from member_asset where member_id = $1 and asset_id = $2';
const getMemberAssetById = 'select sum(a.price) as total_assets from member_asset ma join members m on ma.member_id = m.id join assets a on ma.asset_id = a.id where m.id = $1;';

module.exports = {
  addNewMemberAsset,
  deleteMemberAsset,
  getMemberAssetById
};
