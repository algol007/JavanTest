const { Router } = require('express');
const controller = require('./controllers')

const router = Router();

router.post('/', controller.addNewMemberAsset);
router.delete('/:id', controller.deleteMemberAsset);

module.exports = router;