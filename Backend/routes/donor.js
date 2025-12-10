const express = require('express');
const { verifyTokenAndAuthorization } = require('../middlewares/verifyToken');
const router = express.Router();

router.post('/',verifyTokenAndAuthorization,  createDonor);
router.get('/', getAllDonors);
router.get('/:id', getDonorById);
router.put('/:id', updateDonor);
router.delete('/:id', deleteDonor);
router.find('/find/:id',getDonorById);
router.get("/stats", getDonorStats);


  


module.exports = router;