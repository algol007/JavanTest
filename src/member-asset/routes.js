const { Router } = require('express');
const controller = require('./controllers')

const router = Router();

router.post('/', controller.addNewMemberAsset);
router.delete('/', controller.deleteMemberAsset);
router.get('/:id', controller.getMemberAssetById);

module.exports = router;