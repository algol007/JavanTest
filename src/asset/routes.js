const { Router } = require('express');
const controller = require('./controllers')

const router = Router();

router.get('/', controller.getAllAssets);
router.post('/', controller.addNewAsset);
router.get('/:id', controller.getAssetById);
router.put('/:id', controller.updateAsset);
router.delete('/:id', controller.deleteAsset);

module.exports = router;