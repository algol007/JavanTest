const { Router } = require('express');
const controller = require('./controllers')

const router = Router();

router.get('/', controller.getAllMembers);
router.post('/', controller.addNewMember);
router.get('/:id', controller.getMemberById);
router.put('/:id', controller.updateMember);
router.delete('/:id', controller.deleteMember);

module.exports = router;