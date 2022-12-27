const getAllMembers = 'select * from members';
const getMemberById = 'select * from members where id = $1';
const addNewMember = 'insert into members (name, gender) values ($1, $2)';
const deleteMember = 'delete from members where id = $1';
const updateMember = 'update members set name = $2, gender = $3 where id = $1';

module.exports = {
  getAllMembers,
  getMemberById,
  addNewMember,
  deleteMember,
  updateMember,
};
