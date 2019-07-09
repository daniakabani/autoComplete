const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    // res.send('sup')
    res.status(201).json({
        "message": "autocomplete thing"
    })
});
module.exports = router;