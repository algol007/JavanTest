const addNewMemberAsset = 'insert into member_asset (member_id, asset_id) values ($1, $2)';
const deleteMemberAsset = 'delete from member_asset where member_id = $1 and asset_id = $2';

module.exports = {
  addNewMemberAsset,
  deleteMemberAsset,
};
